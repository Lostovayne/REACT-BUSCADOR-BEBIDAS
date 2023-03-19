import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const Bebida = ({ bebida }) => {
  const { handleModalClick, handleBebidaId } = useBebidas()

  return (
    <Col md={2} lg={3}>
      <Card className='mb-4'>
        <Card.Img
          variant='top'
          src={bebida.strDrinkThumb}
          alt={`${bebida.strDrink}`}
        />

        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Button
            variant='warning'
            className='text-uppercase mt-2 2-100'
            onClick={() => {
              handleModalClick()
              handleBebidaId(bebida.idDrink)
            }}
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default Bebida
