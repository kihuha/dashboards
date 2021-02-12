import { useRef } from "react"
import styled from "styled-components"
import { RouteComponentProps } from "@reach/router"
import Layout from "../components/layout"
import Badge from "../components/badge"

// IMAGES
import MelbourneCard from "../img/melbourne-card.jpg"
import CasablancaCard from "../img/casablanca-card.jpg"
import KathmanduCard from "../img/kathmandu-card.jpg"
import IndianapolisCard from "../img/indianapolis-card.jpg"
import LouisvilleCard from "../img/louisville-card.jpg"

import { color } from "../design"

const CardGrid = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 2rem 0;

  @media (min-width: 600px) {
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }

  & > div {
    width: 100%;
    max-width: 35rem;
    margin: 0 auto 1rem auto;

    @media (min-width: 600px) {
      max-width: calc(30rem - 0.5rem);
    }

    @media (min-width: 768px) {
      max-width: 36rem;
    }

    @media (min-width: 900px) {
      max-width: 28rem;
    }

    @media (min-width: 1400px) {
      max-width: 32.6rem;
    }
  }
`
const CardGridOne = styled.div`
  /* border: solid 2px blue; */
`
const CardGridTwo = styled.div`
  /* border: solid 2px blue; */
`
const CardGridThree = styled.div`
  /* border: solid 2px blue; */
`

const CardGridFour = styled.div`
  /* border: solid 2px blue; */
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  background: white;
  border-radius: 1rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 1200px) {
    padding: 3rem 2rem;
    border-radius: 2rem;
  }
`

const CardTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 5px;
  font-weight: normal;
  font-size: 2rem;
`

const CardText = styled.p`
  margin-bottom: 2rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.4);
`

const CardBtnLink = styled.a`
  color: #4339f2;
  text-decoration: none;
  font-size: 1.4rem;
`

const Two = (props: RouteComponentProps) => {
  // const cardOne = `useRef(null)
  // const cardTwo = useRef(null)
  // const cardThree = useRef(null)
  // const cardFour = useRef(null)`

  // CARD COLUMN ONE
  const cardOneHeight = [208, 340, 244]
  const cardTwoHeight = [244, 340, 208]
  const cardThreeHeight = [320, 208, 264]
  const cardFourHeight = [208, 376, 208]

  return (
    <Layout>
      <CardGrid>
        <CardGridOne>
          <Card style={{ height: `${cardOneHeight[0]}px` }}>
            <div>
              <Badge
                color="#000"
                background={color.primary.light}
                label="Deep"
              />
              <Badge
                color="#000"
                background={color.danger.light}
                label="Minimal"
              />
            </div>
            <CardTitle>Cologne</CardTitle>
            <CardText>
              When you enter into any new area of science, you almost always
              find.
            </CardText>
            <CardBtnLink href="#">Detalies</CardBtnLink>
          </Card>
          <Card style={{ height: `${cardOneHeight[1]}px` }}>
            <div>
              <Badge
                color="#000"
                background={color.warning.light}
                label="Taipei"
              />
              <Badge
                color="#000"
                background={color.danger.light}
                label="Glasgow"
              />
              <Badge
                color="#000"
                background={color.info.light}
                label="Belgrade"
              />
            </div>
            <img
              src={MelbourneCard}
              alt="forest"
              style={{ marginTop: "1.5rem", width: "100%" }}
            />
            <CardTitle>Melbourne</CardTitle>
            <CardText>
              When you enter into any new area of science, you almost always
              find.
            </CardText>
            <CardBtnLink href="#">Detalies</CardBtnLink>
          </Card>
          <Card style={{ height: `${cardOneHeight[2]}px` }}>
            <div>
              <Badge
                color="#000"
                background={color.primary.light}
                label="Lost"
              />
              <Badge
                color="#000"
                background={color.danger.light}
                label="Designer"
              />
            </div>
            <CardTitle>Kuala Lumpur</CardTitle>
            <CardText>
              Your business is in a continual battle for your customers’
              recognition whether you know it or not.
            </CardText>
            <CardBtnLink href="#">Detalies</CardBtnLink>
          </Card>
        </CardGridOne>
        <CardGridTwo>
          <Card style={{ height: `${cardTwoHeight[0]}px` }}>
            <div>
              <Badge
                color="#000"
                background={color.success.light}
                label="Lost"
              />
            </div>
            <CardTitle>Bengaluru</CardTitle>
            <CardText>
              Your business is in a continual battle for your customers’
              recognition whether you know it or not.
            </CardText>
            <CardBtnLink href="#">Detalies</CardBtnLink>
          </Card>
          <Card
            style={{
              background: `url(${CasablancaCard})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: `${cardTwoHeight[1]}px`,
            }}
          >
            <div>
              <Badge
                color="#000"
                background={color.primary.light}
                label="Lost"
              />
              <Badge
                color="#000"
                background={color.danger.light}
                label="Toronto"
              />
              <Badge
                color="#000"
                background={color.success.light}
                label="Green"
              />
            </div>
            <div style={{ color: "white" }}>
              <CardTitle>Casablanca</CardTitle>
              <p
                style={{
                  fontSize: "1.4rem",
                }}
              >
                When you enter into any new area of science, you almost always
                find.
              </p>
            </div>
          </Card>
          <Card style={{ height: `${cardTwoHeight[2]}px` }}>
            <div>
              <Badge
                color="#000"
                background={color.primary.light}
                label="Tulsa"
              />
              <Badge
                color="#000"
                background={color.warning.light}
                label="Columbus"
              />
              <Badge
                color="#000"
                background={color.info.light}
                label="Bogotá"
              />
            </div>
            <CardTitle>Bristol</CardTitle>
            <CardText>
              When you enter into any new area of science, you almost always
              find.
            </CardText>
            <CardBtnLink href="#">Detalies</CardBtnLink>
          </Card>
        </CardGridTwo>

        <CardGridThree>
          <Card style={{ height: `${cardThreeHeight[0]}px` }}>
            <div>
              <Badge
                color="#000"
                background={color.primary.light}
                label="Dogs"
              />
              <Badge
                color="#000"
                background={color.danger.light}
                label="Behance"
              />
            </div>
            <img
              src={KathmanduCard}
              alt="forest"
              style={{ width: "100%", marginTop: "1.5rem" }}
            />
            <CardTitle>Kathmandu</CardTitle>
            <CardText>When you enter into any new area</CardText>
            <CardBtnLink href="#">Detalies</CardBtnLink>
          </Card>
          <Card style={{ height: `${cardThreeHeight[1]}px` }}>
            <div>
              <Badge
                color="#000"
                background={color.info.light}
                label="Harare"
              />
              <Badge
                color="#000"
                background={color.warning.light}
                label="Alexandria"
              />
              <Badge
                color="#000"
                background={color.primary.light}
                label="Hubble"
              />
            </div>
            <CardTitle>Brisbane</CardTitle>
            <CardText>
              When you enter into any new area of science, you almost always
              find.
            </CardText>
            <CardBtnLink href="#">Detalies</CardBtnLink>
          </Card>
          <Card
            style={{
              background: `url(${IndianapolisCard})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: `${cardThreeHeight[2]}px`,
            }}
          >
            <div>
              <Badge
                color="#000"
                background={color.primary.light}
                label="Lost"
              />
              <Badge
                color="#000"
                background={color.danger.light}
                label="Toronto"
              />
              <Badge
                color="#000"
                background={color.success.light}
                label="Green"
              />
            </div>
            <div style={{ color: "white" }}>
              <CardTitle>Indianapolis</CardTitle>
              <p
                style={{
                  fontSize: "1.4rem",
                }}
              >
                When you enter into any new area of science, you almost always
                find.
              </p>
            </div>
          </Card>
        </CardGridThree>
        <CardGridFour>
          <Card style={{ height: `${cardFourHeight[0]}px` }}>
            <div>
              <Badge
                color="#000"
                background={color.warning.light}
                label="Mens"
              />
            </div>
            <CardTitle>Memphis</CardTitle>
            <CardText>
              When you enter into any new area of science, you almost always
              find.
            </CardText>
            <CardBtnLink href="#">Detalies</CardBtnLink>
          </Card>
          <Card
            style={{
              background: `url(${LouisvilleCard})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: `${cardFourHeight[1]}px`,
            }}
          >
            <div>
              <Badge
                color="#000"
                background={color.primary.light}
                label="Text"
              />
              <Badge
                color="#000"
                background={color.danger.light}
                label="Khartoum"
              />
              <Badge
                color="#000"
                background={color.success.light}
                label="Detroit"
              />
            </div>
            <div style={{ color: "white" }}>
              <CardTitle>Louisville</CardTitle>
              <p
                style={{
                  fontSize: "1.4rem",
                }}
              >
                When you enter into any new area of science, you almost always
                find.
              </p>
            </div>
          </Card>
          <Card style={{ height: `${cardFourHeight[2]}px` }}>
            <div>
              <Badge
                color="#000"
                background={color.warning.light}
                label="Milan"
              />
              <Badge
                color="#000"
                background={color.danger.light}
                label="Edinburg"
              />
            </div>
            <CardTitle>Helsinki</CardTitle>
            <CardText>
              When you enter into any new area of science, you almost always
              find.
            </CardText>
            <CardBtnLink href="#">Detalies</CardBtnLink>
          </Card>
        </CardGridFour>
      </CardGrid>
    </Layout>
  )
}

export default Two
