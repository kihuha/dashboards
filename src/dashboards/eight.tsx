import styled, { keyframes } from "styled-components"
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs"
import Layout from "../components/layout"
import Progress from "../components/progress"
import CardOne from "../img/eight-one.jpg"
import CardTwo from "../img/eight-two.jpg"
import CardThree from "../img/eight-three.jpg"
import CardFour from "../img/eight-four.jpg"

import AvatarOne from "../img/eight-avatar-one.png"
import AvatarTwo from "../img/eight-avatar-two.png"
import AvatarThree from "../img/eight-avatar-three.png"
import AvatarFour from "../img/eight-avatar-four.png"
import AvatarFive from "../img/eight-avatar-five.png"
import AvatarSix from "../img/eight-avatar-six.png"
import AvatarSeven from "../img/eight-avatar-seven.png"
import AvatarEight from "../img/eight-avatar-eight.png"
import AvatarNine from "../img/eight-avatar-nine.png"

import { color } from "../design"

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Page = styled.section`
  position: relative;
  padding: 2.4rem;
  border-radius: 3.2rem;
  background: linear-gradient(145deg, #fef5ec 0%, #f6fbff 45%, #fff7f1 100%);
  box-shadow: 0 32px 70px rgba(15, 23, 42, 0.12);
  overflow: hidden;
  color: #0f172a;

  &::before {
    content: "";
    position: absolute;
    width: 32rem;
    height: 32rem;
    top: -12rem;
    right: -10rem;
    background: radial-gradient(
      circle,
      rgba(255, 177, 120, 0.35),
      transparent 60%
    );
  }

  &::after {
    content: "";
    position: absolute;
    width: 28rem;
    height: 28rem;
    bottom: -12rem;
    left: -10rem;
    background: radial-gradient(
      circle,
      rgba(125, 211, 252, 0.35),
      transparent 65%
    );
  }

  @media (min-width: 1200px) {
    padding: 3.2rem;
  }
`

const PageInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const Top = styled.section`
  display: grid;
  gap: 2.4rem;

  @media (min-width: 1200px) {
    grid-template-columns: 1.15fr 0.85fr;
  }

  & > div {
    animation: ${fadeUp} 0.6s ease both;
  }

  & > div:nth-child(2) {
    animation-delay: 0.08s;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
`

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

const TopHeaderTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`

const TopHeaderMeta = styled.p`
  font-size: 1.3rem;
  color: rgba(15, 23, 42, 0.55);
`

const NavControls = styled.div`
  display: flex;
  gap: 0.8rem;
`

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 1.2rem;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: rgba(255, 255, 255, 0.8);
  color: #0f172a;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(15, 23, 42, 0.4);
    outline-offset: 2px;
  }
`

const Card = styled.div`
  padding: 2.4rem;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 2.4rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.1);
  backdrop-filter: blur(6px);
`

const ProgressCard = styled(Card)`
  display: flex;
  flex-direction: column;

  p {
    color: rgba(15, 23, 42, 0.62);
  }

  p:last-child {
    color: rgba(15, 23, 42, 0.9);
    font-weight: 600;
  }
`

const ChartCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const ChartHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
`

const ChartTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 600;
`

const ChartMeta = styled.p`
  font-size: 1.3rem;
  color: rgba(15, 23, 42, 0.55);
`

const Chart = styled.svg`
  width: 100%;
  height: auto;
`

const BottomSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const BottomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;
  flex-wrap: wrap;
`

const BottomTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`

const BottomMeta = styled.p`
  font-size: 1.3rem;
  color: rgba(15, 23, 42, 0.55);
`

const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;

  & > article {
    animation: ${fadeUp} 0.6s ease both;
  }

  & > article:nth-child(2) {
    animation-delay: 0.08s;
  }

  & > article:nth-child(3) {
    animation-delay: 0.16s;
  }

  & > article:nth-child(4) {
    animation-delay: 0.24s;
  }
`

const TripCard = styled.article`
  padding: 1.6rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 2.2rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 26px 46px rgba(15, 23, 42, 0.12);
  }
`

const TripImage = styled.img`
  width: 100%;
  height: 15rem;
  border-radius: 1.8rem;
  object-fit: cover;
`

const TripContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const TripTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0;
`

const TripDescription = styled.p`
  font-size: 1.4rem;
  color: rgba(15, 23, 42, 0.6);
  line-height: 1.6;
`

const AvatarGrid = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 999px;
    border: 2px solid #fff;
    box-shadow: 0 6px 14px rgba(15, 23, 42, 0.12);
  }

  img:not(:first-child) {
    margin-left: -0.8rem;
  }
`

const Avatar = styled.img``

const Eight = () => {
  return (
    <Layout>
      <Page>
        <PageInner>
          <Top>
            <Column>
              <TopHeader>
                <TitleGroup>
                  <TopHeaderTitle>Crew Readiness</TopHeaderTitle>
                  <TopHeaderMeta>Raymond Griffin</TopHeaderMeta>
                </TitleGroup>
                <NavControls>
                  <IconButton aria-label="Previous">
                    <BsArrowLeftShort size={24} />
                  </IconButton>
                  <IconButton aria-label="Next">
                    <BsArrowRightShort size={24} />
                  </IconButton>
                </NavControls>
              </TopHeader>
              <ProgressCard>
                <Progress
                  label="Raymond Griffin"
                  count="448 of 656"
                  color={color.danger.main}
                  width={40}
                />
                <Progress
                  label="Leonard Henderson"
                  count="448 of 656"
                  color={color.info.main}
                  width={40}
                />
                <Progress
                  label="Blanche Fisher"
                  count="448 of 656"
                  color={color.primary.main}
                  width={40}
                />
                <Progress
                  label="Harvey Black"
                  count="448 of 656"
                  color={color.success.main}
                  width={40}
                />
                <Progress
                  label="Barry Crawford"
                  count="448 of 656"
                  color={color.warning.main}
                  width={40}
                />
              </ProgressCard>
            </Column>
            <Column>
              <TopHeader>
                <TitleGroup>
                  <TopHeaderTitle>Asteroids</TopHeaderTitle>
                  <TopHeaderMeta>Last 12 months</TopHeaderMeta>
                </TitleGroup>
              </TopHeader>
              <ChartCard>
                <ChartHeader>
                  <ChartTitle>Activity</ChartTitle>
                  <ChartMeta>Monthly trend</ChartMeta>
                </ChartHeader>
                <Chart
                  viewBox="0 0 390 243"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M1 128.619C16.9631 143.34 18.8058 226.917 30.4722 234.658C42.1386 242.4 47.2684 97.6796 60.5768 94.3602C73.8853 91.0409 78.723 226.513 90.5678 219.669C102.413 212.826 104.306 21.9995 119.925 12.3478C135.544 2.69603 135.948 142.6 150.015 145.329C164.082 148.057 163.539 74.726 178.061 74.726C192.583 74.726 193.886 216.853 209.233 214.337C224.581 211.821 222.876 47.4497 239.354 47.4497C255.832 47.4497 259.692 234.658 274.179 241.542C288.666 248.425 284.687 175.88 299.578 151.554C314.468 127.227 317.153 6.32208 331.09 2.0916C345.026 -2.13887 346.64 141.517 358.652 151.554C370.664 161.59 377.18 35.9674 389 35.9674"
                    stroke={color.danger.main}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1 116.393C16.9631 104.787 18.8058 38.8923 30.4722 32.7885C42.1386 26.6847 47.2684 82.6058 60.5768 85.2229C73.8853 87.84 78.723 39.2106 90.5678 44.6062C102.413 50.0018 104.306 174.223 119.925 181.833C135.544 189.443 135.948 105.37 150.015 103.219C164.082 101.068 165.223 172.686 179.745 172.686C194.267 172.686 193.886 46.8267 209.233 48.8102C224.581 50.7938 222.876 180.39 239.354 180.39C255.832 180.39 259.692 32.7885 274.179 27.3614C288.666 21.9343 284.687 79.1312 299.578 98.3109C314.468 117.491 315.129 225.591 329.066 228.927C343.003 232.262 346.64 120.362 358.652 112.449C370.664 104.536 377.18 189.443 389 189.443"
                    stroke={color.primary.main}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1 155.234C16.9823 169.594 19.4926 182.331 31.173 189.883C42.8534 197.435 47.7296 99.8939 61.0541 96.6559C74.3787 93.4178 79.0762 221.442 90.9353 214.766C102.794 208.09 103.684 150.288 119.322 140.873C134.96 131.458 133.626 226.314 147.71 228.976C161.793 231.637 161.557 16 176.097 16C190.636 16 192.106 162.568 207.472 160.114C222.838 157.66 223.143 76.0532 239.641 76.0532C256.138 76.0532 261.323 148.519 275.827 155.234C290.332 161.948 286.689 238.496 301.598 214.766C316.506 191.036 314.537 100.783 328.491 96.6559C342.444 92.529 347.056 150.323 359.082 160.114C371.108 169.905 377.166 214.766 389 214.766"
                    stroke={color.success.main}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </Chart>
              </ChartCard>
            </Column>
          </Top>
          <BottomSection>
            <BottomHeader>
              <div>
                <BottomTitle>Observation Logs</BottomTitle>
                <BottomMeta>Recent atmospheric captures</BottomMeta>
              </div>
              <BottomMeta>Updated 4 hours ago</BottomMeta>
            </BottomHeader>
            <BottomGrid>
              <TripCard>
                <TripImage src={CardOne} alt="Bristol overview" />
                <TripContent>
                  <TripTitle>Bristol</TripTitle>
                  <TripDescription>
                    Comets are a big source of meteoroids because of the nature
                    of those long tails. A large amount of dust.
                  </TripDescription>
                </TripContent>
                <AvatarGrid>
                  <Avatar src={AvatarOne} alt="Crew member" />
                  <Avatar src={AvatarTwo} alt="Crew member" />
                  <Avatar src={AvatarThree} alt="Crew member" />
                </AvatarGrid>
              </TripCard>
              <TripCard>
                <TripImage src={CardTwo} alt="Budapest overview" />
                <TripContent>
                  <TripTitle>Budapest</TripTitle>
                  <TripDescription>
                    Comets are a big source of meteoroids because of the nature
                    of those long tails. A large amount of dust.
                  </TripDescription>
                </TripContent>
                <AvatarGrid>
                  <Avatar src={AvatarFour} alt="Crew member" />
                </AvatarGrid>
              </TripCard>
              <TripCard>
                <TripImage src={CardThree} alt="Minsk overview" />
                <TripContent>
                  <TripTitle>Minsk</TripTitle>
                  <TripDescription>
                    Comets are a big source of meteoroids because of the nature
                    of those long tails. A large amount of dust.
                  </TripDescription>
                </TripContent>
                <AvatarGrid>
                  <Avatar src={AvatarFive} alt="Crew member" />
                  <Avatar src={AvatarSix} alt="Crew member" />
                </AvatarGrid>
              </TripCard>
              <TripCard>
                <TripImage src={CardFour} alt="Bogotá overview" />
                <TripContent>
                  <TripTitle>Bogotá</TripTitle>
                  <TripDescription>
                    Comets are a big source of meteoroids because of the nature
                    of those long tails. A large amount of dust.
                  </TripDescription>
                </TripContent>
                <AvatarGrid>
                  <Avatar src={AvatarSeven} alt="Crew member" />
                  <Avatar src={AvatarEight} alt="Crew member" />
                  <Avatar src={AvatarNine} alt="Crew member" />
                </AvatarGrid>
              </TripCard>
            </BottomGrid>
          </BottomSection>
        </PageInner>
      </Page>
    </Layout>
  )
}

export default Eight
