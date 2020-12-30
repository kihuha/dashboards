import styled from "styled-components"

const ChartTitle = styled.p`
  font-size: 1.6rem;
  margin-bottom: 4rem;
`

const BarChart = (props: { data: number[]; label: string }) => {
  let arr = props.data
  const originalSize = arr.length

  for (let i = 0; i < 12 - originalSize; i++) {
    arr = [...arr, 0]
  }

  return (
    <>
      <ChartTitle>{props.label}</ChartTitle>
      <svg height="100%" width="100%" viewBox="0 0 100 100">
        {arr.map((item: any, index: number) => (
          <rect
            x={index * 40 + index * 3}
            y={300 + 2 - item}
            width="40"
            height={item + 2}
            fill="rgba(0,0,0,0.2)"
            rx="10"
          />
        ))}
      </svg>
    </>
  )
}

export default BarChart
