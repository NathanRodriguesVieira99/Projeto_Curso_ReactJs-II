import { ButtonContainer } from "./styles"

function Button({ title, variant = 'primary', onClick }) {
  return (
    <ButtonContainer variant={variant} onClick={onClick} >
      title={title}
    </ButtonContainer>
  )
}

export default Button