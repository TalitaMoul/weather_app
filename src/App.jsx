import { useState } from "react";
import "./App.css";
import AddCity from "./components/AddCity";
import DailyDetails from "./components/DailyDetails";

const climate_city_data = {
  "Vitória": {
    results: {
      temp: 25,
      description: "Tempo limpo",
      city: "Vitória, ES",
      forecast: [
        { date: "11/01", weekday: "Dom", max: 28, min: 21, condition: "clear_day", rain_probability: 0, wind_speedy: "7.56 km/h", description: "Ensolarado" },
        { date: "12/01", weekday: "Seg", max: 29, min: 23, condition: "clear_day", rain_probability: 10, wind_speedy: "9.18 km/h", description: "Céu limpo" }
      ]
    }
  },
  "Rio de Janeiro": {
    results: {
      temp: 32,
      description: "Muito Quente",
      city: "Rio de Janeiro, RJ",
      forecast: [
        { date: "11/01", weekday: "Dom", max: 35, min: 26, condition: "clear_day", rain_probability: 0, wind_speedy: "12 km/h", description: "Sol escaldante" },
        { date: "12/01", weekday: "Seg", max: 33, min: 25, condition: "cloudly_day", rain_probability: 20, wind_speedy: "15 km/h", description: "Parcialmente nublado" }
      ]
    }
  },
  "São Paulo": {
    results: {
      temp: 20,
      description: "Garoa fina",
      city: "São Paulo, SP",
      forecast: [
        { date: "11/01", weekday: "Dom", max: 22, min: 18, condition: "rain", rain_probability: 80, wind_speedy: "5 km/h", description: "Chuva leve" },
        { date: "12/01", weekday: "Seg", max: 21, min: 17, condition: "cloudly_day", rain_probability: 40, wind_speedy: "8 km/h", description: "Nublado" }
      ]
    }
  }
};


function App() {

  const [cityData, setCityData] = useState(climate_city_data["Vitória"]);

  const handleCityChange = (nome) => {
    const newData = climate_city_data[nome];
    setCityData(newData);
  };

  return (
    <div className="app-container">
      <AddCity setSelectedCity={handleCityChange} />
      <main className="column-flex">
        <div className="info-tempo">
          <h1>PREVISÃO DO TEMPO</h1>
          <p>
            {cityData.results.city},{" "}
            {cityData.results.description} -{" "}
            {cityData.results.date}
            
          </p>
        </div>
        <div className="temperatura">
          <img
            className="weather-image"
            src={`https://assets.hgbrasil.com/weather/icons/conditions/${cityData.results.forecast[0].condition}.svg`}
            alt="weather image"
          />
          <h2>{cityData.results.temp} °C</h2>
        </div>
      </main>
      <DailyDetails city={cityData.results.city} forecast={cityData.results.forecast} />
    </div>
  );
}

export default App;
