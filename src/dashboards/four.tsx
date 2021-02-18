import { useMemo, useEffect, useRef } from "react"
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
  padding: 2rem 0;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`
const ChartContent = styled.section`
  height: 50vh;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #fff;
  border-radius: 5px;

  @media (min-width: 600px) {
    flex: 1;
    max-width: 80rem;
    height: 66.3rem;
    border-radius: 1rem;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    height: unset;
    padding: 3rem 3rem 3rem 5rem;
  }
`

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 5px;

  @media (min-width: 1000px) {
    height: 14rem;
    padding: 1rem 3rem;
    border-radius: 1rem;
  }
`

const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  padding: 1rem;
  border-radius: 100%;

  @media (min-width: 1000px) {
    width: 9rem;
    height: 9rem;
    padding: 2.2rem;
  }

  img {
    width: 100%;
  }
`

const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;

  @media (min-width: 600px) {
    margin-bottom: 0.5rem;
    font-size: 2.2rem;
  }
`

const CardText = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: rgba(${hexToRgbA("#000")}, 0.4);

  @media (min-width: 600px) {
    margin-bottom: 2rem;
    font-size: 1.4rem;
  }
`

const CardContent = styled.div`
  flex: 1;
`

const CardGroup = styled.section`
  @media (min-width: 600px) {
    width: 44.8rem;
    margin-left: auto;
  }
`

const FourWrapper = (props: RouteComponentProps) => {
  const chartRef = useRef<null | HTMLDivElement>(null)
  const data = useMemo(
    () => [
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
        values: [14.5, 24.4, 10],
      },
      {
        total: 66.3,
        values: [26.4, 0, 13.4],
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
    ],
    []
  )

  useEffect(() => {
    const parent = d3.select(chartRef.current).select("svg")
    const maxTotal = d3.max(data, (d) => d.total)
    const height = chartRef.current?.offsetHeight
    const width = chartRef.current?.offsetWidth

    if (width && height && maxTotal) {
      const yScale = d3
        .scaleLinear()
        .domain([0, maxTotal])
        .range([0, height - 10])

      const spaces = data.length + data.length - 1
      const barWidth = width / spaces

      const group = parent.selectAll("g").data(data).enter().append("g")

      group
        .append("rect")
        .attr("x", (d, i) => {
          return i * (barWidth * 2)
        })
        .attr("y", (d, i) => {
          return height - yScale(d.total)
        })
        .attr("height", (d, i) => {
          return yScale(d.total)
        })
        .attr("width", barWidth)
        .attr("rx", barWidth / 2)
        .style("fill", "#F8F8F8")

      group
        .append("rect")
        .attr("x", (d, i) => {
          return i * (barWidth * 2)
        })
        .attr("y", (d, i) => {
          return height - yScale(d.values[0])
        })
        .attr("height", (d, i) => {
          return yScale(d.values[0])
        })
        .attr("width", barWidth)
        .attr("rx", barWidth / 2)
        .style("fill", color.primary.main)

      group
        .append("rect")
        .attr("x", (d, i) => {
          return i * (barWidth * 2)
        })
        .attr("y", (d, i) => {
          return height - yScale(d.values[1]) - yScale(d.values[0]) - 5
        })
        .attr("height", (d, i) => {
          return yScale(d.values[1])
        })
        .attr("width", barWidth)
        .attr("rx", barWidth / 2)
        .style("fill", color.warning.main)

      group
        .append("rect")
        .attr("x", (d, i) => {
          return i * (barWidth * 2)
        })
        .attr("y", (d, i) => {
          return (
            height -
            yScale(d.values[2]) -
            yScale(d.values[1]) -
            yScale(d.values[0]) -
            10
          )
        })
        .attr("height", (d, i) => {
          return yScale(d.values[2])
        })
        .attr("width", barWidth)
        .attr("rx", barWidth / 2)
        .style("fill", color.danger.main)
    }
  }, [data])

  return (
    <Layout>
      <Content>
        <ChartContent>
          <div ref={chartRef} style={{ width: "100%", height: "100%" }}>
            <svg style={{ width: "100%", height: "100%" }}></svg>
          </div>
        </ChartContent>
        <CardGroup>
          <Card>
            <CardIcon
              style={{
                background: color.success.light,
              }}
            >
              <img src={One} alt="" />
            </CardIcon>
            <CardContent>
              <CardTitle>Chris Newton</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color={color.success.main} width={20} />
            </CardContent>
          </Card>
          <Card>
            <CardIcon
              style={{
                background: color.danger.light,
              }}
            >
              <img src={Two} alt="" />
            </CardIcon>
            <CardContent>
              <CardTitle>Blanche Malone</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color={color.danger.main} width={20} />
            </CardContent>
          </Card>
          <Card>
            <CardIcon
              style={{
                background: color.info.light,
              }}
            >
              <img src={Three} alt="" />
            </CardIcon>
            <CardContent>
              <CardTitle>Eunice Wilkins</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color={color.info.main} width={20} />
            </CardContent>
          </Card>
          <Card>
            <CardIcon
              style={{
                background: color.primary.light,
              }}
            >
              <img src={Four} alt="" />
            </CardIcon>
            <CardContent>
              <CardTitle>Phillip George</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color={color.primary.main} width={40} />
            </CardContent>
          </Card>
          <Card>
            <CardIcon
              style={{
                background: color.warning.light,
              }}
            >
              <img src={Five} alt="" />
            </CardIcon>
            <CardContent>
              <CardTitle>Birdie Potter</CardTitle>
              <CardText>Comets are a big source of meteoroids.</CardText>
              <Progress color={color.warning.main} width={20} />
            </CardContent>
          </Card>
        </CardGroup>
      </Content>
    </Layout>
  )
}

export default FourWrapper
