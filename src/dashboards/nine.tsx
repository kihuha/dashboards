import { useEffect, useRef } from "react"
import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import { BsThreeDotsVertical } from "react-icons/bs"
import * as d3 from "d3"

// COMPONENTS
import Layout from "../components/layout"

const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
`
const Card = styled.div`
  display: block;
  padding: 2rem;
  background: white;
  min-height: 25rem;
`
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const CardTitle = styled.h5`
  font-size: 2.2rem;
  font-weight: bold;
`

const CardFooter = styled.div`
  display: flex;
  margin-top: 3rem;
`

const LegendIcon = styled.div`
  display: block;
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.5rem;
  background: ${(props: any) => props.color};
  border-radius: 100%;
`
const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1.5rem;
`

const LegendItem = styled.div`
  display: flex;
  font-size: 1.4rem;
  &:not(:last-child) {
    margin-right: 2rem;
  }
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
`
const Left = styled.div`
  display: block;
  flex-basis: 49%;
  padding: 2rem;
  background: white;
`
const Right = styled.div`
  display: block;
  flex-basis: 49%;
  padding: 2rem;
  background: white;
`

const Nine = (props: RouteComponentProps) => {
  const circularsRef = useRef<HTMLDivElement | null>(null)
  const lineRef = useRef<HTMLDivElement | null>(null)
  const barRef = useRef<HTMLDivElement | null>(null)
  const areaRef = useRef<HTMLDivElement | null>(null)
  const multiBarRef = useRef<HTMLDivElement | null>(null)
  const circleChartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const parent = d3
      .select(circularsRef.current)
      .append("svg")
      .style("height", "100%")
    const colors = ["#4339F2", "#FF3A29", "#FFB200"]

    const arcOne: any = d3
      .arc()
      .innerRadius(27)
      .outerRadius(44)
      .startAngle(0)
      .endAngle(Math.PI * 2)

    const arcTwo: any = d3
      .arc()
      .innerRadius(53.5)
      .outerRadius(70.5)
      .startAngle(0)
      .endAngle(Math.PI * 2)

    const arcThree: any = d3
      .arc()
      .innerRadius(80)
      .outerRadius(97)
      .startAngle(0)
      .endAngle(Math.PI * 2)

    if (circularsRef.current) {
      parent
        .append("path")
        .attr("d", arcOne())
        .attr("fill", colors[0])
        .style("transform", "translate(50%, 50%)")

      parent
        .append("path")
        .attr("d", arcTwo())
        .attr("fill", colors[1])
        .style("transform", "translate(50%, 50%)")

      parent
        .append("path")
        .attr("d", arcThree())
        .attr("fill", colors[2])
        .style("transform", "translate(50%, 50%)")
    }
  }, [])

  useEffect(() => {
    const parent = d3
      .select(lineRef.current)
      .append("svg")
      .style("height", "100%")
      .style("width", "100%")
    const data = [
      [
        { amount: 30, hour: 0 },
        { amount: 30, hour: 1 },
        { amount: 30, hour: 1.2 },
        { amount: 45, hour: 3.1 },
        { amount: 20, hour: 4.5 },
        { amount: 48, hour: 5 },
        { amount: 60, hour: 6.9 },
        { amount: 60, hour: 7 },
        { amount: 60, hour: 8 },
        { amount: 60, hour: 9 },
      ],
      [
        { amount: 34, hour: 0 },
        { amount: 34, hour: 1 },
        { amount: 34, hour: 1.2 },
        { amount: 15, hour: 3.1 },
        { amount: 60, hour: 4.9 },
        { amount: 13, hour: 5.1 },
        { amount: 55, hour: 6.9 },
        { amount: 40, hour: 7 },
        { amount: 55, hour: 8 },
        { amount: 55, hour: 9 },
      ],
      [
        { amount: 50, hour: 0 },
        { amount: 50, hour: 1 },
        { amount: 50, hour: 1.2 },
        { amount: 75, hour: 3.1 },
        { amount: 55, hour: 4.9 },
        { amount: 80, hour: 5.1 },
        { amount: 60, hour: 6.9 },
        { amount: 64, hour: 7 },
        { amount: 64, hour: 8 },
        { amount: 64, hour: 9 },
      ],
      [
        { amount: 54, hour: 0 },
        { amount: 54, hour: 1 },
        { amount: 90, hour: 3.8 },
        { amount: 70, hour: 6.9 },
        { amount: 70, hour: 7.1 },
        { amount: 74, hour: 7.3 },
        { amount: 78, hour: 7.5 },
        { amount: 81, hour: 7.8 },
        { amount: 83, hour: 8 },
        { amount: 83, hour: 9 },
      ],
    ]

    // MAX VALUES
    const rangeOne = d3.max(data[0], (d) => d.hour) || 0
    const rangeTwo = d3.max(data[0], (d) => d.hour) || 0
    const rangeThree = d3.max(data[0], (d) => d.hour) || 0
    const rangeFour = d3.max(data[0], (d) => d.hour) || 0

    const maxAll = d3.max([rangeOne, rangeTwo, rangeThree, rangeFour])

    if (lineRef.current && maxAll) {
      const height = lineRef.current.offsetHeight
      const width = lineRef.current.offsetWidth

      const xScale = d3.scaleLinear().domain([0, maxAll]).range([0, width])
      const yScale = d3.scaleLinear().domain([0, 100]).range([0, height])

      const lineGenerator: any = d3
        .line()
        .x((d: any) => xScale(d.hour))
        .y((d: any) => height - yScale(d.amount))

      const pathOne = lineGenerator(data[0])
      const pathTwo = lineGenerator(data[1])
      const pathThree = lineGenerator(data[2])
      const pathFour = lineGenerator(data[3])

      parent
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "#FFB200")
        .attr("stroke-width", "4")
        .attr("d", pathOne)

      parent
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "#34B53A")
        .attr("stroke-width", "4")
        .attr("d", pathTwo)

      parent
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "#4339F2")
        .attr("stroke-width", "4")
        .attr("d", pathThree)

      parent
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "#FF3A29")
        .attr("stroke-width", "4")
        .attr("d", pathFour)
    }
  }, [])

  useEffect(() => {
    const dataset = [154, 218, 127, 161, 205, 94, 232, 185, 145, 207, 125, 222]
    const barWidth = 13
    const maxHeight = d3.max(dataset) || 0

    if (barRef.current) {
      const chartHeight = barRef.current.offsetHeight
      const chartWidth = barRef.current.offsetWidth
      const xScale = d3
        .scaleLinear()
        .domain([0, dataset.length])
        .range([0, chartWidth])
      const yScale = d3
        .scaleLinear()
        .domain([0, maxHeight])
        .range([0, chartHeight])

      const parent = d3
        .select(barRef.current)
        .append("svg")
        .style("height", "100%")
        .style("width", "100%")

      parent
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("fill", "#FFB200")
        .attr("x", (d, i) => xScale(i))
        .attr("y", (d) => chartHeight - yScale(d))
        .attr("width", barWidth)
        .attr("height", (d) => yScale(d))
        .attr("rx", 10)
    }
  }, [])

  useEffect(() => {
    const parent = d3
      .select(areaRef.current)
      .append("svg")
      .style("height", "100%")
      .style("width", "100%")

    const data: [number, number][] = [
      [0, 0],
      [70, 20],
      [100, 100],
    ]

    if (areaRef.current) {
      const areaHeight = areaRef.current.offsetHeight
      const areaWidth = areaRef.current.offsetWidth
      const maxWidth = d3.max(data, (d) => d[0]) || 0
      const maxHeight = d3.max(data, (d) => d[1]) || 0
      const xScale = d3
        .scaleLinear()
        .domain([0, maxWidth])
        .range([0, areaWidth])
      const yScale = d3
        .scaleLinear()
        .domain([0, maxHeight])
        .range([0, areaHeight])

      const lineGenerator = d3
        .line()
        .curve(d3.curveBasis)
        .x((d) => xScale(d[0]))
        .y((d) => areaHeight - yScale(d[1]))

      const areaGenerator = d3
        .area()
        .curve(d3.curveBasis)
        .x((d) => xScale(d[0]))
        .y0(areaHeight)
        .y1((d) => areaHeight - yScale(d[1]))

      const path = lineGenerator(data) || ""
      const area = areaGenerator(data) || ""

      parent
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "#4339F2")
        .attr("stroke-width", "4")
        .attr("d", path)

      parent.append("path").attr("d", area).attr("fill", "#DAD7FE")
    }
  }, [])

  useEffect(() => {
    const parent = d3
      .select(multiBarRef.current)
      .append("svg")
      .style("height", "100%")
      .style("width", "100%")
    const dataset = [
      [99, 163, 214],
      [73, 120, 157],
      [82, 135, 177],
      [99, 163, 214],
      [73, 120, 157],
      [41, 68, 89],
      [70, 116, 152],
      [89, 146, 192],
      [74, 122, 160],
      [84, 140, 184],
      [43, 71, 93],
      [107, 176, 231],
    ]

    if (multiBarRef.current) {
      const multiBarWidth = multiBarRef.current.offsetWidth
      const multiBarHeight = multiBarRef.current.offsetHeight
      const maxHeight = d3.max(dataset, (d) => d3.max(d)) || 0
      const yScale = d3
        .scaleLinear()
        .domain([0, maxHeight])
        .range([0, multiBarRef.current.offsetHeight])
      const xScale = d3
        .scaleLinear()
        .domain([0, dataset.length - 1])
        .range([0, multiBarWidth])

      const group = parent
        .selectAll("g")
        .data(dataset)
        .enter()
        .append("g")
        .style("transform", (d, i) => {
          if (i > 0) {
            return `translateX(${xScale(i) - 14}px)`
          } else {
            return `translateX(${xScale(i)}px)`
          }
        })

      console.log(multiBarWidth)
      console.log(xScale(2))

      group
        .append("rect")
        .attr("fill", "#FFB200")
        .attr("height", (d) => yScale(d[2]))
        .attr("width", 14)
        .attr("rx", 10)
        .attr("y", (d) => multiBarHeight - yScale(d[2]))

      group
        .append("rect")
        .attr("fill", "#34B53A")
        .attr("height", (d) => yScale(d[1]))
        .attr("width", 14)
        .attr("rx", 10)
        .attr("y", (d) => multiBarHeight - yScale(d[1]))

      group
        .append("rect")
        .attr("fill", "#4339F2")
        .attr("height", (d) => yScale(d[0]))
        .attr("width", 14)
        .attr("rx", 10)
        .attr("y", (d) => multiBarHeight - yScale(d[0]))
    }
  })

  useEffect(() => {
    // TODO DRAW FOUR CIRCLES WITH ARCS
  }, [])

  return (
    <Layout>
      <Top>
        <Card>
          <CardHeader>
            <CardTitle>Text</CardTitle>
            <BsThreeDotsVertical size={20} />
          </CardHeader>
          <div ref={circularsRef} style={{ height: "20rem" }}></div>
          <CardFooter>
            <LegendItem>
              <LegendIcon color="#4339F2"></LegendIcon>
              Restless
            </LegendItem>
            <LegendItem>
              <LegendIcon color="#FF3A29"></LegendIcon>
              Awake
            </LegendItem>
            <LegendItem>
              <LegendIcon color="#FFB200"></LegendIcon>
              Deep
            </LegendItem>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Text</CardTitle>
            <BsThreeDotsVertical size={20} />
          </CardHeader>
          <LegendItem>
            <LegendIcon color="#FFB200"></LegendIcon>
            Deep
          </LegendItem>
          <div
            ref={barRef}
            style={{ height: "20rem", marginTop: "1rem" }}
          ></div>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Text</CardTitle>
            <BsThreeDotsVertical size={20} />
          </CardHeader>
          <Legend>
            <LegendItem>
              <LegendIcon color="#4339F2"></LegendIcon>
              Restless
            </LegendItem>
            <LegendItem>
              <LegendIcon color="#DAD7FE"></LegendIcon>
              Awake
            </LegendItem>
          </Legend>
          <div ref={areaRef} style={{ height: "20rem" }}></div>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Text</CardTitle>
            <BsThreeDotsVertical size={20} />
          </CardHeader>
          <Legend>
            <LegendItem>
              <LegendIcon color="#FF3A29"></LegendIcon>
              Restless
            </LegendItem>
            <LegendItem>
              <LegendIcon color="#FFB200"></LegendIcon>
              Awake
            </LegendItem>
            <LegendItem>
              <LegendIcon color="#34B53A"></LegendIcon>
              Deep
            </LegendItem>
            <LegendItem>
              <LegendIcon color="#4339F2"></LegendIcon>
              Time
            </LegendItem>
          </Legend>
          <div ref={lineRef} style={{ height: "20rem" }}></div>
        </Card>
      </Top>
      <Bottom>
        <Left>
          <CardHeader>
            <Legend>
              <LegendItem>
                <LegendIcon color="#4339F2"></LegendIcon>
                Instagram
              </LegendItem>
              <LegendItem>
                <LegendIcon color="#34B53A"></LegendIcon>
                Facebook
              </LegendItem>
              <LegendItem>
                <LegendIcon color="#FFB200"></LegendIcon>
                Twitter
              </LegendItem>
            </Legend>
            <BsThreeDotsVertical size={20} />
          </CardHeader>
          <div ref={multiBarRef} style={{ height: "36rem" }}></div>
        </Left>
        <Right>
          <Legend>
            <LegendItem>
              <LegendIcon color="#FFB200"></LegendIcon>
              Instagram
            </LegendItem>
            <LegendItem>
              <LegendIcon color="#4339F2"></LegendIcon>
              Facebook
            </LegendItem>
            <LegendItem>
              <LegendIcon color="#02A0FC"></LegendIcon>
              Twitter
            </LegendItem>
            <LegendItem>
              <LegendIcon color="#FF3A29"></LegendIcon>
              Twitter
            </LegendItem>
          </Legend>

          <div ref={circleChartRef} style={{ height: "36rem" }}></div>

          <p style={{ fontSize: "1.4rem", color: "rgba(0,0,0,0.4)" }}>
            Every large design company whether it’s a multi-national branding
            corporation or a regular down at heel tatty magazine publisher needs
            to fill holes in the workforce.
          </p>
        </Right>
      </Bottom>
    </Layout>
  )
}

export default Nine
