import styled from "styled-components"
import { applyStyleModifiers } from "styled-components-modifiers"
import { color as BaseColor, font } from "../design"

const color: any = { ...BaseColor }
const MODIFIER_CONFIG: {
  [name: string]: () => string
} = {}

Object.keys(color).map((colorName: string) => {
  MODIFIER_CONFIG[colorName] = () => `
    color: white;
    background: ${color[colorName].main};
    border-color: transparent;
    
    &:hover {
      box-shadow: 0 0 0 3px ${color[colorName].light};
    }
  `
  MODIFIER_CONFIG[`${colorName}Light`] = () => `
    color: ${color[colorName].main};
    background: ${color[colorName].light};
    border-color: ${color[colorName].main}1A;
    
    &:hover {
      box-shadow: 0 0 0 3px ${color[colorName].main}40;
    }
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
  min-width: 12rem;
  padding: 1.1rem 1.8rem;
  border: 1px solid rgba(15, 23, 42, 0.12);
  outline: none;
  font-family: inherit;
  border-radius: 999px;
  font-size: ${font.size.h4};
  background: white;
  color: #0f172a;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    box-shadow: 0 12px 22px rgba(15, 23, 42, 0.12);
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: 0 6px 14px rgba(15, 23, 42, 0.12);
    transform: translateY(0);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px ${BaseColor.primary.light};
  }

  ${applyStyleModifiers(MODIFIER_CONFIG)}
`

export default ButtonWrapper
