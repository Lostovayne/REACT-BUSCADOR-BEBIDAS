import { useContext } from 'react'
import { CategoriasContext } from '../context/CategoriasProvider'

const usecategorias = () => {
  return useContext(CategoriasContext)
}

export default usecategorias
