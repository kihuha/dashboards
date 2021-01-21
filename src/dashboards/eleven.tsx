import { useEffect, useRef } from "react"
import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import * as d3 from "d3"

// COMPONENTS
import Layout from "../components/layout"
import Badge from "../components/badge"

const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4rem;
`
const Card = styled.div`
  padding: 3rem;
  background: white;
  border-radius: 5px;
`
const CardHeader = styled.div``
const CardTitle = styled.h2`
  margin: 2rem 0 1rem 0;
  font-size: 2.2rem;
`
const CardBody = styled.p`
  width: 33rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.4);
  line-height: 1.5;
`
const CardAmount = styled.h2`
  margin-top: 2rem;
  color: #ff3a29;
  font-size: 2.2rem;
`

const CardContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
const Bottom = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
`

const BottomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div``

const Right = styled.div``

const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1.5rem;
`

const LegendIcon = styled.div`
  display: block;
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.5rem;
  background: ${(props: any) => props.color};
  border-radius: 100%;
`

const LegendItem = styled.div`
  display: flex;
  font-size: 1.4rem;
  &:not(:last-child) {
    margin-right: 2rem;
  }
`

interface IContent {
  title: string
  body: string
  amount: number
  badges: {
    color: string
    label: string
  }[]
}

const Eleven = (props: RouteComponentProps) => {
  const lineRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    const data = [
      [
        [1, 200],
        [2, 0],
        [3, 400],
        [4, 100],
        [5, 300],
        [6, 100],
        [7, 300],
        [8, 100],
        [9, 300],
        [10, 0],
        [11, 100],
        [12, 400],
        [13, 100],
        [14, 300],
      ],
      [
        [1, 100],
        [2, 200],
        [3, 100],
        [4, 200],
        [5, 0],
        [6, 200],
        [7, 100],
        [8, 200],
        [9, 100],
        [10, 200],
        [11, 100],
        [12, 50],
        [13, 200],
        [14, 100],
      ],
      [
        [1, 300],
        [2, 300],
        [3, 200],
        [4, 300],
        [5, 200],
        [6, 300],
        [7, 100],
        [8, 400],
        [9, 300],
        [10, 400],
        [11, 300],
        [12, 200],
        [13, 300],
        [14, 200],
      ],
    ]
    if (lineRef.current) {
      const width = lineRef.current.offsetWidth
      const height = lineRef.current.offsetHeight
      const parent = d3
        .select(lineRef.current)
        .append("svg")
        .style("width", "100%")
        .style("height", "100%")

      const xScale = d3
        .scaleLinear()
        .domain([1, data[0].length])
        .range([0, width])
      const yScale = d3
        .scaleLinear()
        .domain([0, 400])
        .range([10, height - 40])

      const lineGenerator: any = d3
        .line()
        .curve(d3.curveCardinal.tension(0))
        .x((d) => xScale(d[0]))
        .y((d) => height - yScale(d[1]))

      parent
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "#FF3A29")
        .attr("stroke-width", 4)
        .attr("d", lineGenerator(data[0]))

      parent
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "#4339F2")
        .attr("stroke-width", 4)
        .attr("d", lineGenerator(data[1]))

      parent
        .append("path")
        .attr("fill", "none")
        .attr("stroke", "#34B53A")
        .attr("stroke-width", 4)
        .attr("d", lineGenerator(data[2]))

      const group = parent.append("g")

      group
        .append("line")
        .attr("x1", 0)
        .attr("y1", height - yScale(0))
        .attr("x2", width)
        .attr("y2", height - yScale(0))
        .attr("stroke", "rgba(0,0,0,0.1)")
        .attr("stroke-width", "1")

      group
        .append("line")
        .attr("x1", 0)
        .attr("y1", height - yScale(100))
        .attr("x2", width)
        .attr("y2", height - yScale(100))
        .attr("stroke", "rgba(0,0,0,0.1)")
        .attr("stroke-width", "1")

      console.log(yScale(0))

      group
        .append("line")
        .attr("x1", 0)
        .attr("y1", height - yScale(200))
        .attr("x2", width)
        .attr("y2", height - yScale(200))
        .attr("stroke", "rgba(0,0,0,0.1)")
        .attr("stroke-width", "1")

      group
        .append("line")
        .attr("x1", 0)
        .attr("y1", height - yScale(300))
        .attr("x2", width)
        .attr("y2", height - yScale(300))
        .attr("stroke", "rgba(0,0,0,0.1)")
        .attr("stroke-width", "1")

      console.log(yScale(0))

      group
        .append("line")
        .attr("x1", 0)
        .attr("y1", height - yScale(400))
        .attr("x2", width)
        .attr("y2", height - yScale(400))
        .attr("stroke", "rgba(0,0,0,0.1)")
        .attr("stroke-width", "1")
    }
  }, [])

  const cardContent: IContent[] = [
    {
      title: "Moon Fever",
      body:
        "So what are these strange lights in the sky? Are they aliens invading from Mars? Are the comets coming to start the next ice age?",
      amount: 456,
      badges: [
        {
          label: "Designer",
          color: "#DAD7FE",
        },
        {
          label: "Lost",
          color: "#FFE5D3",
        },
        {
          label: "Hubble",
          color: "#E2FBD7",
        },
      ],
    },
    {
      title: "Space The Final Frontier",
      body:
        "Usually the astronomy magazine or site will give you a general time and location to be ready to look when the meteoroids start to fall.",
      amount: 87,
      badges: [
        {
          label: "Project",
          color: "#FFF5CC",
        },
        {
          label: "Digital",
          color: "#CCF8FE",
        },
      ],
    },
    {
      title: "Moon Gazing",
      body:
        "Comets are a big source of meteoroids because of the nature of those long tails. A large amount of dust, ice and other space debris.",
      amount: 200,
      badges: [
        {
          label: "Designer",
          color: "#DAD7FE",
        },
        {
          label: "Lost",
          color: "#FFE5D3",
        },
      ],
    },
  ]
  return (
    <Layout>
      <Top>
        {cardContent.map((content: IContent, index: number) => (
          <Card key={index}>
            <CardHeader>
              {content.badges.map((badge) => (
                <Badge color={badge.color} label={badge.label} />
              ))}
            </CardHeader>

            <CardContentWrapper>
              <CardTitle>{content.title}</CardTitle>
              <CardAmount>${content.amount}</CardAmount>
            </CardContentWrapper>
            <CardBody>{content.body}</CardBody>
          </Card>
        ))}
      </Top>
      <Bottom>
        <BottomHeader>
          <Left>
            <h2 style={{ fontSize: "2.2rem" }}>Portfolio</h2>
            <div style={{ display: "flex", marginTop: "1rem" }}>
              <p style={{ fontSize: "1.4rem", color: "rgba(0,0,0,0.4)" }}>
                king_ernser@sigurd.biz
              </p>
              <div
                style={{
                  marginLeft: "10rem",
                  fontSize: "1.4rem",
                }}
              >
                One Year
              </div>
            </div>
          </Left>
          <Right>
            <Legend>
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
            </Legend>
          </Right>
        </BottomHeader>
        <div ref={lineRef} style={{ height: "45rem" }}></div>
      </Bottom>
    </Layout>
  )
}

export default Eleven
