import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs"

// COMPONENTS
import Layout from "../components/layout"
import Progress from "../components/progress"

// IMAGES
import CardOne from "../img/eight-one.jpg"
import CardTwo from "../img/eight-two.jpg"
import CardThree from "../img/eight-three.jpg"
import CardFour from "../img/eight-four.jpg"

import AvatarOne from "../img/eight-avatar-one.png"
import AvatarTwo from "../img/eight-avatar-two.png"
import AvatarThree from "../img/eight-avatar-three.png"
import AvatarFour from "../img/eight-avatar-four.png"
import AvatarFive from "../img/eight-avatar-five.png"
import AvatarSix from "../img/eight-avatar-six.png"
import AvatarSeven from "../img/eight-avatar-seven.png"
import AvatarEight from "../img/eight-avatar-eight.png"
import AvatarNine from "../img/eight-avatar-nine.png"

const Top = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
`

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const TopHeaderTitle = styled.h3`
  font-size: 2rem;
`

const Left = styled.div``
const Right = styled.div``

const Bottom = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  align-items: center;
  margin-top: 3rem;
`

const Card = styled.div`
  flex: 1;
  padding: 3rem;
  background: white;
  border-radius: 1rem;
`

const CardImg = styled.img``

const CardTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
`

const AvatarGrid = styled.div`
  display: flex;

  img {
    margin-right: 0.5rem;
  }
`

const Avatar = styled.img``

const Eight = (props: RouteComponentProps) => {
  return (
    <Layout>
      <Top>
        <Left>
          <TopHeader>
            <TopHeaderTitle>Raymond Griffin</TopHeaderTitle>
            <div>
              <BsArrowLeftShort size={24} style={{ marginRight: "1rem" }} />
              <BsArrowRightShort size={24} />
            </div>
          </TopHeader>
          <Card>
            <Progress
              label="Raymond Griffin"
              count="448 of 656"
              color="#FF3A29"
              width={40}
            />
            <Progress
              label="Leonard Henderson"
              count="448 of 656"
              color="#02A0FC"
              width={40}
            />
            <Progress
              label="Blanche Fisher"
              count="448 of 656"
              color="#4339F2"
              width={40}
            />
            <Progress
              label="Harvey Black"
              count="448 of 656"
              color="#34B53A"
              width={40}
            />
            <Progress
              label="Barry Crawford"
              count="448 of 656"
              color="#FFB200"
              width={40}
            />
          </Card>
        </Left>
        <Right>
          <TopHeader>
            <TopHeaderTitle>Raymond Griffin</TopHeaderTitle>
          </TopHeader>
          <Card>Card</Card>
        </Right>
      </Top>
      <Bottom>
        <div>
          <CardImg src={CardOne} alt="" />
          <Card>
            <CardTitle>Bristol</CardTitle>
            <p
              style={{
                marginBottom: "3.5rem",
                fontSize: "1.4rem",
                color: "rgba(0,0,0,0.4)",
              }}
            >
              Comets are a big source of meteoroids because of the nature of
              those long tails. A large amount of dust.
            </p>
            <AvatarGrid>
              <Avatar src={AvatarOne} alt="" />
              <Avatar src={AvatarTwo} alt="" />
              <Avatar src={AvatarThree} alt="" />
            </AvatarGrid>
          </Card>
        </div>
        <div>
          <CardImg src={CardTwo} alt="" />
          <Card>
            <CardTitle>Budapest</CardTitle>
            <p
              style={{
                marginBottom: "3.5rem",
                fontSize: "1.4rem",
                color: "rgba(0,0,0,0.4)",
              }}
            >
              Comets are a big source of meteoroids because of the nature of
              those long tails. A large amount of dust.
            </p>
            <AvatarGrid>
              <Avatar src={AvatarFour} alt="" />
            </AvatarGrid>
          </Card>
        </div>
        <div>
          <CardImg src={CardThree} alt="" />
          <Card>
            <CardTitle>Minsk </CardTitle>
            <p
              style={{
                marginBottom: "3.5rem",
                fontSize: "1.4rem",
                color: "rgba(0,0,0,0.4)",
              }}
            >
              Comets are a big source of meteoroids because of the nature of
              those long tails. A large amount of dust.
            </p>
            <AvatarGrid>
              <Avatar src={AvatarFive} alt="" />
              <Avatar src={AvatarSix} alt="" />
            </AvatarGrid>
          </Card>
        </div>
        <div>
          <CardImg src={CardFour} alt="" />
          <Card>
            <CardTitle>Bogotá</CardTitle>
            <p
              style={{
                marginBottom: "3.5rem",
                fontSize: "1.4rem",
                color: "rgba(0,0,0,0.4)",
              }}
            >
              Comets are a big source of meteoroids because of the nature of
              those long tails. A large amount of dust.
            </p>
            <AvatarGrid>
              <Avatar src={AvatarSeven} alt="" />
              <Avatar src={AvatarEight} alt="" />
              <Avatar src={AvatarNine} alt="" />
            </AvatarGrid>
          </Card>
        </div>
      </Bottom>
    </Layout>
  )
}

export default Eight
