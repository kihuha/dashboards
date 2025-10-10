import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

// DASHBOARDS
import Landing from "./pages/Landing"
import Components from "./pages/Components"
import One from "./dashboards/one"
import Two from "./dashboards/two"
import Three from "./dashboards/three"
import Four from "./dashboards/four"
import Five from "./dashboards/five"
import Six from "./dashboards/six"
import Seven from "./dashboards/seven"
import Eight from "./dashboards/eight"
import Nine from "./dashboards/nine"
import Ten from "./dashboards/ten"
import Eleven from "./dashboards/eleven"
import Twelve from "./dashboards/twelve"
import Thirteen from "./dashboards/thirteen"
import Fourteen from "./dashboards/fourteen"
import Fifteen from "./dashboards/fifteen"
import LandingComponents from "./components/landingCompoents"

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
    font-family: 'Lexend', sans-serif;
    font-weight: 300;
    background: #f8f8f8;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/components" element={<Components />} />
          <Route path="/one" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
          <Route path="/four" element={<Four />} />
          <Route path="/five" element={<Five />} />
          <Route path="/six" element={<Six />} />
          <Route path="/seven" element={<Seven />} />
          <Route path="/eight" element={<Eight />} />
          <Route path="/nine" element={<Nine />} />
          <Route path="/ten" element={<Ten />} />
          <Route path="/eleven" element={<Eleven />} />
          <Route path="/twelve" element={<Twelve />} />
          <Route path="/thirteen" element={<Thirteen />} />
          <Route path="/fourteen" element={<Fourteen />} />
          <Route path="/fifteen" element={<Fifteen />} />
          <Route path="/new" element={<LandingComponents />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
