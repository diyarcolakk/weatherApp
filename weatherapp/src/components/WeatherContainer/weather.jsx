import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import "./weather.css";

const Weather = () => {
  const { weatherInfo } = useContext(GlobalContext);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      {weatherInfo &&
        weatherInfo.map((day) => {     
          return (
            <div key={day.dt_txt} className={new Date().getDate() === new Date(day.dt * 1000).getDate() ? "currentDate" : "weatherContainer"} >
              <div  >
              <p>{new Date(day.dt * 1000).toLocaleDateString("tr-TR", options)}</p>
              <img 
              src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`}
              alt="Weather Icon"
               />
              <p>
                {day.main.temp_max} C°- {day.main.temp_min} C°
              </p>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Weather;
