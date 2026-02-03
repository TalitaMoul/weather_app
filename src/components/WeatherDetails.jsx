import { CloudRainWind, Wind } from "lucide-react";
import "../css/DailyDetails.css";

function WeatherDetails({ forecast, city }) {
  return (
    <div className="daily-details-content">
      <p className="description-text">
        {forecast.weekday}, {forecast.date}
      </p>
      <img
        className="weather-icon"
        src={`https://assets.hgbrasil.com/weather/icons/conditions/${forecast.condition}.svg`}
        alt="weather icon"
      />
      <p className="description-text hidden-text">{forecast.description}</p>
      <div className="temperature-details">
        <p className="large-font-size">Máx: {forecast.max} ºC</p>
        <p className="large-font-size blue-color">Mín: {forecast.min} ºC</p>
      <div className="wind-and-rain-details">
        <p>
          <CloudRainWind className="rain-icon" /> Chuva:{" "}
          {forecast.rain_probability}%
        </p>
        <p>
          <Wind className="rain-icon" /> Vento: {forecast.wind_speedy}
        </p>
      </div>
      </div>
    </div>
  );
}
export default WeatherDetails;
