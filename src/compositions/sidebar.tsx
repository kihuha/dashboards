import {
  FiActivity,
  FiCalendar,
  FiDownloadCloud,
  FiImage,
  FiUser,
  FiSettings,
} from "react-icons/fi"
import styled from "styled-components"
import IconButton from "../components/iconButton"

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 9.6rem;
  padding: 4rem 0;
  border: solid 1px #eee;
`

const StyledSidebarHeader = styled.div`
  margin-bottom: 3rem;
`

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 3rem;
  border-top: solid 2px #ccc;

  & > button {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

const StyledFooter = styled.div`
  margin-top: auto;
`

const Logo = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: black;
  border-radius: 100%;
`

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledSidebarHeader>
        <Logo />
      </StyledSidebarHeader>
      <StyledMenu>
        <IconButton icon={<FiUser size={25} />} color="#000" active />
        <IconButton icon={<FiDownloadCloud size={25} />} color="#000" />
        <IconButton icon={<FiActivity size={25} />} color="#000" />
        <IconButton icon={<FiImage size={25} />} color="#000" />
        <IconButton icon={<FiCalendar size={25} />} color="#000" />
      </StyledMenu>

      <StyledFooter>
        <IconButton icon={<FiSettings size={25} />} color="#000" />
      </StyledFooter>
    </StyledSidebar>
  )
}

export default Sidebar
