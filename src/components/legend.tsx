import styled from "styled-components"

const LegendItem = styled.div`
  display: flex;
  align-items: center;

  span {
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }
`

const Icon = styled.div<any>`
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 100%;
  margin-right: 1rem;
  background: ${(props) => props.color};
`

const Legend = (props: { items: { color: string; label: string }[] }) => {
  return (
    <>
      {props.items.map((item, index) => (
        <LegendItem key={index}>
          <Icon color={item.color} />
          <span>{item.label}</span>
        </LegendItem>
      ))}
    </>
  )
}

export default Legend
