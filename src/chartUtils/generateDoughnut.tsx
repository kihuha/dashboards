import * as d3 from "d3"

const generateDoughnut = (
  parentWidth: string,
  parentHeight: string,
  percent: number,
  mainColor: { light: string; main: string }
) => {
  const arc: any = d3
    .arc()
    .innerRadius(51)
    .outerRadius(63)
    .startAngle(0)
    .endAngle(Math.PI * 2 * (percent / 100))
    .cornerRadius(10)

  return (
    <div style={{ width: parentWidth, height: parentHeight }}>
      <svg style={{ width: "100%", height: "100%" }}>
        <g>
          <circle r={63} cx={63} cy={63} fill={mainColor.light}></circle>
          <path
            d={arc()}
            fill={mainColor.main}
            style={{ transform: "translate(50%, 50%)" }}
          />
          <text
            style={{
              transform: "translate(35%, 55%)",
              fontSize: "2rem",
            }}
          >
            {percent}%
          </text>
        </g>
      </svg>
    </div>
  )
}

export default generateDoughnut
