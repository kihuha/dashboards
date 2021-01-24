import styled from "styled-components"
import { applyStyleModifiers } from "styled-components-modifiers"
import { color as BaseColor, font, base } from "../design"

const color: any = { ...BaseColor }
const MODIFIER_CONFIG: {
  [name: string]: () => string
} = {}

Object.keys(color).map((colorName: string) => {
  MODIFIER_CONFIG[colorName] = () => `
    color: white;
    background: ${color[colorName].main};
  `
  MODIFIER_CONFIG[`${colorName}Light`] = () => `
    color: ${color[colorName].main};
    background: ${color[colorName].light};
  `

  return
})

interface IButton {
  modifiers?:
    | "primary"
    | "primaryLight"
    | "info"
    | "infoLight"
    | "warning"
    | "warningLight"
    | "danger"
    | "dangerLight"
    | "success"
    | "successLight"
}

const ButtonWrapper = styled.button<IButton>`
  min-width: 14rem;
  padding: 1.5rem;
  border: none;
  outline: none;
  font-family: inherit;
  border-radius: ${base.borderRadius};
  font-size: ${font.size.h4};
  background: white;

  ${applyStyleModifiers(MODIFIER_CONFIG)}
`

export default ButtonWrapper
