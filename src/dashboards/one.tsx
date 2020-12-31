import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import { BsThreeDots } from "react-icons/bs"

// COMPONENTS
import Layout from "../components/layout"
import Progress from "../components/progress"
import Button from "../components/button"
import PieChart from "../components/piechart"
import BarChart from "../components/barchart"

// AVATARS
import AvatarOne from "../img/avatar-four.jpg"
import AvatarTwo from "../img/avatar-two.jpg"
import AvatarThree from "../img/avatar-five.jpg"
import AdIcon from "../img/ad-icon.svg"

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
`

const Card = styled.div`
  display: block;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
`

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`

const CardTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
`

const CardSubtitle = styled.p`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.4);
`

const CardContent = styled.div``

const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 5rem;
`
const Right = styled.div`
  padding: 3rem;
  background: white;
  border-radius: 1rem;
`
const Left = styled.div``

const Ad = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
  background: #4339f2;
  border-radius: 1rem;
  color: white;
`

const AdImg = styled.img`
  margin-right: 3rem;
`

const AdTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`

const AdText = styled.p`
  width: 45rem;
  font-size: 1.4rem;
`

const AdRight = styled.div``
const AdLeft = styled.div`
  display: flex;
  align-items: center;
`

const PieChartGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`

const PieChartCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 24rem;
  padding: 3rem;
  background: white;
  border-radius: 1rem;
`
const PieChartTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
`

const OneWrapper = (props: RouteComponentProps) => {
  return (
    <Layout>
      <h1>Be single minded</h1>

      <CardGrid>
        <Card>
          <CardHeader>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={AvatarOne}
                style={{
                  width: "4.4rem",
                  height: "4.4rem",
                  marginRight: "1rem",
                }}
                alt="user avatar"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <CardTitle>Ava Gregoraci</CardTitle>
                <CardSubtitle>Bulgaria</CardSubtitle>
              </div>
            </div>
            <BsThreeDots size={25} color="#eee" />
          </CardHeader>
          <CardContent>
            <Progress
              label="Instagram"
              count="65,376"
              color="#34B53A"
              width={10}
            />
            <Progress
              label="Facebook"
              count="12,109"
              color="#34B53A"
              width={40}
            />
            <Progress
              label="Twitter"
              count="132,645"
              color="#34B53A"
              width={30}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={AvatarThree}
                style={{
                  width: "4.4rem",
                  height: "4.4rem",
                  marginRight: "1rem",
                }}
                alt="user avatar"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <CardTitle>Somun Ae-Ri</CardTitle>
                <CardSubtitle>Bulgaria</CardSubtitle>
              </div>
            </div>
            <BsThreeDots size={25} color="#eee" />
          </CardHeader>
          <CardContent>
            <Progress
              label="Instagram"
              count="65,376"
              color="#FF3A29"
              width={10}
            />
            <Progress
              label="Facebook"
              count="12,109"
              color="#FF3A29"
              width={40}
            />
            <Progress
              label="Twitter"
              count="132,645"
              color="#FF3A29"
              width={30}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={AvatarTwo}
                style={{
                  width: "4.4rem",
                  height: "4.4rem",
                  marginRight: "1rem",
                }}
                alt="user avatar"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <CardTitle>Lilah Ioselev</CardTitle>
                <CardSubtitle>Bulgaria</CardSubtitle>
              </div>
            </div>
            <BsThreeDots size={25} color="#eee" />
          </CardHeader>
          <CardContent>
            <Progress
              label="Instagram"
              count="65,376"
              color="#4339F2"
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
              color="#4339F2"
              width={30}
            />
          </CardContent>
        </Card>
      </CardGrid>
      <BottomGrid>
        <Left>
          <Ad>
            <AdLeft>
              <AdImg src={AdIcon} alt="hand holding pen" />
              <div>
                <AdTitle>Creative outdoor ads</AdTitle>
                <AdText>
                  Every large design company whether it’s a multi-national
                  branding corporation or a regular down at heel tatty magazine
                  publisher needs to fill holes in the workforce.
                </AdText>
              </div>
            </AdLeft>
            <AdRight>
              <Button>See More</Button>
            </AdRight>
          </Ad>
          <PieChartGrid>
            <PieChartCard>
              <PieChartTitle>Twitter</PieChartTitle>
              <PieChart percent={67} color="#34B53A" />
            </PieChartCard>
            <PieChartCard>
              <PieChartTitle>Instagram</PieChartTitle>
              <PieChart percent={46} color="#4339F2" />
            </PieChartCard>
            <PieChartCard>
              <PieChartTitle>Facebook</PieChartTitle>
              <PieChart percent={15} color="#FF3A29" />
            </PieChartCard>
            <PieChartCard>
              <PieChartTitle>Behance</PieChartTitle>
              <PieChart percent={67} color="#02A0FC" />
            </PieChartCard>
          </PieChartGrid>
        </Left>
        <Right>
          <BarChart
            data={[300, 30, 50]}
            label="Aussie chef shares culinary"
            color="#FFB200"
          />
        </Right>
      </BottomGrid>
    </Layout>
  )
}

export default OneWrapper
