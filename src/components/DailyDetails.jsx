import "../css/DailyDetails.css";
import WeatherDetails from "./WeatherDetails";

function DailyDetails(props) {
  return (
    <div className="weather-details">
      <WeatherDetails forecast={props.forecast[0]} city={props.city} />
      <WeatherDetails forecast={props.forecast[1]} city={props.city} />
    </div>
  );
}

export default DailyDetails;
