
import styled from "styled-components"
import { BsChevronRight } from "react-icons/bs"

// COMPONENTS
import Layout from "../components/layout"

import Wifi from "../img/wifi.svg"
import Mastercard from "../img/mastercard.svg"
import RowOne from "../img/twelve-one.png"
import RowTwo from "../img/twelve-two.png"
import RowThree from "../img/twelve-three.png"
import RowFour from "../img/twelve-four.png"

import { color } from "../design"

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
`
const Card = styled.div`
  padding: 3rem;
  color: white;
  border-radius: 1rem;
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CardDetails = styled.div``
const CardName = styled.h2`
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: normal;
`
const CardDigit = styled.h2`
  margin-bottom: 3rem;
  font-size: 2.2rem;
  letter-spacing: 2px;
`
const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 2rem;
  }
`

const Title = styled.h2`
  font-size: 2rem;
`

const RowGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  margin-bottom: 4rem;
`
const Row = styled.div`
  display: grid;
  grid-template-columns: 30rem auto auto auto auto auto;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  background: white;
  border-radius: 1rem;

  & > div {
    width: 24rem;
  }

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 5px;
  }

  p {
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.4);
  }
`

const Twelve = () => {
  return (
    <Layout>
      <CardGrid>
        <Card style={{ background: color.primary.main }}>
          <CardHeader>
            <Title>CraftworkBank</Title>
            <img src={Wifi} alt="" />
          </CardHeader>
          <CardDetails>
            <CardName>Henry Richardson</CardName>
            <CardDigit>4567 **** **** 4501</CardDigit>
            <CardFooter>
              <p>04 / 23</p>
              <img src={Mastercard} alt="" />
            </CardFooter>
          </CardDetails>
        </Card>
        <Card style={{ background: color.danger.main }}>
          <CardHeader>
            <Title>CraftworkBank</Title>
            <img src={Wifi} alt="" />
          </CardHeader>
          <CardDetails>
            <CardName>Brijamohan Mallick</CardName>
            <CardDigit>3460 **** **** 8710</CardDigit>
            <CardFooter>
              <p>12 / 20</p>
              <img src={Mastercard} alt="" />
            </CardFooter>
          </CardDetails>
        </Card>
        <Card style={{ background: color.success.main }}>
          <CardHeader>
            <Title>CraftworkBank</Title>
            <img src={Wifi} alt="" />
          </CardHeader>
          <CardDetails>
            <CardName>Santiago Valentín</CardName>
            <CardDigit>1005 **** **** 9435</CardDigit>
            <CardFooter>
              <p>06 / 24</p>
              <img src={Mastercard} alt="" />
            </CardFooter>
          </CardDetails>
        </Card>
      </CardGrid>
      <RowGrid>
        <Row>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={RowOne} alt="" style={{ marginRight: "1rem" }} />
            <div>
              <h2>Jel Chibuzo</h2>
              <p>Lima</p>
            </div>
          </div>
          <div>
            <h2>578</h2>
            <p>Projects</p>
          </div>
          <div>
            <h2>357</h2>
            <p>Finished Projects</p>
          </div>
          <div>
            <h2 style={{ color: color.primary.main }}>$390.99</h2>
            <p>Total Profit</p>
          </div>
          <div>
            <h2>189</h2>
            <p>Followers</p>
          </div>
          <BsChevronRight size={24} color="rgba(0,0,0,0.2)" />
        </Row>
        <Row>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={RowTwo} alt="" style={{ marginRight: "1rem" }} />
            <div>
              <h2>Nahia Colunga</h2>
              <p>Hangzhou</p>
            </div>
          </div>
          <div>
            <h2>32</h2>
            <p>Projects</p>
          </div>
          <div>
            <h2>241</h2>
            <p>Finished Projects</p>
          </div>
          <div>
            <h2 style={{ color: color.primary.main }}>$23.50</h2>
            <p>Total Profit</p>
          </div>
          <div>
            <h2>1034</h2>
            <p>Followers</p>
          </div>
          <BsChevronRight size={24} color="rgba(0,0,0,0.2)" />
        </Row>
        <Row>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={RowThree} alt="" style={{ marginRight: "1rem" }} />
            <div>
              <h2>Wen Yahui</h2>
              <p>Kinshasa</p>
            </div>
          </div>
          <div>
            <h2>1980</h2>
            <p>Projects</p>
          </div>
          <div>
            <h2>34</h2>
            <p>Finished Projects</p>
          </div>
          <div>
            <h2 style={{ color: color.primary.main }}>$788.00</h2>
            <p>Total Profit</p>
          </div>
          <div>
            <h2>810</h2>
            <p>Followers</p>
          </div>
          <BsChevronRight size={24} color="rgba(0,0,0,0.2)" />
        </Row>
        <Row>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={RowFour} alt="" style={{ marginRight: "1rem" }} />
            <div>
              <h2>Elsi Hansdottir</h2>
              <p>Edmonton</p>
            </div>
          </div>
          <div>
            <h2>510</h2>
            <p>Projects</p>
          </div>
          <div>
            <h2>5601</h2>
            <p>Finished Projects</p>
          </div>
          <div>
            <h2 style={{ color: color.primary.main }}>$613.65</h2>
            <p>Total Profit</p>
          </div>
          <div>
            <h2>93</h2>
            <p>Followers</p>
          </div>
          <BsChevronRight size={24} color="rgba(0,0,0,0.2)" />
        </Row>
      </RowGrid>
    </Layout>
  )
}

export default Twelve
