import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"

// COMPONENTS
import Layout from "../components/layout"

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
`
const ContentChart = styled.div`
display: flex;
flex-direction: column: 
justify-content: space-between;
  height: 75vh;
  background: white;
`
const ContentCards = styled.div`
  height: 75vh;
  background: white;
`

const Four = (props: RouteComponentProps) => {
  return (
    <Layout>
      <Content>
        <ContentChart></ContentChart>
        <ContentCards>Cards</ContentCards>
      </Content>
    </Layout>
  )
}

export default Four
