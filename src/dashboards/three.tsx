import styled from "styled-components"
import { RouteComponentProps } from "@reach/router"

// COMPONENTS
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import Button from "../components/button"
import Badge from "../components/badge"
import Layout from "../components/layout"

import { color } from "../design"

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

const Calendar = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 2rem;
`

const CalendarHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 3.5rem;
`
const CalendarHeaderItem = styled.div`
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.4);
`

const CalendarItem = styled.div`
  display: block;
  height: 14.5rem;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  border-right: solid 1px rgba(0, 0, 0, 0.1);
  padding: 2rem 3rem;
`

const CalendarDay = styled.p`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: 2rem;
`

const CalendarEvent = styled(Badge)`
  position: absolute;
  font-size: 1.4rem;
  max-width: 30rem;
  z-index: 1000;
`

const Three = (props: RouteComponentProps) => {
  const days = [
    { date: 1, events: [] },
    {
      date: 2,
      events: [
        {
          color: color.warning.main,
          background: color.warning.light,
          label: "The glossary of telescopes",
        },
      ],
    },
    { date: 3, events: [] },
    { date: 4, events: [] },
    { date: 5, events: [] },
    { date: 6, events: [] },
    { date: 7, events: [] },
    { date: 8, events: [] },
    { date: 9, events: [] },
    { date: 10, events: [] },
    {
      date: 11,
      events: [
        {
          color: color.info.main,
          background: color.info.light,
          label: "Space the final frontier",
        },
      ],
    },
    { date: 12, events: [] },
    { date: 13, events: [] },
    { date: 14, events: [] },
    { date: 15, events: [] },
    { date: 16, events: [] },
    {
      date: 17,
      events: [
        {
          color: color.success.main,
          background: color.success.light,
          label: "The amazing hubble",
        },
      ],
    },
    { date: 18, events: [] },
    { date: 19, events: [] },
    { date: 20, events: [] },
    { date: 21, events: [] },
    { date: 22, events: [] },
    { date: 23, events: [] },
    { date: 24, events: [] },
    { date: 25, events: [] },
    { date: 26, events: [] },
    {
      date: 27,
      events: [
        {
          color: color.primary.main,
          background: color.primary.light,
          label: "The basics of buying a telescope",
        },
      ],
    },
    { date: 28, events: [] },
    {
      date: 29,
      events: [
        {
          color: color.primary.main,
          background: color.primary.light,
          label: "Dude you re getting a telescope",
        },
      ],
    },
    { date: 30, events: [] },
    { date: 31, events: [] },
  ]

  return (
    <Layout>
      <Header>
        <div>
          <Button
            style={{
              marginRight: "1rem",
              background: color.danger.main,
              color: "white",
            }}
          >
            Month
          </Button>
          <Button style={{ background: "FFE5D3", color: color.danger.main }}>
            Week
          </Button>
        </div>
        <Date>
          <BsArrowLeftShort size={25} />
          <DateText>June 2019</DateText>
          <BsArrowRightShort size={25} />
        </Date>
      </Header>
      <CalendarHeader>
        <CalendarHeaderItem>Mon</CalendarHeaderItem>
        <CalendarHeaderItem>Tue</CalendarHeaderItem>
        <CalendarHeaderItem>Wed</CalendarHeaderItem>
        <CalendarHeaderItem>Thu</CalendarHeaderItem>
        <CalendarHeaderItem>Fri</CalendarHeaderItem>
        <CalendarHeaderItem>Sat</CalendarHeaderItem>
        <CalendarHeaderItem>Sun</CalendarHeaderItem>
      </CalendarHeader>
      <Calendar>
        {days.map((item: any, index: number) => (
          <CalendarItem key={index}>
            <CalendarDay>{item.date}</CalendarDay>
            {item.events.map(
              (
                event: { color: string; background: string; label: string },
                index: number
              ) => (
                <CalendarEvent
                  key={index}
                  label={event.label}
                  color={event.color}
                  background={event.background}
                />
              )
            )}
          </CalendarItem>
        ))}
      </Calendar>
    </Layout>
  )
}

export default Three
