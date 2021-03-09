import styled, { css } from "styled-components"
import { color } from "../design"

const secondaryStyle = css`
  color: ${color.primary.main};
`
const primaryStyle = css`
  background: ${color.primary.main};
  color: white;
`

const StyledButton = styled.button`
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1.4rem;
  min-width: 14rem;
  min-height: 5rem;
  font-size: 14px;
  font-weight: 600;
  background: none;
  border-radius: 5px;

  ${(props: any) => (props.primary ? primaryStyle : secondaryStyle)}
`

const Button = ({ label, ...rest }: any) => {
  return <StyledButton {...rest}>{label}</StyledButton>
}

export default Button
