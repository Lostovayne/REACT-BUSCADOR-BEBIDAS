import { Container } from 'react-bootstrap'
import { Formulario, ModaBebida, ListadoBebidas } from './components'
import { CategoriaProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'

function App () {
  return (
    <CategoriaProvider>
      <BebidasProvider>
        <header className='py-5'>
          <h1>Buscador de Bebidas</h1>
        </header>
        <Container className='mt-5'>
          <Formulario />
          <ListadoBebidas />
          <ModaBebida />
        </Container>
      </BebidasProvider>
    </CategoriaProvider>
  )
}

export default App
