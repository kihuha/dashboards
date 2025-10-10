import styled from "styled-components"

// GRAPHS
import GraphOne from "../components/graphOne"
import GraphTwo from "../components/graphTwo"

const Layout = styled.section``
const ComponentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 5rem 0;
  text-align: center;

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 1000px) {
    width: 40%;
  }
`
const ComponentTitle = styled.h1`
  font-size: 5rem;
`

const ComponentText = styled.p`
  font-size: 2rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Components = () => {
  return (
    <Layout>
      <ComponentHeader>
        <ComponentTitle>Dashboard Components</ComponentTitle>
        <ComponentText>Components used in the dashboards</ComponentText>
      </ComponentHeader>
      <Content>
        <GraphOne />
        <GraphTwo />
      </Content>
    </Layout>
  )
}

export default Components
