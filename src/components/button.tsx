import styled, { css } from "styled-components"
import { colorIsDark } from "../chartUtils/color"
import { color } from "../design"

const secondaryStyle = css`
  background: ${(props: any) => (colorIsDark(props.color) ? "white" : "black")};
  color: ${(props: any) => props.color};
`
const primaryStyle = css`
  background: ${(props: any) => props.color};
  color: ${(props: any) => (colorIsDark(props.color) ? "white" : "black")};
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

const Button = ({
  label,
  color: buttonColor = color.primary.main,
  ...rest
}: any) => {
  return (
    <StyledButton color={buttonColor} {...rest}>
      {label}
    </StyledButton>
  )
}

export default Button
