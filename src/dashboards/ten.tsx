import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"

// COMPONENTS
import Layout from "../components/layout"

// IMAGES
import AvatarOne from "../img/ten-avatar-one.png"
import AvatarTwo from "../img/ten-avatar-two.png"
import AvatarThree from "../img/ten-avatar-three.png"
import AvatarFour from "../img/ten-avatar-four.png"
import AvatarFive from "../img/ten-avatar-five.png"
import AvatarSix from "../img/ten-avatar-six.png"
import AvatarSeven from "../img/ten-avatar-seven.png"
import AvatarEight from "../img/ten-avatar-eight.png"

import HeroOne from "../img/ten-hero-one.jpg"
import HeroTwo from "../img/ten-hero-two.jpg"
import HeroThree from "../img/ten-hero-three.jpg"
import HeroFour from "../img/ten-hero-four.jpg"
import HeroFive from "../img/ten-hero-five.jpg"
import HeroSix from "../img/ten-hero-six.jpg"
import HeroSeven from "../img/ten-hero-seven.jpg"

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  width: 48%;
`
const Right = styled.div`
  width: 48%;
`
const Content = styled.div`
  padding: 0 2rem;
  background: white;
  border-radius: 1rem;
`
const Bottom = styled.div`
  margin-top: 4rem;
`
const Title = styled.p`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.4);
`
const Nav = styled.div`
  display: flex;
  margin-bottom: 2rem;
`
const NavItem = styled.p<any>`
  font-size: 1.4rem;
  color: ${(props: any) =>
    props.active ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.4)"};

  &:not(:last-child) {
    margin-right: 2rem;
  }
`

const RowGrid = styled.div`
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  font-size: 1.4rem;

  &:not(:last-child) {
    border-bottom: solid 2px rgba(0, 0, 0, 0.1);
  }
`

const RowAmount = styled.h2`
  font-size: 2rem;
  color: ${(props: any) => props.color};
`

const Avatar = styled.div`
  display: flex;
  align-items: center;
`
const AvatarImg = styled.img`
  margin-right: 1rem;
`

const HeroGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`

const Ten = (props: RouteComponentProps) => {
  const leftArr = [
    {
      img: AvatarOne,
      name: "Chinmay Sarasvati",
      date: "23 Sep 2019",
      time: "02:52PM",
      amount: "$130.00",
      color: "#000",
    },
    {
      img: AvatarTwo,
      name: "Dina Glenn",
      date: "22 Sep 2019",
      time: "01:36AM",
      amount: "$367.00",
      color: "#FF3A29",
    },
    {
      img: AvatarThree,
      name: "Izabella Tabakova",
      date: "29 Oct 2019",
      time: "06:58PM",
      amount: "$29.99",
      color: "#02A0FC",
    },
    {
      img: AvatarFour,
      name: "Opi Watihana",
      date: "16 May 2019",
      time: "02:41PM",
      amount: "$1240.29",
      color: "#4339F2",
    },
  ]

  const rightArr = [
    {
      img: AvatarFive,
      name: "Babila Ebwélé",
      date: "04 Apr 2019",
      time: "09:04AM",
      amount: "$560.80",
      color: "#34B53A",
    },
    {
      img: AvatarSix,
      name: "Brijamohan Mallick",
      date: "06 Aug 2019",
      time: "08:22AM",
      amount: "$765.00",
      color: "#FFB200",
    },
    {
      img: AvatarSeven,
      name: "Cayla Brister",
      date: "07 Feb 2019",
      time: "07:02PM",
      amount: "$78.00",
      color: "#0006",
    },
    {
      img: AvatarEight,
      name: "Maeng Yeo-Jin",
      date: "06 Aug 2019",
      time: "03:49AM",
      amount: "$400.00",
      color: "#FF3A29",
    },
  ]

  return (
    <Layout>
      <Top>
        <Left>
          <Title>Telescope</Title>
          <Content>
            <RowGrid>
              {leftArr.map((item: any) => (
                <Row>
                  <Avatar>
                    <AvatarImg src={item.img} alt="" />
                    <p>{item.name}</p>
                  </Avatar>
                  <p style={{ color: "rgba(0,0,0,0.4)" }}>{item.date}</p>
                  <p style={{ color: "rgba(0,0,0,0.4)" }}>{item.time}</p>
                  <RowAmount color={item.color}>{item.amount}</RowAmount>
                </Row>
              ))}
            </RowGrid>
          </Content>
        </Left>
        <Right>
          <Title>Asteroids</Title>
          <Content>
            <RowGrid>
              {rightArr.map((item: any) => (
                <Row>
                  <Avatar>
                    <AvatarImg src={item.img} alt="" />
                    <p>{item.name}</p>
                  </Avatar>
                  <p style={{ color: "rgba(0,0,0,0.4)" }}>{item.date}</p>
                  <p style={{ color: "rgba(0,0,0,0.4)" }}>{item.time}</p>
                  <RowAmount color={item.color}>{item.amount}</RowAmount>
                </Row>
              ))}
            </RowGrid>
          </Content>
        </Right>
      </Top>
      <Bottom>
        <Nav>
          <NavItem active>Design</NavItem>
          <NavItem>Product</NavItem>
          <NavItem>color</NavItem>
        </Nav>
        <HeroGrid>
          <div>
            <img src={HeroOne} alt="" />
          </div>
          <div>
            <img src={HeroTwo} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img src={HeroThree} alt="" />
            <img src={HeroFour} alt="" />
          </div>
          <div>
            <img src={HeroFive} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img src={HeroSix} alt="" />
            <img src={HeroSeven} alt="" />
          </div>
        </HeroGrid>
      </Bottom>
    </Layout>
  )
}

export default Ten
