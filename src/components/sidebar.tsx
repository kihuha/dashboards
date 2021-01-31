import styled from "styled-components"

// ICONS
import Logo from "../img/craftwork-logo.svg"
import User from "../img/user.svg"
import Download from "../img/download.svg"
import Wave from "../img/wave.svg"
import Image from "../img/image.svg"
import Calendar from "../img/calendar.svg"
import Flame from "../img/flame.svg"
import Piechart from "../img/piechart.svg"
import Settings from "../img/settings.svg"

const Separator = styled.div`
  display: block;
  width: 100%;
  height: 2px;
  margin: 3rem 0;
  background: rgba(0, 0, 0, 0.2);
`

const IconGrid = styled.div`
  display: flex;
  flex-direction: column;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;

  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`

const SidebarWrapper = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 9.6rem;
    height: 100vh;
    padding: 4rem 1.3rem;
    background: white;
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
  }
`

const SidebarItems = () => (
  <>
    <IconGrid>
      <img src={Logo} alt="craftwork logo" />
      <Separator />
      <IconWrapper>
        <img src={User} alt="User icon" />
      </IconWrapper>
      <IconWrapper>
        <img src={Download} alt="Download icon" />
      </IconWrapper>
      <IconWrapper>
        <img src={Wave} alt="wave icon" />
      </IconWrapper>
      <IconWrapper>
        <img src={Image} alt="icon" />
      </IconWrapper>
      <IconWrapper>
        <img src={Calendar} alt="calendar icon" />
      </IconWrapper>
      <IconWrapper>
        <img src={Flame} alt="flame icon" />
      </IconWrapper>
      <IconWrapper>
        <img src={Piechart} alt="piechart icon" />
      </IconWrapper>
    </IconGrid>

    <IconWrapper>
      <img src={Settings} alt="settings icon" />
    </IconWrapper>
  </>
)

const Sidebar = () => (
  <SidebarWrapper>
    <SidebarItems />
  </SidebarWrapper>
)

export { Sidebar as default, SidebarItems }
