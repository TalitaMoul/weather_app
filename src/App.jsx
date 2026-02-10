import { useState } from "react";
import "./App.css";
import AddCity from "./components/AddCity";
import DailyDetails from "./components/DailyDetails";

const climate_city_data = {
  by: "city_name",
  valid_key: true,
  results: {
    temp: 25,
    date: "11/01/2026",
    time: "21:01",
    condition_code: "27",
    description: "Tempo limpo",
    currently: "noite",
    woeid: 455922,
    city: "Vitória, ES",
    img_id: "27n",
    humidity: 83,
    cloudiness: 0,
    rain: 0,
    wind_speedy: "2.06 km/h",
    wind_direction: 30,
    wind_cardinal: "NE",
    sunrise: "05:10 am",
    sunset: "06:26 pm",
    moon_phase: "last_quarter",
    condition_slug: "clear_night",
    city_name: "Vitória",
    timezone: "-03:00",
    forecast: [
      {
        date: "11/01",
        full_date: "11/01/2026",
        weekday: "Dom",
        max: 28,
        min: 21,
        humidity: 66,
        cloudiness: 0,
        rain: 0,
        rain_probability: 0,
        wind_speedy: "7.56 km/h",
        sunrise: "05:10 am",
        sunset: "06:26 pm",
        moon_phase: "last_quarter",
        description: "Tempo limpo",
        condition: "clear_day",
      },
      {
        date: "12/01",
        full_date: "12/01/2026",
        weekday: "Seg",
        max: 29,
        min: 23,
        humidity: 63,
        cloudiness: 0,
        rain: 0,
        rain_probability: 43,
        wind_speedy: "9.18 km/h",
        sunrise: "05:11 am",
        sunset: "06:26 pm",
        moon_phase: "last_quarter",
        description: "Tempo limpo",
        condition: "clear_day",
      },
    ],
    cref: "7b4a9b",
  },
  execution_time: 0,
  from_cache: true,
};


function App() {

  const [selectedCity, setSelectedCity] = useState("Vitória");

  return (
    <div className="app-container">
      <AddCity setSelectedCity={setSelectedCity} />
      <main className="column-flex">
        <div className="info-tempo">
          <h1>PREVISÃO DO TEMPO</h1>
          <p>
            {climate_city_data.results.city},{" "}
            {climate_city_data.results.description} -{" "}
            {climate_city_data.results.date}
            
          </p>
        </div>
        <div className="temperatura">
          <img
            className="weather-image"
            src={`https://assets.hgbrasil.com/weather/icons/conditions/${climate_city_data.results.forecast[0].condition}.svg`}
            alt="weather image"
          />
          <h2>{climate_city_data.results.temp} °C</h2>
        </div>
      </main>
      <DailyDetails city={selectedCity} forecast={climate_city_data.results.forecast} />
    </div>
  );
}

export default App;
