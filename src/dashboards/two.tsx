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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  width: 100%;
  padding-bottom: 2rem;
`
const CardGridOne = styled.div`
  display: grid;
  grid-template-rows: 20rem 34rem 25rem;
  row-gap: 2rem;
`
const CardGridTwo = styled.div`
  display: grid;
  grid-template-rows: 24rem 34rem 20rem;
  row-gap: 2rem;
`
const CardGridThree = styled.div`
  display: grid;
  grid-template-rows: 32rem 20rem 26rem;
  row-gap: 2rem;
`

const CardGridFour = styled.div`
  display: grid;
  grid-template-rows: 20rem 38rem 20rem;
  row-gap: 2rem;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 2rem;
  background: white;
  border-radius: 2rem;
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
  return (
    <Layout>
      <CardGrid>
        <CardGridOne>
          <Card>
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
          <Card>
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
              style={{ marginTop: "1.5rem" }}
            />
            <CardTitle>Melbourne</CardTitle>
            <CardText>
              When you enter into any new area of science, you almost always
              find.
            </CardText>
            <CardBtnLink href="#">Detalies</CardBtnLink>
          </Card>
          <Card>
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
          <Card>
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
          <Card style={{ background: `url(${CasablancaCard})` }}>
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
          <Card>
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
          <Card>
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
              style={{ marginTop: "1.5rem" }}
            />
            <CardTitle>Kathmandu</CardTitle>
            <CardText>When you enter into any new area</CardText>
            <CardBtnLink href="#">Detalies</CardBtnLink>
          </Card>
          <Card>
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
          <Card style={{ background: `url(${IndianapolisCard})` }}>
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
          <Card>
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
          <Card style={{ background: `url(${LouisvilleCard})` }}>
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
          <Card>
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
