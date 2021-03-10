import styled, { css } from "styled-components"
import { hexToRgbA } from "../utils"

const secondaryStyle = css`
  color: ${(props: any) =>
    props.active
      ? `rgba(${hexToRgbA(props.color)}, 1)`
      : `rgba(${hexToRgbA(props.color)}, 0.4)`};
  border: solid 2px
    ${(props: any) => (props.border ? props.color : "transparent")};
  background: none;

  &:hover {
    background: ${(props: any) => `rgba(${hexToRgbA(props.color)}, 0.075)`};
  }
`
const primaryStyle = css`
  background: ${(props: any) => props.color};
  color: white;
`

const IconWrapper = styled.button<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;

  &:hover {
    cursor: pointer;
  }
  ${(props: any) => (props.primary ? primaryStyle : secondaryStyle)}
`

const IconButton = ({ icon, primary, color, border, ...rest }: any) => {
  return (
    <IconWrapper {...rest} primary={primary} color={color} border={border}>
      {icon}
    </IconWrapper>
  )
}

export default IconButton
