import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cityName, setCityName] = useState("İstanbul");
  const [weatherInfo, setWeatherInfo] = useState();

  const key = "f93a7148e53efb42607314a9a2c72830";
  const fetchData = async () => {
    const weatherData = await axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=tr&appid=${key}`
    );
    const newData = weatherData.data.list.filter(
      (perListDate, index) => index % 8 === 0
    );
    setWeatherInfo(newData);
  };

  useEffect(() => {
    fetchData();
  }, [cityName]);

  const values = {
    weatherInfo,
    setCityName,
    cityName,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
