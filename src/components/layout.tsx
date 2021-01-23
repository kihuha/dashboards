import styled from "styled-components"
import Logo from "../img/craftwork-logo.svg"

// ICONS
import User from "../img/user.svg"
import Download from "../img/download.svg"
import Wave from "../img/wave.svg"
import Image from "../img/image.svg"
import Calendar from "../img/calendar.svg"
import Flame from "../img/flame.svg"
import Piechart from "../img/piechart.svg"
import Settings from "../img/settings.svg"
import { BsPlus } from "react-icons/bs"
import SearchIcon from "../img/search.svg"

// AVATARS
import AvatarOne from "../img/avatar-one.jpg"
import AvatarTwo from "../img/avatar-two.jpg"
import AvatarThree from "../img/avatar-three.jpg"

import { color } from "../design"

const Wrapper = styled.section`
  display: flex;
`

const Sidebar = styled.div`
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

const Navbar = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 0;
  }
`

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 1rem;
  font-family: inherit;
  font-size: 1.4rem;
  background: transparent;
  border-bottom: solid 2px transparent;
  cursor: pointer;

  &:active,
  &:focus {
    border-bottom: solid 2px black;
  }
`

const AvatarGrid = styled.div`
  display: flex;
`
const Avatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.4rem;
  height: 4.4rem;
  background: #fff;
  border-radius: 100%;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`

const AvatarBadge = styled.div`
  position: absolute;
  display: block;
  width: 1.2rem;
  height: 1.2rem;
  bottom: 0;
  right: 0;
  background: #34b53a;
  border-radius: 100%;
`

const Content = styled.div`
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 1000px) {
    margin-left: 9.6rem;
    padding: 0 4rem;
  }
`

const MainArea = styled.div`
  h1 {
    font-size: 4rem;
  }
`

const Layout = (props: { children: JSX.Element | JSX.Element[] }) => (
  <Wrapper>
    <Sidebar>
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
    </Sidebar>
    <Content>
      <Navbar>
        <form>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={SearchIcon} alt="search icon" />
            <SearchInput
              type="search"
              name="search"
              id="searchID"
              placeholder="Search"
            />
          </div>
        </form>
        <AvatarGrid>
          <Avatar style={{ background: `url(${AvatarOne})` }}>
            <AvatarBadge />
          </Avatar>
          <Avatar style={{ background: `url(${AvatarTwo})` }} />
          <Avatar style={{ background: `url(${AvatarThree})` }} />
          <Avatar style={{ background: color.primary.main, color: "white" }}>
            <BsPlus size={25} />
          </Avatar>
        </AvatarGrid>
      </Navbar>

      <MainArea>{props.children}</MainArea>
    </Content>
  </Wrapper>
)

export default Layout
