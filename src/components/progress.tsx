import styled from "styled-components"
import { hexToRgbA } from "../utils"

const Progress = styled.div`
  display: block;
  height: 8px;
  width: 100%;
  background: ${(props: { color: string }) =>
    `rgba(${hexToRgbA(props.color)}, 0.1)`};
  border-radius: 1rem;

  & > div {
    background: ${(props: { color: string }) =>
      `rgba(${hexToRgbA(props.color)}, 1)`};
  }
`

const ProgressIcon = styled.div<any>`
  display: block;
  height: 100%;
  width: ${(props: { width: number }) => `${props.width}%`};
  border-radius: 1rem;
`

const Wrapper = styled.div`
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`

const ProgressLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 1.4rem;
`

const ProgressBase = (props: { color: string; width: number }) => (
  <Progress {...props}>
    <ProgressIcon width={props.width} />
  </Progress>
)

const ProgressWrapper = (props: {
  label: string
  count: string
  color: string
  width: number
}) => (
  <Wrapper>
    <ProgressLabel>
      <p>{props.label}</p>
      <p>{props.count}</p>
    </ProgressLabel>
    <ProgressBase color={props.color} width={props.width} />
  </Wrapper>
)

export { ProgressWrapper as default, ProgressBase }
