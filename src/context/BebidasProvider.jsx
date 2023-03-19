import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {
  //estado que guarda las bebidas
  const [bebidas, setBebidas] = useState([])
  const [modal, setModal] = useState(false)
  const [bebidaId, setBebidaId] = useState(null)
  const [receta, setReceta] = useState({})

  useEffect(() => {
    const obtenerReceta = async () => {
      if (!bebidaId) return
      try {
        const urlBase = ` https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`

        const { data } = await axios(urlBase)
        setReceta(data.drinks[0])
      } catch (error) {
        console.log(error)
      }
    }
    obtenerReceta()
  }, [bebidaId])

  const consultarBebidas = async datos => {
    try {
      const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

      const { data } = await axios.get(baseURL)
      setBebidas(data.drinks)
    } catch (error) {
      console.log(error)
    }
  }
  const handleModalClick = () => {
    setModal(!modal)
  }
  const handleBebidaId = id => {
    setBebidaId(id)
  }

  return (
    <BebidasContext.Provider
      value={{
        consultarBebidas,
        bebidas,
        handleModalClick,
        modal,
        handleBebidaId,
        receta,
        setReceta
      }}
    >
      {children}
    </BebidasContext.Provider>
  )
}

export { BebidasContext, BebidasProvider }
