import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const ModaBebida = () => {
  const { modal, handleModalClick, receta, setReceta } = useBebidas()

  console.log(receta)

  const mostrarIngredientes = () => {
    let ingredientes = []

    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={receta[`strIngredient${i}`]}>
            {receta[`strIngredient${i}`]}
            {receta[`strMeasure${i}`]}
          </li>
        )
      }
    }

    return ingredientes
  }

  return (
    <Modal
      show={modal}
      onHide={() => {
        handleModalClick()
        setReceta({})
      }}
    >
      <Image
        src={receta.strDrinkThumb}
        alt={`Imagen receta ${receta.strDrink}`}
      />
      <Modal.Header>
        <Modal.Title>{receta.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='p-3'>
          <h2>Instrucciones</h2>
          {receta.strInstructionsES
            ? receta.strInstructionsES
            : receta.strInstructions}
          <h2>Ingredientes</h2>
          {mostrarIngredientes()}
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default ModaBebida
