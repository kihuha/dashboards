import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import { hexToRgbA } from "../utils"

// COMPONENTS
import Layout from "../components/layout"
import { ProgressBase as Progress } from "../components/progress"

import One from "../img/one.svg"
import Two from "../img/two.svg"
import Three from "../img/three.svg"
import Four from "../img/four.svg"
import Five from "../img/five.svg"

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`

const ContentChart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.5rem 3rem;
  background: white;
  border-radius: 1rem;
`

const Chart = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  align-items: flex-end;
  position: relative;
`

const ContentCards = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  row-gap: 2rem;
`

const Card = styled.div`
  display: flex;
  padding: 2rem 3rem;
  background: white;
  border-radius: 1rem;
`

const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 9rem;
  margin-right: 1.5rem;
  border-radius: 100%;
`

const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
`

const CardText = styled.p`
  margin-bottom: 2rem;
  font-size: 1.4rem;
  color: rgba(${hexToRgbA("#000")}, 0.4);
`

const HorizontalProgress = styled.div`
  display: flex;
  position: relative;
  flex-direction: column-reverse;
  width: 4rem;
  height: 100%;
  background: #f8f8f8;
  border-radius: 2rem;

  &:not(:last-child) {
    margin-right: 3.5rem;
  }
`

const HorizontalProgressIcon = styled.div`
  border-radius: 2rem;

  &:not(:first-child) {
    margin-bottom: 1rem;
  }

  &:nth-of-type(1) {
    background: #4339f2;
  }
  &:nth-of-type(2) {
    background: #ffb200;
  }
  &:nth-of-type(3) {
    background: #ff3a29;
  }
`

const Legend = styled.div``

const LegendTitle = styled.h3`
  font-size: 2.2rem;
`

const LegendGrid = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 3.5rem;
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
      background: #4339f2;
    }
  }
  &:nth-of-type(2) {
    &::before {
      background: #ffb200;
    }
  }
  &:nth-of-type(3) {
    &::before {
      background: #ff3a29;
    }
  }
`

const Scale = styled.div<any>`
  display: flex;
  flex-direction: ${(props: any) =>
    props.type === "horizontal" ? "row" : "column"};
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-right: 4rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.4);
`

const FourWrapper = (props: RouteComponentProps) => {
  const data = [
    {
      total: 42.4,
      values: [8, 18, 0],
    },
    {
      total: 55.5,
      values: [11, 20.9, 7],
    },
    {
      total: 48.8,
      values: [14.5, 24.4, 0],
    },
    {
      total: 66.3,
      values: [26.4, 15.5, 13.4],
    },
    {
      total: 46.2,
      values: [20.9, 20.9, 0],
    },
    {
      total: 52.9,
      values: [23.4, 6.3, 10.5],
    },
    {
      total: 39.7,
      values: [7.6, 14.4, 7],
    },
    {
      total: 63.7,
      values: [14.4, 27.3, 13.3],
    },
    {
      total: 46.2,
      values: [6.3, 30.1, 0],
    },
    {
      total: 28.9,
      values: [8, 13.6, 0],
    },
    {
      total: 63.7,
      values: [15.7, 29.7, 10],
    },
  ]

  data.map((item: any) => {
    console.log(item.values)
  })

  return (
    <Layout>
      <Content>
        <ContentChart>
          <Legend>
            <LegendTitle>Z</LegendTitle>
            <LegendGrid>
              <LegendItem>Restless</LegendItem>
              <LegendItem>Awake</LegendItem>
              <LegendItem>Deep</LegendItem>
            </LegendGrid>
          </Legend>
          <Chart>
            <Scale>
              <p>500</p>
              <p>400</p>
              <p>300</p>
              <p>200</p>
              <p>100</p>
              <p>0</p>
            </Scale>
            {data.map(
              (item: { total: number; values: number[] }, index: number) => (
                <HorizontalProgress
                  key={index}
                  style={{ height: `${item.total}rem` }}
                >
                  <HorizontalProgressIcon
                    style={{ height: `${item.values[0]}rem` }}
                  ></HorizontalProgressIcon>
                  <HorizontalProgressIcon
                    style={{ height: `${item.values[1]}rem` }}
                  ></HorizontalProgressIcon>
                  <HorizontalProgressIcon
                    style={{ height: `${item.values[2]}rem` }}
                  ></HorizontalProgressIcon>
                  <p
                    style={{
                      position: "absolute",
                      left: "50%",
                      bottom: "-2rem",
                      transform: "translate(-50%, 50%)",
                      fontSize: "1.4rem",
                      color: "rgba(0,0,0,0.4)",
                    }}
                  >
                    {index}
                  </p>
                </HorizontalProgress>
              )
            )}
          </Chart>
        </ContentChart>
        <ContentCards>
          <Card>
            <CardIcon
              style={{
                background: `rgba(${hexToRgbA("#34B53A")}, 0.2)`,
              }}
            >
              <img src={One} />
            </CardIcon>
            <div>
              <CardTitle>Chris Newton</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color="#34B53A" width={20} />
            </div>
          </Card>
          <Card>
            <CardIcon
              style={{
                background: `rgba(${hexToRgbA("#FF3A29")}, 0.2)`,
              }}
            >
              <img src={Two} />
            </CardIcon>
            <div>
              <CardTitle>Blanche Malone</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color="#FF3A29" width={20} />
            </div>
          </Card>
          <Card>
            <CardIcon
              style={{
                background: `rgba(${hexToRgbA("#02A0FC")}, 0.2)`,
              }}
            >
              <img src={Three} />
            </CardIcon>
            <div>
              <CardTitle>Eunice Wilkins</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color="#02A0FC" width={20} />
            </div>
          </Card>
          <Card>
            <CardIcon
              style={{
                background: `rgba(${hexToRgbA("#4339F2")}, 0.2)`,
              }}
            >
              <img src={Four} />
            </CardIcon>
            <div>
              <CardTitle>Phillip George</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color="#4339F2" width={40} />
            </div>
          </Card>
          <Card>
            <CardIcon
              style={{
                background: `rgba(${hexToRgbA("#FFB200")}, 0.2)`,
              }}
            >
              <img src={Five} />
            </CardIcon>
            <div>
              <CardTitle>Birdie Potter</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color="#FFB200" width={20} />
            </div>
          </Card>
        </ContentCards>
      </Content>
    </Layout>
  )
}

export default FourWrapper
