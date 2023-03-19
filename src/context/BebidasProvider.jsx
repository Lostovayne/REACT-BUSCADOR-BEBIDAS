import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {
  //estado que guarda las bebidas

  const [bebidas, setBebidas] = useState([])

  const consultarBebidas = async datos => {
    try {
      const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

      const { data } = await axios.get(baseURL)
      setBebidas(data.drinks)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <BebidasContext.Provider value={{ consultarBebidas, bebidas }}>
      {children}
    </BebidasContext.Provider>
  )
}

export { BebidasContext, BebidasProvider }
