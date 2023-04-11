import { useState , useContext, useEffect } from "react"
import { GlobalContext } from "../Context/GlobalState"
import axios from "axios"
const GetApi = () => {

    const myApiKey = "f93a7148e53efb42607314a9a2c72830"
const [data,setData] = useState([])
  const {latitude,longitude} = useContext(GlobalContext)
  console.log(latitude,longitude)
  //`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=7&appid=${myApiKey}`
  //https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${myApiKey}
  const fetchData = async () => {
    const weatherData = await axios(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=7&appid=${myApiKey}`)
    setData(weatherData)
  }


  useEffect(() => {
    fetchData();
  },[])

  console.log(data)

}
export default GetApi