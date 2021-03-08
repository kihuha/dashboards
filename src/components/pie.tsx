import { useCallback, useEffect, useRef } from "react"
import * as d3 from "d3"

import { getRGBA } from "../chartUtils/color"

interface PieProps {
  percent: number
  thickness?: number
  pie?: boolean
  color?: string
  background?: boolean
  backgroundOpacity?: number
}

const Pie = ({
  percent,
  thickness,
  pie,
  color,
  background,
  backgroundOpacity,
}: PieProps) => {
  const ref = useRef(null)
  const backRef = useRef(null)

  const generateChart = useCallback(
    (parent: any) => {
      const arc: any = d3
        .arc()
        .innerRadius(100 - (pie ? 100 : thickness || 0))
        .outerRadius(100)
        .startAngle(0)
        .endAngle(Math.PI * 2 * (percent / 100))

      d3.select(parent)
        .attr("d", arc())
        .style("transform", "translate(50%, 50%)")
        .attr("fill", color || "")

      if (backRef.current) {
        const backArc: any = d3
          .arc()
          .innerRadius(100 - (pie ? 100 : thickness || 0))
          .outerRadius(100)
          .startAngle(0)
          .endAngle(Math.PI * 2 * 1)

        d3.select(backRef.current)
          .attr("d", backArc())
          .style("transform", "translate(50%, 50%)")
          .attr(
            "fill",
            `${
              background ? getRGBA(color, backgroundOpacity) : getRGBA(color, 0)
            }`
          )
      }
    },
    [percent, thickness, pie, color, background, backgroundOpacity]
  )
  useEffect(() => {
    if (ref.current) {
      generateChart(ref.current)
    }
  }, [generateChart, percent])

  return (
    <svg viewBox={`0 0 200 200`} preserveAspectRatio="xMidYMid meet">
      <g>
        <path ref={ref} d="" />
      </g>
      <g>
        <path ref={backRef} d="" />
      </g>
    </svg>
  )
}

export default Pie
