import Avatar from "../../components/avatar"
import { FiMoreHorizontal } from "react-icons/fi"
import styled from "styled-components"

import IconButton from "../../components/iconButton"
import Progress, { ProgressProps } from "../../components/progress"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
`

const StyledHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`

const StyledHeaderName = styled.p`
  margin: 0 0 0.5rem 0;
  font-size: 1.8rem;
  font-weight: bold;
`

const StyledHeaderLocation = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.8);
`

const StyledContent = styled.div`
  margin-top: 3rem;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`

export interface UserCardProps {
  photo: string
  name: string
  location: string
  progressBars: ProgressProps[]
}

const UserCard = ({
  photo,
  name,
  location,
  progressBars = [],
}: UserCardProps) => {
  return (
    <StyledCard>
      <StyledHeader>
        <StyledHeaderContent>
          <Avatar src={photo} />
          <StyledHeaderText>
            <StyledHeaderName>{name}</StyledHeaderName>
            <StyledHeaderLocation>{location}</StyledHeaderLocation>
          </StyledHeaderText>
        </StyledHeaderContent>
        <IconButton icon={<FiMoreHorizontal size={25} />} color="#000" />
      </StyledHeader>
      <StyledContent>
        {progressBars.map((progress: ProgressProps) => (
          <Progress
            width={progress.width}
            color={progress.color}
            title={progress.title}
            titleNumber={progress.titleNumber}
          />
        ))}
      </StyledContent>
    </StyledCard>
  )
}

export default UserCard
