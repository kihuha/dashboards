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

import { color } from "../design"

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
              color={color.danger.main}
              width={40}
            />
            <Progress
              label="Leonard Henderson"
              count="448 of 656"
              color={color.info.main}
              width={40}
            />
            <Progress
              label="Blanche Fisher"
              count="448 of 656"
              color={color.primary.main}
              width={40}
            />
            <Progress
              label="Harvey Black"
              count="448 of 656"
              color={color.success.main}
              width={40}
            />
            <Progress
              label="Barry Crawford"
              count="448 of 656"
              color={color.warning.main}
              width={40}
            />
          </Card>
        </Left>
        <Right>
          <TopHeader>
            <TopHeaderTitle>Raymond Griffin</TopHeaderTitle>
          </TopHeader>
          <Card>
            <h3 style={{ fontSize: "2rem", fontWeight: "normal" }}>
              Asteroids
            </h3>
            <svg
              width="390"
              height="243"
              viewBox="0 0 390 243"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 128.619C16.9631 143.34 18.8058 226.917 30.4722 234.658C42.1386 242.4 47.2684 97.6796 60.5768 94.3602C73.8853 91.0409 78.723 226.513 90.5678 219.669C102.413 212.826 104.306 21.9995 119.925 12.3478C135.544 2.69603 135.948 142.6 150.015 145.329C164.082 148.057 163.539 74.726 178.061 74.726C192.583 74.726 193.886 216.853 209.233 214.337C224.581 211.821 222.876 47.4497 239.354 47.4497C255.832 47.4497 259.692 234.658 274.179 241.542C288.666 248.425 284.687 175.88 299.578 151.554C314.468 127.227 317.153 6.32208 331.09 2.0916C345.026 -2.13887 346.64 141.517 358.652 151.554C370.664 161.59 377.18 35.9674 389 35.9674"
                stroke={color.danger.main}
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M1 116.393C16.9631 104.787 18.8058 38.8923 30.4722 32.7885C42.1386 26.6847 47.2684 82.6058 60.5768 85.2229C73.8853 87.84 78.723 39.2106 90.5678 44.6062C102.413 50.0018 104.306 174.223 119.925 181.833C135.544 189.443 135.948 105.37 150.015 103.219C164.082 101.068 165.223 172.686 179.745 172.686C194.267 172.686 193.886 46.8267 209.233 48.8102C224.581 50.7938 222.876 180.39 239.354 180.39C255.832 180.39 259.692 32.7885 274.179 27.3614C288.666 21.9343 284.687 79.1312 299.578 98.3109C314.468 117.491 315.129 225.591 329.066 228.927C343.003 232.262 346.64 120.362 358.652 112.449C370.664 104.536 377.18 189.443 389 189.443"
                stroke={color.primary.main}
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M1 155.234C16.9823 169.594 19.4926 182.331 31.173 189.883C42.8534 197.435 47.7296 99.8939 61.0541 96.6559C74.3787 93.4178 79.0762 221.442 90.9353 214.766C102.794 208.09 103.684 150.288 119.322 140.873C134.96 131.458 133.626 226.314 147.71 228.976C161.793 231.637 161.557 16 176.097 16C190.636 16 192.106 162.568 207.472 160.114C222.838 157.66 223.143 76.0532 239.641 76.0532C256.138 76.0532 261.323 148.519 275.827 155.234C290.332 161.948 286.689 238.496 301.598 214.766C316.506 191.036 314.537 100.783 328.491 96.6559C342.444 92.529 347.056 150.323 359.082 160.114C371.108 169.905 377.166 214.766 389 214.766"
                stroke={color.success.main}
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </Card>
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
