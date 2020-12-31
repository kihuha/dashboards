import styled from "styled-components"
import { RouteComponentProps } from "@reach/router"

// COMPONENTS
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import Button from "../components/button"
import Layout from "../components/layout"

const Header = styled.header`
  display: flex;
  align-items: center;
`

const Date = styled.div`
  display: flex;
  margin: 0 auto;
`

const DateText = styled.p`
  padding: 0 1rem;
  font-size: 2.2rem;
`

const Week = styled.div`
  display: flex;
  justify-content: space-between;
  border-right: solid 1px black;
`

const Day = styled.div`
  position: relative;
  flex: 1;
  margin-top: 4rem;
  min-height: 75vh;
  border-left: solid 1px black;
  font-size: 1.4rem;

  span {
    margin-bottom: 0.5rem;
  }
`

const DayHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Event = styled.div<any>`
  position: absolute;
  top: ${(props: any) => `calc(${props.time}% + 4rem)`};
  left: 50%;
  min-height: 5rem;
  width: calc(100% - 1rem);
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  color: ${(props: any) => props.color};
  transform: translateX(-50%);
`

const EventTime = styled.h3`
  font-size: 2rem;
`

const EventLabel = styled.p`
  font-size: 1.4rem;
`

const Six = (props: RouteComponentProps) => {
  const getTop = (time: number) => {
    return (time / 2359) * 75
  }

  return (
    <Layout>
      <Header>
        <div>
          <Button
            style={{
              marginRight: "1rem",
              background: "#FF3A29",
              color: "white",
            }}
          >
            Month
          </Button>
          <Button style={{ background: "FFE5D3", color: "#FF3A29" }}>
            Week
          </Button>
        </div>
        <Date>
          <BsArrowLeftShort size={25} />
          <DateText>Today</DateText>
          <BsArrowRightShort size={25} />
        </Date>
      </Header>
      <Week>
        <Day>
          <DayHeader>
            <span>3</span>Monday
          </DayHeader>
          <Event
            time={getTop(1330)}
            color="#02A0FC"
            style={{ height: "20rem" }}
          >
            <EventTime>1330</EventTime>
            <EventLabel>Usually the astronomy.</EventLabel>
          </Event>
        </Day>
        <Day>
          <DayHeader>
            <span>4</span>Tuesday
          </DayHeader>
          <Event time={getTop(0)} color="#02A0FC">
            <EventTime>1100</EventTime>
            <EventLabel>Usually the astronomy.</EventLabel>
          </Event>
          <Event time={getTop(400)} color="#34B53A" style={{ height: "20rem" }}>
            <EventTime>1230</EventTime>
            <EventLabel>Usually the astronomy.</EventLabel>
          </Event>
        </Day>
        <Day>
          <DayHeader>
            <span>5</span>Wednesday
          </DayHeader>
          <Event time={getTop(500)} color="#FFB200">
            <EventTime>1250</EventTime>
            <EventLabel>Usually the astronomy.</EventLabel>
          </Event>
          <Event time={getTop(900)} color="#4339F2" style={{ height: "20rem" }}>
            <EventTime>1330</EventTime>
            <EventLabel>Usually the astronomy.</EventLabel>
          </Event>
        </Day>
        <Day>
          <DayHeader>
            <span>6</span>Thursday
          </DayHeader>
          <Event time={getTop(0)} color="#FFB200">
            <EventTime>1130</EventTime>
            <EventLabel>Usually the astronomy.</EventLabel>
          </Event>
          <Event time={getTop(400)} color="#34B53A" style={{ height: "20rem" }}>
            <EventTime>1250</EventTime>
            <EventLabel>Usually the astronomy.</EventLabel>
          </Event>
        </Day>
        <Day>
          <DayHeader>
            <span>7</span>Friday
          </DayHeader>
          <Event
            time={getTop(2000)}
            color="#02A0FC"
            style={{ height: "20rem" }}
          >
            <EventTime>1230</EventTime>
            <EventLabel>Usually the astronomy.</EventLabel>
          </Event>
        </Day>
        <Day>
          <DayHeader>
            <span>8</span>Saturday
          </DayHeader>
          <Event
            time={getTop(400)}
            color="#FFB200  "
            style={{ height: "40rem" }}
          >
            <EventTime>1230</EventTime>
            <EventLabel>Usually the astronomy.</EventLabel>
          </Event>
        </Day>
        <Day>
          <DayHeader>
            <span>9</span>Sunday
          </DayHeader>
          <Event time={getTop(400)} color="#4339F2" style={{ height: "25rem" }}>
            <EventTime>1230</EventTime>
            <EventLabel>Usually the astronomy.</EventLabel>
          </Event>
        </Day>
      </Week>
    </Layout>
  )
}

export default Six
