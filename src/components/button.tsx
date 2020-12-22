import styled from "styled-components"
import { applyStyleModifiers } from "styled-components-modifiers"

const MODIFIER_CONFIG = {
  primary: () => `
        background: white;
        color: #4339f2;
    `,
}

const ButtonWrapper = styled.button<any>`
  padding: 1.5rem 4rem;
  border: none;
  outline: none;
  background: white;
  font-family: inherit;
  font-size: 1.4rem;
  border-radius: 0.5rem;

  ${applyStyleModifiers(MODIFIER_CONFIG)}
`

export default ButtonWrapper
