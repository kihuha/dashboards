import { useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import * as d3 from "d3"

import { color, font } from "../design"
import Legend from "./legend"

const GraphLayout = styled.div`
  width: 100%;
  max-width: 140rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;

  @media (min-width: 1000px) {
    padding: 3rem;
  }
`

const GraphHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (min-width: 1000px) {
    margin-bottom: 3rem;
  }
`
const GraphTitle = styled.h4`
  font-size: ${font.size.h4};

  @media (min-width: 1000px) {
    font-size: ${font.size.h3};
  }
`

const gridFlex = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const GraphGrid = styled.div`
  ${gridFlex};
  width: 2rem;

  span {
    height: 1rem;
    font-size: 0.8rem;

    @media (min-width: 1000px) {
      font-size: 1rem;
    }
  }

  @media (min-width: 1000px) {
    width: 6rem;
  }
`

const GraphGridBack = styled.div<any>`
  ${gridFlex};
  position: absolute;
  width: 100%;
  height: 100%;

  span {
    display: block;
    height: 1px;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
  }
`

const Graph = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50vh;

  @media (min-width: 1000px) {
    height: 70vh;
  }
`

const GraphSvg = styled.svg`
  width: 100%;
  height: 100%;
  z-index: 2000;
`

const Grid = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 1rem;
`

const GraphTwo = () => {
  const chartRef = useRef<null | HTMLDivElement>(null)
  const limits = [100, 200, 300, 400, 500, 600, 700].reverse()
  const data = [
    {
      total: 550,
    },
    {
      total: 620,
    },
    {
      total: 480,
    },
    {
      total: 610,
    },
    {
      total: 395,
    },
    {
      total: 690,
    },
    {
      total: 550,
    },
    {
      total: 580,
    },
    {
      total: 670,
    },
    {
      total: 490,
    },
    {
      total: 670,
    },
    {
      total: 620,
    },
  ]

  useEffect(() => {
    const height = chartRef.current?.offsetHeight
    const width = chartRef.current?.offsetWidth
  }, [])

  return (
    <GraphLayout>
      <GraphHeader>
        <GraphTitle>South Skylafort</GraphTitle>

        <Legend
          items={[
            {
              label: "Restless",
              color: color.primary.main,
            },
          ]}
        />
      </GraphHeader>
      <div style={{ display: "flex" }}>
        <GraphGrid>
          {limits.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </GraphGrid>
        <Graph ref={chartRef}>
          <GraphGridBack>
            {limits.map((item, index) => (
              <Grid key={index}>
                <span></span>
              </Grid>
            ))}
          </GraphGridBack>

          <GraphSvg></GraphSvg>
        </Graph>
      </div>
    </GraphLayout>
  )
}

export default GraphTwo
