import { useEffect, useRef } from "react"
import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import * as d3 from "d3"
import { hexToRgbA } from "../utils"

// COMPONENTS
import Layout from "../components/layout"
import { ProgressBase as Progress } from "../components/progress"

import One from "../img/one.svg"
import Two from "../img/two.svg"
import Three from "../img/three.svg"
import Four from "../img/four.svg"
import Five from "../img/five.svg"
import { color } from "../design"

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2rem;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

const ContentChart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.5rem 3rem;
  background: white;
  border-radius: 1rem;
  margin-top: 2rem;

  @media (min-width: 1200px) {
    margin-top: 0;
  }
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
  margin-top: 2rem;

  @media (min-width: 1200px) {
    margin-top: 0;
  }
`

const Card = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 1rem;

  @media (min-width: 1200px) {
    padding: 2rem 3rem;
  }
`

const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  margin-right: 1.5rem;
  border-radius: 100%;
  padding: 1rem;

  img {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 9rem;
    height: 9rem;
    padding: 0;
  }
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
    background: ${color.primary.main};
  }
  &:nth-of-type(2) {
    background: ${color.warning.main};
  }
  &:nth-of-type(3) {
    background: ${color.danger.main};
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
      background: ${color.primary.main};
    }
  }
  &:nth-of-type(2) {
    &::before {
      background: ${color.warning.main};
    }
  }
  &:nth-of-type(3) {
    &::before {
      background: ${color.danger.main};
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
  const chartRef = useRef<null | HTMLDivElement>(null)
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

  useEffect(() => {
    if (chartRef.current) {
      const height = chartRef.current.offsetHeight
      const width = chartRef.current.offsetWidth
      const barWidth = 5
      const yScale = d3.scaleLinear().domain([0, 70]).range([0, height])
      const xScale = d3.scaleLinear().domain([1, data.length]).range([0, width])
      const parent = d3.select(chartRef.current).append("svg")

      parent
        .attr("height", "100%")
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", 10)
        .attr("height", (d) => yScale(d.total))
        .attr("test", (d, i) => xScale(i + 1))
        .attr("y", (d) => height - yScale(d.total))
        .style("fill", "red")
    }
  }, [])

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
            <div ref={chartRef} style={{ height: "40vh" }}></div>
          </Chart>
        </ContentChart>
        <ContentCards>
          <Card>
            <CardIcon
              style={{
                background: color.success.light,
              }}
            >
              <img src={One} alt="" />
            </CardIcon>
            <div>
              <CardTitle>Chris Newton</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color={color.success.main} width={20} />
            </div>
          </Card>
          <Card>
            <CardIcon
              style={{
                background: color.danger.light,
              }}
            >
              <img src={Two} alt="" />
            </CardIcon>
            <div>
              <CardTitle>Blanche Malone</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color={color.danger.main} width={20} />
            </div>
          </Card>
          <Card>
            <CardIcon
              style={{
                background: color.info.light,
              }}
            >
              <img src={Three} alt="" />
            </CardIcon>
            <div>
              <CardTitle>Eunice Wilkins</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color={color.info.main} width={20} />
            </div>
          </Card>
          <Card>
            <CardIcon
              style={{
                background: color.primary.light,
              }}
            >
              <img src={Four} alt="" />
            </CardIcon>
            <div>
              <CardTitle>Phillip George</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color={color.primary.main} width={40} />
            </div>
          </Card>
          <Card>
            <CardIcon
              style={{
                background: color.warning.light,
              }}
            >
              <img src={Five} alt="" />
            </CardIcon>
            <div>
              <CardTitle>Birdie Potter</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color={color.warning.main} width={20} />
            </div>
          </Card>
        </ContentCards>
      </Content>
    </Layout>
  )
}

export default FourWrapper
