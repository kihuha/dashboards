import styled from "styled-components"
import { hexToRgbA } from "../utils"
import { color } from "../design"

const Slider = styled.div`
  &:not(:last-child) {
    margin-bottom: 4.5rem;
  }
`
const SliderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`
const SliderTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
`
const SliderAmount = styled.p`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.4);
`

const SliderBack = styled.div`
  display: block;
  position: relative;
  height: 8px;
  border-radius: 5px;
  background: ${(props: { color: string }) =>
    `rgba(${hexToRgbA(props.color)}, 0.1)`};
`

const SliderFill = styled.div<any>`
  width: ${(props: any) => `${props.width}%`};
  height: 100%;
  background: ${color.primary.main};
  border-radius: 5px;
`

const SliderIcon = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: ${(props: any) => `${props.width}%`};
  transform: translate(-50%, -50%);
  width: 2.4rem;
  height: 2.4rem;
  background: ${color.primary.main};
  border-radius: 100%;

  &:before {
    content: "";
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    background: white;
  }
`

const SliderWrapper = (props: any) => {
  return (
    <Slider>
      <SliderTop>
        <SliderTitle>{props.label}</SliderTitle>
        <SliderAmount>{props.amount}</SliderAmount>
      </SliderTop>
      <SliderBack color={color.primary.main}>
        <SliderFill width={props.width} />
        <SliderIcon width={props.width} />
      </SliderBack>
    </Slider>
  )
}

export default SliderWrapper
