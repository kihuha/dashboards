import { useEffect, useRef } from "react"
import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import * as d3 from "d3"
import { BsPlus, BsChevronDown } from "react-icons/bs"

// COMPONENTS
import Layout from "../components/layout"
import Badge from "../components/badge"

// IMAGES
import One from "../img/eleven/one.png"
import Two from "../img/eleven/two.png"
import Three from "../img/eleven/three.png"
import Four from "../img/eleven/four.png"
import Five from "../img/eleven/five.png"
import Six from "../img/eleven/six.png"

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

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3.2rem;
`

const Avatar = styled.img`
  margin-right: 0.5rem;
`

const AvatarPlus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  background: #4339f2;
  color: white;
`

const CardIcon = styled(AvatarPlus)`
  background: #ffe5d3;
  color: #ff3a29;
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

const ChartButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: 10rem;
  padding: 0.5rem;
  font-size: 1.4rem;
  border: none;
  outline: none;
  background: none;
  font-family: inherit;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`

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
    background: string
    label: string
  }[]
  images: any[]
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
          background: "#DAD7FE",
        },
        {
          label: "Lost",
          background: "#FFE5D3",
        },
        {
          label: "Hubble",
          background: "#E2FBD7",
        },
      ],
      images: [One, Two, Three],
    },
    {
      title: "Space The Final Frontier",
      body:
        "Usually the astronomy magazine or site will give you a general time and location to be ready to look when the meteoroids start to fall.",
      amount: 87,
      badges: [
        {
          label: "Project",
          background: "#FFF5CC",
        },
        {
          label: "Digital",
          background: "#CCF8FE",
        },
      ],
      images: [Four],
    },
    {
      title: "Moon Gazing",
      body:
        "Comets are a big source of meteoroids because of the nature of those long tails. A large amount of dust, ice and other space debris.",
      amount: 200,
      badges: [
        {
          label: "Designer",
          background: "#DAD7FE",
        },
        {
          label: "Lost",
          background: "#FFE5D3",
        },
      ],
      images: [Five, Six],
    },
  ]
  return (
    <Layout>
      <Top>
        {cardContent.map((content: IContent, index: number) => (
          <Card key={index}>
            <CardHeader>
              {content.badges.map((badge) => (
                <Badge
                  color="#000"
                  background={badge.background}
                  label={badge.label}
                />
              ))}
            </CardHeader>

            <CardContentWrapper>
              <CardTitle>{content.title}</CardTitle>
              <CardAmount>${content.amount}</CardAmount>
            </CardContentWrapper>
            <CardBody>{content.body}</CardBody>
            <CardFooter>
              <div style={{ display: "flex", alignItems: "center" }}>
                {content.images.map((image) => (
                  <Avatar src={image} alt="" />
                ))}
                <AvatarPlus>
                  <BsPlus size={20} />
                </AvatarPlus>
              </div>
              <div>
                <CardIcon>
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.9409 13.667C10.8851 13.667 10.8276 13.6645 10.7701 13.6586C10.0367 13.5861 9.46175 13.0686 9.30341 12.3395L7.06758 2.01281L4.76508 7.33115C4.63258 7.63615 4.33175 7.83365 4.00008 7.83365H1.50008C1.03925 7.83365 0.666748 7.46031 0.666748 7.00031C0.666748 6.53948 1.03925 6.16698 1.50008 6.16698H3.45341L5.54175 1.34281C5.83758 0.662813 6.48925 0.26698 7.23008 0.341147C7.96341 0.413647 8.53841 0.931147 8.69675 1.66031L10.9326 11.987L13.2351 6.66865C13.3676 6.36365 13.6676 6.16698 14.0001 6.16698H16.5001C16.9609 6.16698 17.3334 6.53948 17.3334 7.00031C17.3334 7.46031 16.9609 7.83365 16.5001 7.83365H14.5467L12.4584 12.657C12.1859 13.2845 11.6017 13.667 10.9409 13.667"
                      fill="#FF3A29"
                    />
                  </svg>
                </CardIcon>
              </div>
            </CardFooter>
          </Card>
        ))}
      </Top>
      <Bottom>
        <BottomHeader>
          <Left>
            <h2 style={{ fontSize: "2.2rem" }}>Portfolio</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <p style={{ fontSize: "1.4rem", color: "rgba(0,0,0,0.4)" }}>
                king_ernser@sigurd.biz
              </p>
              <ChartButton>
                One Year <BsChevronDown style={{ marginLeft: "0.5rem" }} />
              </ChartButton>
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
