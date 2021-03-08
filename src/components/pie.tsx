import { createRef, useCallback, useEffect, useRef, useState } from "react"
import * as d3 from "d3"

import { getRGBA } from "../chartUtils/color"

interface PieProps {
  data: any
  thickness?: number
  pie?: boolean
  color?: string
  background?: boolean
  backgroundOpacity?: number
}

const Pie = ({
  data,
  thickness,
  pie,
  color,
  background,
  backgroundOpacity,
}: PieProps) => {
  const ref = useRef(null)
  const backRef = useRef(null)
  const [itemRefs, setItemRefs] = useState<any>([])
  const [arcs, setArcs] = useState<any>([])

  const generateArc = useCallback(
    (percent: number, startAngle: number = 0): string => {
      const scale = d3
        .scaleLinear()
        .domain([0, 100])
        .range([0, 2 * Math.PI])

      console.log(`${startAngle} to ${percent}`)

      const arc: any = d3
        .arc()
        .innerRadius(100 - (pie ? 100 : thickness || 0))
        .outerRadius(100)
        .startAngle(scale(startAngle))
        .endAngle(scale(percent))

      return arc()
    },
    [pie, thickness]
  )

  const generateMultipleChart = useCallback(() => {
    // GENERATE REFS AND ARCS FOR ALL DATA ITEMS
    const total = d3.sum(data)

    let prev = 0
    const arcs = data.map((item: any) => {
      const percent = (item / total) * 100
      const arc = generateArc(percent, prev)
      prev = percent

      return arc
    })
    const colors = ["red", "orange", "green", "springgreen"]

    // itemRefs.map((itemRef: any, index: number) => {
    //   d3.select(itemRef.current)
    //     .attr("d", arcs[index])
    //     .style("transform", "translate(50%, 50%)")
    //     .style("fill", colors[index])
    // })
  }, [itemRefs, data, generateArc])

  const generateChart = useCallback(
    (parent: any) => {
      const arc: any = generateArc(data / 100)

      d3.select(parent)
        .attr("d", arc)
        .style("transform", "translate(50%, 50%)")
        .attr("fill", color || "")

      if (backRef.current) {
        const backArc: any = generateArc(1)

        d3.select(backRef.current)
          .attr("d", backArc)
          .style("transform", "translate(50%, 50%)")
          .attr(
            "fill",
            `${
              background ? getRGBA(color, backgroundOpacity) : getRGBA(color, 0)
            }`
          )
      }
    },
    [data, color, background, backgroundOpacity, generateArc]
  )

  useEffect(() => {
    if (typeof data === "object") {
      const refs = data.map((item: any) => createRef())
      setItemRefs(refs)
    }
  }, [data])

  useEffect(() => {
    if (ref.current && typeof data !== "object") {
      generateChart(ref.current)
    } else {
      generateMultipleChart()
    }
  }, [generateChart, generateMultipleChart, data])

  return (
    <svg viewBox={`0 0 200 200`} preserveAspectRatio="xMidYMid meet">
      <g>
        {typeof data === "object" ? (
          itemRefs.map((item: any) => <path ref={item} d="" />)
        ) : (
          <path ref={ref} d="" />
        )}
      </g>
      <g>
        <path ref={backRef} d="" />
      </g>
    </svg>
  )
}

export default Pie
