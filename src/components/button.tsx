import styled from "styled-components"

const StyledButton = styled.button`
  min-width: 140px;
  min-height: 50px;
  font-size: 14px;
`

const Button = (props: any) => {
  return <StyledButton>{props.label}</StyledButton>
}

export default Button
