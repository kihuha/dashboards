import * as d3 from "d3"

const generateArc = (width: number, radius: number, percent: number) => {
  const arc: any = d3
    .arc()
    .innerRadius(radius - width)
    .outerRadius(radius)
    .startAngle(0)
    .endAngle(Math.PI * 2 * (percent / 100))
    .cornerRadius(10)

  return arc()
}

export default generateArc
