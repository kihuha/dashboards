import { hexToRgbA } from "../utils"

const PieChart = (props: { percent: number; color: string }) => {
  let radius = 52
  const circumference = radius * 2 * Math.PI

  return (
    <svg className="svg" width="126" height="126">
      <circle
        cx="63"
        cy="63"
        r="63"
        fill={`rgba(${hexToRgbA(props.color)}, 0.3)`}
      />
      <circle
        stroke={`rgba(${hexToRgbA(props.color)}, 1)`}
        stroke-width="10"
        fill="transparent"
        r="57"
        cx="63"
        cy="63"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={circumference - (props.percent / 100) * circumference}
        strokeLinecap="round"
        style={{
          transition: "stroke-dashoffset 0.35s",
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
        }}
      />
      <text x="63" y="63" text-anchor="middle" style={{ fontSize: "2rem" }}>
        {`${props.percent}%`}
      </text>
    </svg>
  )
}
export default PieChart
