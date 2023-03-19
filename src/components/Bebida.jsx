import { Col, Card, Button } from 'react-bootstrap'

const Bebida = ({ bebida }) => {
  return (
    <Col md={2} lg={3}>
      <Card className='mb-4'>
        <Card.Img
          variant='top'
          src={bebida.strDrinkThumb}
          alt={`${bebida.strDrink}`}
        />

        <Card.Body />
      </Card>
    </Col>
  )
}
export default Bebida
