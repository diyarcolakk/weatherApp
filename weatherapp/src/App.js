import Header from "./components/Dashboard/Header";
import Container from "./components/WeatherContainer/Container";
import GetApi from "./components/API/getApi";
import { useEffect, useState } from "react";
// İstenilen şey bir hava durumu uygulaması.
// CONTEXT API KULLAN
// 81 il Dropdown ile gelecek.
//Seçilen ilin ilk 5 gününün hava durumu görünecek.
//İlk açıldığında gelen konum geolocationdan izin alırak gelinecek.

function App() {
  return (
    <>
      <div>
        <GetApi />
        <Header />
        <Container />
      </div>
    </>
  );
}

export default App;
