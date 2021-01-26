import styled from "styled-components"

import Logo from "../img/craftwork-logo.svg"

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
  background: white;

  @media (min-width: 1000px) {
    display: none;
    visibility: hidden;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 2.5rem;
  height: 1rem;
`
const MenuIcon = styled.div`
  width: 100%;
  height: 1px;
  background: black;
`

const HeaderWrapper = () => {
  return (
    <Header>
      <img src={Logo} alt="" />
      <Menu>
        <MenuIcon></MenuIcon>
        <MenuIcon></MenuIcon>
      </Menu>
    </Header>
  )
}

export default HeaderWrapper
