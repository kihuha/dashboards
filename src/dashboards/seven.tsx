import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import { BsThreeDots } from "react-icons/bs"

// COMPONENTS
import Layout from "../components/layout"
import Button from "../components/button"
import Progress from "../components/progress"
import { PieChartTwo } from "../components/piechart"
import Hero from "../img/seven-hero.svg"

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const HeroTitle = styled.h2`
  width: 72rem;
  margin: 2rem 0 1rem 0;
  font-size: 4rem;
`
const HeroText = styled.p`
  width: 45.5rem;
  margin-bottom: 4rem;
  font-size: 1.4rem;
`

const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4rem;
  margin-top: 7rem;
  margin-bottom: 4rem;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: white;
`

const CardTitle = styled.h3`
  font-size: 2rem;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
`

const Legend = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 3.5rem;
`

const LegendGrid = styled.div`
  display: flex;
`

const LegendItem = styled.div`
  display: flex;
  font-size: 1.4rem;

  &:not(:last-child) {
    margin-right: 3rem;
  }

  &::before {
    content: "";
    display: block;
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.5rem;
    border-radius: 100%;
  }

  &:nth-of-type(1) {
    &::before {
      background: #ffe5d3;
    }
  }
  &:nth-of-type(2) {
    &::before {
      background: #ff3a29;
    }
  }

  &:nth-of-type(3) {
    &::before {
      background: #34b53a;
    }
  }
  &:nth-of-type(4) {
    &::before {
      background: #4339f2;
    }
  }
`

const Seven = (props: RouteComponentProps) => {
  return (
    <Layout>
      <Top>
        <img src={Hero} alt="" />
        <HeroTitle>
          Every large design company whether it’s a multi-national branding
        </HeroTitle>
        <HeroText>
          Every large design company whether it’s a multi-national branding
          corporation or a regular down at heel tatty magazine publisher needs
          to fill holes in the workforce.
        </HeroText>
        <Button modifiers="primary">Start for free</Button>
      </Top>
      <Bottom>
        <Card>
          <CardHeader>
            <CardTitle>Text</CardTitle>
            <BsThreeDots size={25} color="#eee" />
          </CardHeader>
          <PieChartTwo percent={67} color="#FF3A29" />
          <Legend>
            <LegendGrid>
              <LegendItem>Restless</LegendItem>
              <LegendItem>Awake</LegendItem>
            </LegendGrid>
          </Legend>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Text</CardTitle>
            <BsThreeDots size={25} color="#eee" />
          </CardHeader>
          <Legend style={{ marginTop: 0 }}>
            <LegendGrid style={{ flexWrap: "wrap" }}>
              <LegendItem>Restless</LegendItem>
              <LegendItem>Awake</LegendItem>
              <LegendItem>Deep</LegendItem>
              <LegendItem style={{ marginTop: "1rem" }}>Time</LegendItem>
            </LegendGrid>
          </Legend>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Text</CardTitle>
            <BsThreeDots size={25} color="#eee" />
          </CardHeader>
          <PieChartTwo percent={67} color="#FF3A29" />
          <Legend>
            <LegendGrid>
              <LegendItem>Restless</LegendItem>
              <LegendItem>Awake</LegendItem>
              <LegendItem>Awake</LegendItem>
            </LegendGrid>
          </Legend>
        </Card>
        <Card>
          <CardHeader style={{ marginBottom: "0.5rem" }}>
            <CardTitle>Title</CardTitle>
            <BsThreeDots size={25} color="#eee" />
          </CardHeader>
          <p
            style={{
              marginBottom: "1rem",
              fontSize: "1.4rem",
              color: "rgba(0,0,0,0.4)",
            }}
          >
            Every large design company whether it’s a multi-national branding.
          </p>
          <div style={{ width: "100%" }}>
            <Progress
              label="Instagram"
              count="65,376"
              color="#FFB200"
              width={10}
            />
            <Progress
              label="Facebook"
              count="12,109"
              color="#4339F2"
              width={40}
            />
            <Progress
              label="Twitter"
              count="132,645"
              color="#02A0FC"
              width={30}
            />
            <Progress
              label="Behance"
              count="132,645"
              color="#FF3A29"
              width={30}
            />
          </div>
        </Card>
      </Bottom>
    </Layout>
  )
}

export default Seven
