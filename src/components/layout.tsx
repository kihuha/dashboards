import styled from "styled-components"
import { navigate } from "@reach/router"
import MobileHeader from "./mobileHeader"
import Sidebar from "./sidebar"
import ButtonWrapper from "./button"

// ICONS
import { BsArrowLeft, BsPlus } from "react-icons/bs"
import SearchIcon from "../img/search.svg"

// AVATARS
import AvatarOne from "../img/avatar-one.jpg"
import AvatarTwo from "../img/avatar-two.jpg"
import AvatarThree from "../img/avatar-three.jpg"

import { color } from "../design"

const Wrapper = styled.section`
  display: flex;
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
  padding: 0 1rem 4rem 1rem;

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

const Button = styled(ButtonWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 2rem;
`

const Layout = (props: { children: JSX.Element | JSX.Element[] }) => (
  <>
    <MobileHeader />
    <Wrapper>
      <Sidebar />
      <Content>
        <Navbar>
          <form style={{ display: "flex" }}>
            <Button onClick={() => navigate("/")}>
              <BsArrowLeft size={25} />
              Back
            </Button>
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
  </>
)

export default Layout
