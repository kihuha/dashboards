import { RouteComponentProps, Link } from "@reach/router"
import styled from "styled-components"
import { applyStyleModifiers } from "styled-components-modifiers"
import { BsArrowRightShort } from "react-icons/bs"

// IMAGES
import One from "../img/landing/Dashboard 1.png"
import Two from "../img/landing/Dashboard 2.png"
import Three from "../img/landing/Dashboard 3.png"
import Four from "../img/landing/Dashboard 4.png"
import Five from "../img/landing/Dashboard 5.png"
import Six from "../img/landing/Dashboard 6.png"
import Seven from "../img/landing/Dashboard 7.png"
import Eight from "../img/landing/Dashboard 8.png"
import Nine from "../img/landing/Dashboard 9.png"
import Ten from "../img/landing/Dashboard 10.png"
import Eleven from "../img/landing/Dashboard 11.png"
import Twelve from "../img/landing/Dashboard 12.png"
import Thirteen from "../img/landing/Dashboard 13.png"
import Fourteen from "../img/landing/Dashboard 14.png"
import Fifteen from "../img/landing/Dashboard 15.png"

const MODIFIER_CONFIG = {
  warning: () => `
        background: white;
        border-color: #FFB200;
        color: #FFB200;
    `,
}

const Landing = styled.section`
  background: white;
`

const LandingHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 0 auto;
  padding: 5rem 0;
  text-align: center;
`
const LandingTitle = styled.h1`
  font-size: 5rem;
`

const LandingText = styled.p`
  font-size: 2rem;
`

const ButtonLink = styled.a`
  margin-top: 4rem;
  padding: 2rem 4rem;
  text-decoration: none;
  font-size: 1.4rem;
  color: white;
  background: #4339f2;
  border-radius: 1rem;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem 2rem;
`

const Card = styled.div`
  margin-bottom: 4rem;
  flex-basis: 30%;
  background: white;
  border: solid 5px white;
  border-radius: 1rem;
`

const CardImg = styled.img`
  width: 100%;
`

const CardTitle = styled.h2`
  padding: 2rem 0;
  font-size: 2rem;
`

const CardBtn = styled(Link)<any>`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  border: solid 2px #4339f2;
  color: #4339f2;
  border-radius: 5px;
  text-decoration: none;

  ${applyStyleModifiers(MODIFIER_CONFIG)}
`

const LandingWrapper = (props: RouteComponentProps) => {
  const dashboards = [
    { label: "One", img: One, completed: true, link: "/one" },
    { label: "Two", img: Two, completed: true, link: "/two" },
    { label: "Three", img: Three, completed: true, link: "/three" },
    { label: "Four", img: Four, completed: true, link: "/four" },
    { label: "Five", img: Five, completed: true, link: "/five" },
    { label: "Six", img: Six, completed: true, link: "/six" },
    { label: "Seven", img: Seven, completed: true, link: "/seven" },
    { label: "Eight", img: Eight, completed: true, link: "/eight" },
    { label: "Nine", img: Nine, completed: true, link: "/nine" },
    { label: "Ten", img: Ten, completed: true, link: "/ten" },
    { label: "Eleven", img: Eleven, completed: false, link: "/eleven" },
    { label: "Twelve", img: Twelve, completed: true, link: "/twelve" },
    { label: "Thirteen", img: Thirteen, completed: true, link: "/thirteen" },
    { label: "Fourteen", img: Fourteen, completed: false, link: "/fourteen" },
    { label: "Fifteen", img: Fifteen, completed: false, link: "/fifteen" },
  ]

  return (
    <>
      <Landing>
        <LandingHeader>
          <LandingTitle>Dashboard Collection</LandingTitle>
          <LandingText>
            A collection of dashboard layouts. The design kit and elements were
            designed by Craftwork
          </LandingText>
          <ButtonLink href="https://dashboardsdesign.com/" target="_blank">
            Design Kit
          </ButtonLink>
        </LandingHeader>
      </Landing>
      <Content>
        {dashboards.map((item: any, index: number) => (
          <Card key={index}>
            <CardImg src={item.img} alt="" />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 1rem",
              }}
            >
              <CardTitle>Dashboard {item.label}</CardTitle>
              {item.completed ? (
                <CardBtn to={`${item.link}`}>
                  View
                  <BsArrowRightShort size={20} style={{ marginLeft: "5px" }} />
                </CardBtn>
              ) : (
                <CardBtn
                  modifiers="warning"
                  to={`${item.link}`}
                  state={{ completed: false }}
                >
                  In Progress
                </CardBtn>
              )}
            </div>
          </Card>
        ))}
      </Content>
    </>
  )
}

export default LandingWrapper
