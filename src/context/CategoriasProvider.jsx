import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const CategoriasContext = createContext()

const CategoriaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([])

  const obtenerCategorias = async () => {
    try {
      const baseURL =
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

      const { data } = await axios.get(baseURL)

      setCategorias(data.drinks)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerCategorias()
  }, [])

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {children}
    </CategoriasContext.Provider>
  )
}

export { CategoriasContext, CategoriaProvider }
