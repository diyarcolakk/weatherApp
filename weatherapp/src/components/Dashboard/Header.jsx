
import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"
import { cities } from "../API/getApi"
import "./header.css"

const Header = () => {
const {setCityName} = useContext(GlobalContext)
const handlerChange = (e) => {
  setCityName(e.target.value)
}

  return (
    <header className="headerClass">
      <select className="selectClass" defaultValue="İstanbul"  onChange={handlerChange}>
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