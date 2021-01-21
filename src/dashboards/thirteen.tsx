import { useRef, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import * as d3 from "d3"
import { BsThreeDots } from "react-icons/bs"

// COMPONENTS
import Layout from "../components/layout"
import Button from "../components/button"
import Progress from "../components/progress"
import Slider from "../components/slider"

// IMAGES
import AvatarOne from "../img/eight-avatar-one.png"
import AvatarTwo from "../img/eight-avatar-two.png"
import AvatarThree from "../img/eight-avatar-three.png"

const Paper = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 4px;
`
const Top = styled.div`
  display: grid;
  grid-template-columns: 67% 33%;
  column-gap: 2rem;
  margin-bottom: 2rem;
`
const TopLeft = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50rem;
`

const BarChartWrapper = styled.div`
  width: 100%;
  height: 42rem;
`

const TopRight = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2.5rem;
`
const SliderGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const SliderTotal = styled.div`
  font-size: 4rem;
`
const Bottom = styled.div`
  display: grid;
  grid-template-columns: 50% 22% 28%;
  column-gap: 2rem;
  margin-bottom: 2rem;
`
const BottomLeft = styled.div``
const Card = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 8rem;
  padding: 2rem;
  background: white;
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`
const CardImg = styled.img`
  margin-right: 1rem;
`
const CardTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 1.4rem;
  font-weight: bold;
`
const CardText = styled.p`
  font-size: 1.4rem;
`
const BottomCenter = styled(Paper)``
const PieTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
`
const BottomRight = styled(Paper)``

const Thirteen = (props: RouteComponentProps) => {
  const topRef = useRef<HTMLDivElement | null>(null)
  const chartRef = useRef(null)
  const lineChartRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const width = 14
    const spacing = 10

    if (topRef.current !== null) {
      const dataset = [
        [368, 329],
        [201, 292],
        [226, 254],
        [294, 326],
        [347, 304],
        [219, 290],
        [368, 319],
        [239, 287],
        [336, 301],
        [349, 332],
        [169, 216],
        [308, 275],
      ]
      const max = d3.max(dataset, function (array) {
        return d3.max(array)
      })

      const min = d3.max(dataset, function (array) {
        return d3.max(array)
      })

      const {
        width: parentWidth,
        height: parentHeight,
      } = topRef.current.getBoundingClientRect()

      if (min && max) {
        const yScale = d3
          .scaleLinear()
          .domain([0, 400])
          .range([0, parentHeight])

        const xScale = d3
          .scaleLinear()
          .domain([0, dataset.length - 1])
          .range([0, parentWidth - width * 2 - spacing])

        const parent = d3
          .select(topRef.current)
          .append("svg")
          .style("height", parentHeight)
          .style("width", parentWidth)
          .selectAll("rect")
          .data(dataset)
          .enter()
          .append("g")

        parent
          .append("rect")
          .attr("x", (d, i) => xScale(i))
          .attr("y", (d) => parentHeight - yScale(d[0]))
          .attr("height", (d) => yScale(d[0]))
          .attr("width", width)
          .attr("fill", "#02A0FC")
          .attr("rx", 10)

        parent
          .append("rect")
          .attr("x", (d, i) => xScale(i) + width + spacing)
          .attr("y", (d) => parentHeight - yScale(d[1]))
          .attr("height", (d) => yScale(d[1]))
          .attr("width", width)
          .attr("fill", "#34B53A")
          .attr("rx", 10)
      }
    }
  }, [])

  useEffect(() => {
    const parent = d3
      .select(chartRef.current)
      .attr("width", 200)
      .attr("height", 200)

    const backPath: any = d3
      .arc()
      .innerRadius(86)
      .outerRadius(100)
      .startAngle(0)
      .endAngle(Math.PI * 2)

    const path: any = d3
      .arc()
      .innerRadius(86)
      .outerRadius(100)
      .startAngle(0)
      .endAngle(Math.PI * 2 * 0.64)

    parent
      .append("path")
      .attr("d", backPath())
      .style("transform", " translate(50%, 50%)")
      .attr("fill", "#FFE5D3")

    parent
      .append("path")
      .attr("d", path())
      .style("transform", " translate(50%, 50%)")
      .attr("fill", "#FF3A29")
      .attr("stroke-linecap", "round")

    const innerGroup = parent.append("g")

    innerGroup
      .append("circle")
      .attr("cx", "100")
      .attr("cy", "100")
      .attr("r", "43")
      .attr("fill", "#FF3A29")

    innerGroup
      .append("text")
      .text("65%")
      .attr("fill", "black")
      .attr("x", "50%")
      .attr("y", "50%")
      .attr("text-anchor", "middle")
      .style("font-size", "2.2rem")
      .style("fill", "#fff")
      .style("transform", "translate(1px, 9px)")
  }, [])

  useEffect(() => {
    if (lineChartRef.current) {
      const parent = d3
        .select(lineChartRef.current)
        .append("svg")
        .style("height", "100%")
        .style("width", "100%")
      const width = lineChartRef.current.offsetWidth
      const height = lineChartRef.current.offsetHeight

      const xScale = d3.scaleLinear().domain([0, 100]).range([0, width])
      const yScale = d3.scaleLinear().domain([0, 100]).range([0, height])

      const data = [
        [0, 0],
        [10, 40],
        [20, 25],
        [35, 60],
        [70, 10],
        [90, 100],
        [100, 90],
      ]

      // DRAW LINE
      const lineGenerator: any = d3
        .line()
        .x((d) => xScale(d[0]))
        .y((d) => height - yScale(d[1]))
        .curve(d3.curveBasis)
      const path = lineGenerator(data)
      parent
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "none")
        .attr("d", path)

      // DRAW AREA
      const areaGenerator: any = d3
        .area()
        .x((d) => xScale(d[0]))
        .y0(height)
        .y1((d) => height - yScale(d[1]))
        .curve(d3.curveBasis)

      const area = areaGenerator(data)
      parent
        .append("path")
        .attr("fill", "none")
        .attr("d", area)
        .attr("fill", "#FFB200")
    }
  }, [])

  return (
    <Layout>
      <Top>
        <TopLeft>
          <BarChartWrapper ref={topRef}></BarChartWrapper>
        </TopLeft>
        <TopRight>
          <div>
            <Title>Type something</Title>
            <SliderGrid>
              <Slider width={50} label="Telescopes 101" amount="$204.60" />
              <Slider width={60} label="Radio Astronomy" amount="$80.90" />
              <Slider
                width={47}
                label="Beyond The Naked Eye"
                amount="$1040.00"
              />
              <Slider width={80} label="How To Look Up" amount="$498.45" />
            </SliderGrid>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SliderTotal>$45.90</SliderTotal>
            <Button modifiers="primary">Buy</Button>
          </div>
        </TopRight>
      </Top>
      <Bottom>
        <BottomLeft>
          <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CardImg src={AvatarOne} alt="" />
              <div style={{ width: "15rem" }}>
                <CardTitle>Mattie Blooman</CardTitle>
                <CardText>Edinburgh</CardText>
              </div>
            </div>
            <Progress label="" count="70%" color="#4339F2" width={70} />
          </Card>
          <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CardImg src={AvatarTwo} alt="" />
              <div style={{ width: "15rem" }}>
                <CardTitle>Olivia Arribas</CardTitle>
                <CardText>Rio de Janeiro</CardText>
              </div>
            </div>
            <Progress label="" count="60%" color="#4339F2" width={60} />
          </Card>
          <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CardImg src={AvatarThree} alt="" />
              <div style={{ width: "15rem" }}>
                <CardTitle>Graham Griffiths</CardTitle>
                <CardText>Birmingham</CardText>
              </div>
            </div>
            <Progress label="" count="56%" color="#4339F2" width={56} />
          </Card>
        </BottomLeft>
        <BottomCenter>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <PieTitle>Callie Owen</PieTitle>
            <BsThreeDots size={20} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "4rem",
            }}
          >
            <svg ref={chartRef}></svg>
          </div>
        </BottomCenter>
        <BottomRight>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SliderTotal>$45.90</SliderTotal>
            <BsThreeDots size={20} />
          </div>

          <div
            ref={lineChartRef}
            style={{ position: "relative", height: "24.5rem" }}
          >
            <div
              style={{
                position: "absolute",
                top: "2rem",
                left: "0",
              }}
            >
              <p style={{ fontSize: "2rem" }}>Type Something</p>
              <p
                style={{
                  marginTop: "0.5rem",
                  fontSize: "1.4rem",
                  color: "rgba(0,0,0,0.4)",
                }}
              >
                03 Feb 2019
              </p>
            </div>
          </div>
        </BottomRight>
      </Bottom>
    </Layout>
  )
}

export default Thirteen
