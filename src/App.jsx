import { useState, useEffect } from "react";
import "./App.css";
import AddCity from "./components/AddCity";
import DailyDetails from "./components/DailyDetails";

function App() {
  // Iniciamos como null para indicar que ainda não tem dados
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async (cityName) => {
    setLoading(true); // Ativa o carregamento da API

    try {
      const encodedCity = encodeURIComponent(cityName);

      const url = `/api/weather?city_name=${encodedCity}`;

      const response = await fetch(url);
      const data = await response.json();

      setCityData(data);
    } catch (error) {
      console.error("Erro ao buscar clima:", error);
      alert("Erro ao buscar dados da cidade.");
    } finally {
      setLoading(false);
    }
  };

  //  carregar Vitória assim que o App abrir
  useEffect(() => {
    fetchWeather("Vitória, ES");
  }, []);

  // função de troca de cidade para chamar a API
  const handleCityChange = (nomeDaCidade) => {
    fetchWeather(nomeDaCidade);
  };

  // Tela de carregamento
  if (loading) {
    return (
      <div className="app-container">
        <h2>Carregando previsão...</h2>
      </div>
    );
  }

  // Se não houver dados por algum erro
  if (!cityData || !cityData.results) {
    return (
      <div className="app-container">
        <h2>Erro ao carregar dados.</h2>
      </div>
    );
  }

  return (
    <div className="app-container">
      <AddCity setSelectedCity={handleCityChange} />
      <main className="column-flex">
        <div className="info-tempo">
          <h1>PREVISÃO DO TEMPO</h1>
          <p>
            {cityData.results.city}, {cityData.results.description} -{" "}
            {cityData.results.date}
          </p>
        </div>
        <div className="temperatura">
          {cityData.results.forecast &&
            cityData.results.forecast.length > 0 && (
              <img
                className="weather-image"
                alt="weather image"
                src={`https://assets.hgbrasil.com/weather/icons/conditions/${cityData.results.forecast[0].condition}.svg`}
              />
            )}
          <h2>{cityData.results.temp} °C</h2>
        </div>
      </main>
      <DailyDetails
        city={cityData.results.city}
        forecast={cityData.results.forecast}
      />
    </div>
  );
}

export default App;
