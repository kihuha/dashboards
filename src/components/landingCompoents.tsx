import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"

// COMPONENTS
import Button from "./button"

const Wrapper = styled.div``
const Card = styled.div`
  padding: 3rem;
  background: white;
`
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
`

const Page = (props: RouteComponentProps) => {
  return (
    <Wrapper>
      <h1>Components list</h1>

      <CardWrapper>
        <Card>
          <Button modifiers="primary">Darius</Button>
        </Card>
        <Card></Card>
        <Card></Card>
      </CardWrapper>
    </Wrapper>
  )
}

export default Page
