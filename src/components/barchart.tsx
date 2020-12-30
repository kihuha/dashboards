import styled from "styled-components"

const ChartTitle = styled.p`
  font-size: 1.6rem;
  margin-bottom: 4rem;
`

const BarChart = (props: {
  data: number[]
  label: string
  color: string
  barWidth?: number
  spacing?: number
}) => {
  let arr = props.data
  const originalSize = arr.length

  for (let i = 0; i < 12 - originalSize; i++) {
    arr = [...arr, 0]
  }

  const count = 12
  const barWidth = props.barWidth || 20
  const spacing = props.spacing || barWidth / 2 + 3
  return (
    <>
      <ChartTitle>{props.label}</ChartTitle>
      <svg className="svg" width={count * barWidth + 11 * spacing} height="320">
        {arr.map((item: any, index: number) => (
          <g>
            <rect
              x={index * 20 + index * spacing}
              y={300 + 2 - item}
              width={barWidth}
              height={item + 2}
              fill={props.color}
              rx="10"
            />
            <text
              x={index * 20 + index * spacing + 4}
              y={316}
              style={{ color: "rgba(0,0,0,0.4)" }}
            >
              {index < 9 ? `0${index + 1}` : index + 1}
            </text>
          </g>
        ))}
      </svg>
    </>
  )
}

export default BarChart
