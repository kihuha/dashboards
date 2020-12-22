import { Router } from "@reach/router"
import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

// DASHBOARDS
import One from "./dashboards/one"

// STYLES
const GlobalStyle = createGlobalStyle`
  ${normalize};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: #f8f8f8;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <One path="/" />
      </Router>
    </>
  )
}

export default App
