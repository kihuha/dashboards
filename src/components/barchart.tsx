import styled from "styled-components"

const ChartTitle = styled.p`
  font-size: 1.6rem;
  margin-bottom: 4rem;
`

const BarChart = (props: { data: number[] }) => {
  let arr = props.data
  const originalSize = arr.length

  for (let i = 0; i < 12 - originalSize; i++) {
    arr = [...arr, 0]
  }

  const spacing = 13
  return (
    <>
      <ChartTitle>Aussie chef shares culinary</ChartTitle>
      <svg className="svg" width={12 * 20 + 11 * spacing} height="320">
        {arr.map((item: any, index: number) => (
          <rect
            x={index * 20 + index * spacing}
            y={300 + 2 - item}
            width="20"
            height={item + 2}
            fill="#FFB200"
            rx="8"
          />
        ))}
      </svg>
    </>
  )
}

export default BarChart
