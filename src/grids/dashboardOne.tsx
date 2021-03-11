import styled from "styled-components"

const StyledGrid = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  max-width: 140rem;
  background: #eee;

  @media (min-width: 700px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
  }
`

const Top = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);

  @media (min-width: 700px) {
    grid-column: span 3;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: inherit;
  }
`
const CardWrapper = styled.div`
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);

  margin-bottom: 1rem;
  background: white;
  height: 100%;

  &:nth-child(1) {
    background: white;

    @media (min-width: 700px) {
      grid-column: 1 / 2;
    }
  }

  &:nth-child(2) {
    background: white;
    @media (min-width: 700px) {
      grid-column: 2 / 3;
    }
  }

  &:nth-child(3) {
    background: white;
    @media (min-width: 700px) {
      grid-column: 3 / 4;
    }
  }
`

const Bottom = styled.div`
  display: grid;

  @media (min-width: 700px) {
    grid-column: span 3;
    grid-template-columns: repeat(3, 1fr);
    gap: inherit;
  }
`

const Right = styled.div`
  background: white;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 700px) {
    grid-column: 3 / 4;
  }
`

const Left = styled.div`
  display: grid;

  gap: 2rem;

  @media (min-width: 700px) {
    grid-column: 1 / 3;
  }
`

const LeftTop = styled.div`
  background: white;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
`
const LeftBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  background: white;
  padding: 1rem;
`
const ChartWrapper = styled.div`
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
  background: white;
`

const DashboardGrid = ({ content }: any) => {
  return (
    <StyledGrid>
      <Top>
        {content.top.cards.map((item: any) => (
          <CardWrapper>{item}</CardWrapper>
        ))}
      </Top>
      <Bottom>
        <Left>
          <LeftTop></LeftTop>
          <LeftBottom>
            <ChartWrapper />
            <ChartWrapper />
            <ChartWrapper />
            <ChartWrapper />
          </LeftBottom>
        </Left>
        <Right></Right>
      </Bottom>
    </StyledGrid>
  )
}

export default DashboardGrid
