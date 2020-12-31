import { Router } from "@reach/router"
import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

// DASHBOARDS
import One from "./dashboards/one"
import Two from "./dashboards/two"
import Three from "./dashboards/three"
import Four from "./dashboards/four"
import Five from "./dashboards/five"
import Six from "./dashboards/six"
import Seven from "./dashboards/seven"
import Eight from "./dashboards/eight"
import Twelve from "./dashboards/twelve"

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
        <One path="/one" />
        <Two path="/two" />
        <Three path="/three" />
        <Four path="/four" />
        <Five path="/five" />
        <Six path="/six" />
        <Seven path="/seven" />
        <Eight path="/eight" />
        <Twelve path="/twelve" />
      </Router>
    </>
  )
}

export default App
