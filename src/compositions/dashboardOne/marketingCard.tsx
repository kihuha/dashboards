import styled from "styled-components"
import Button from "../../components/button"
import { color } from "../../design"

import marketingIcon from "./marketing-icon.svg"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${color.primary.main};
  color: white;
  padding: 2rem;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`

const StyledIcon = styled.img`
  max-width: 10rem;
  margin-bottom: 2rem;

  @media (min-width: 700px) {
    margin-bottom: 0;
  }
`
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`
const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 700px) {
    padding: 0 1.5rem;
    text-align: left;
  }
`
const StyledTextTitle = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`
const StyledTextSubtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 3rem;

  @media (min-width: 700px) {
    margin-bottom: 0;
  }
`

const StyledButton = styled(Button)`
  @media (min-width: 700px) {
    align-self: center;
  }
`

const MarketingCard = () => {
  return (
    <StyledWrapper>
      <StyledIcon src={marketingIcon} />
      <StyledContent>
        <StyledText>
          <StyledTextTitle>Creative outdoor ads</StyledTextTitle>
          <StyledTextSubtitle>
            Every large design company whether it’s a multi-national branding
            corporation or a regular down at heel tatty magazine publisher needs
            to fill holes in the workforce.
          </StyledTextSubtitle>
        </StyledText>
        <StyledButton label="See more" />
      </StyledContent>
    </StyledWrapper>
  )
}

export default MarketingCard
