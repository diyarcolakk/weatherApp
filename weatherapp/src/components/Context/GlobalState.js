import { createContext } from "react";
import { useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      console.log(coords);
      setLongitude(coords.longitude);
      setLatitude(coords.latitude);
    });
  }, [latitude, longitude]);

  return (
    <GlobalContext.Provider value={{ latitude, longitude }}>
      {children}
    </GlobalContext.Provider>
  );
};
