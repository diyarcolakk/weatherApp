
import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"
import { cities } from "../API/getApi"

const Header = () => {
const {setCityName,cityName} = useContext(GlobalContext)


console.log(cityName)

const handlerChange = (e) => {
  setCityName(e.target.value)
}

  return (
    <header>
      <select defaultValue="İstanbul"  onChange={handlerChange}>
      {  cities.map((perCities) => {
return (
  <option  key={perCities.id} value={perCities.name}>{perCities.name}</option>
)
        })}

      </select>
    </header>
  )
}
export default Header