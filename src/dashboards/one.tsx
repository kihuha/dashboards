import { useEffect, useRef } from "react"
import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import { BsThreeDots } from "react-icons/bs"
import * as d3 from "d3"

// COMPONENTS
import Layout from "../components/layout"
import Progress from "../components/progress"
import Button from "../components/button"

// AVATARS
import AvatarOne from "../img/avatar-four.jpg"
import AvatarTwo from "../img/avatar-two.jpg"
import AvatarThree from "../img/avatar-five.jpg"
import AdIcon from "../img/ad-icon.svg"

import { color } from "../design"
import generateDoughnut from "../chartUtils/generateDoughnut"

const CardGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 2rem;
    margin-bottom: 0;
  }
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
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
`
const Right = styled.div`
  align-self: flex-start;
  background: white;
  border-radius: 1rem;

  @media (min-width: 1000px) {
    padding: 3rem;
  }
`
const Left = styled.div``

const Ad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
  width: 100%;
  background: #4339f2;
  border-radius: 1rem;
  color: white;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`

const AdImg = styled.img`
  margin-right: 3rem;
`

const AdTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`

const AdText = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;

  @media (min-width: 1000px) {
    width: 45rem;
  }
`

const AdRight = styled.div``
const AdLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`

const PieChartGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
  }
`

const PieChartCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
  height: 24rem;
  margin-bottom: 1rem;
  padding: 3rem;
  background: white;
  border-radius: 1rem;
`
const PieChartTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
`

const OneWrapper = (props: RouteComponentProps) => {
  const chartRef = useRef<any>(null)

  const barWidth = 20

  useEffect(() => {
    // CREATE BAR CHART
    const dataset: number[] = [
      300, 209, 257, 139, 188, 340, 274, 178, 270, 146, 229, 290,
    ]

    if (chartRef.current !== null) {
      const height = chartRef.current?.height?.baseVal?.value
      const width = chartRef.current?.width?.baseVal?.value
      const max = d3.max(dataset) || 0
      const min = 0

      const spacing = (width - 12 * 20) / 11

      const yScale = d3.scaleLinear()
      yScale.domain([min, max + 5]).range([0, height])

      const svg = d3.select(chartRef.current)

      svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .text((d) => d)
        .attr("x", (d, i) => i * (barWidth + spacing))
        .attr("y", (d) => height - yScale(d))
        .attr("width", barWidth)
        .attr("height", (d) => yScale(d - 15))
        .attr("fill", color.warning.main)
        .attr("rx", 10)

      svg
        .selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text((d, i) => {
          return String(i + 1).length === 1 ? "0" + (i + 1) : String(i + 1)
        })
        .attr("x", (d, i) => i * (barWidth + spacing))
        .attr("y", height)
        .attr("fill", "rgba(0,0,0,0.4)")
        .style("transform", "translateX(5px)")
    }
  }, [])

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
              color={color.success.main}
              width={10}
            />
            <Progress
              label="Facebook"
              count="12,109"
              color={color.success.main}
              width={40}
            />
            <Progress
              label="Twitter"
              count="132,645"
              color={color.success.main}
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
              color={color.danger.main}
              width={10}
            />
            <Progress
              label="Facebook"
              count="12,109"
              color={color.danger.main}
              width={40}
            />
            <Progress
              label="Twitter"
              count="132,645"
              color={color.danger.main}
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
              color={color.primary.main}
              width={10}
            />
            <Progress
              label="Facebook"
              count="12,109"
              color={color.primary.main}
              width={40}
            />
            <Progress
              label="Twitter"
              count="132,645"
              color={color.primary.main}
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
              {generateDoughnut("12.8rem", "12.8rem", 67, color.success)}
            </PieChartCard>
            <PieChartCard>
              <PieChartTitle>Instagram</PieChartTitle>
              {generateDoughnut("12.8rem", "12.8rem", 46, color.primary)}
            </PieChartCard>
            <PieChartCard>
              <PieChartTitle>Facebook</PieChartTitle>
              {generateDoughnut("12.8rem", "12.8rem", 15, color.danger)}
            </PieChartCard>
            <PieChartCard>
              <PieChartTitle>Behance</PieChartTitle>
              {generateDoughnut("12.8rem", "12.8rem", 67, color.info)}
            </PieChartCard>
          </PieChartGrid>
        </Left>
        <Right>
          <svg style={{ height: "35rem", width: "100%" }} ref={chartRef}></svg>
        </Right>
      </BottomGrid>
    </Layout>
  )
}

export default OneWrapper
