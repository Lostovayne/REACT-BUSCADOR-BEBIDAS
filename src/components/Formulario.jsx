import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import usecategorias from '../hooks/useCategorias'
import { useState } from 'react'
import useBebidas from '../hooks/useBebidas'

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: ''
  })
  const [alerta, setAlerta] = useState('')
  const { categorias } = usecategorias()
  const { consultarBebidas } = useBebidas()

  const handleSubmit = e => {
    e.preventDefault()

    if (Object.values(busqueda).includes('')) {
      setAlerta('Todos los campos son obligatorios')
      return
    }
    setAlerta('')
    consultarBebidas(busqueda)
  }

  return (
    <Form onSubmit={handleSubmit}>
      {alerta && <Alert variant='danger'>{alerta}</Alert>}

      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
            <Form.Control
              id='nombre'
              type='text'
              placeholder='Nombre Bebida'
              value={busqueda.nombre}
              name='nombre'
              onChange={e =>
                setBusqueda({ ...busqueda, nombre: e.target.value })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='categoria'>Categoría Bebida</Form.Label>
            <Form.Select
              id='categoria'
              aria-label='Default select example'
              value={busqueda.categoria}
              name='nombre'
              onChange={e =>
                setBusqueda({ ...busqueda, categoria: e.target.value })
              }
            >
              <option value=''>-Selecciona una Categoria-</option>
              {categorias.map(categoria => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className='justify-content-end'>
        <Col md={3}>
          <Button
            type='submit'
            variant='danger'
            className='text-uppercase w-100'
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
export default Formulario
