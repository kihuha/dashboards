import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"

// COMPONENTS
import Layout from "../components/layout"

// IMAGES
import One from "../img/fourteen/one.png"
import Two from "../img/fourteen/two.png"
import Three from "../img/fourteen/three.png"
import Four from "../img/fourteen/four.png"
import Five from "../img/fourteen/five.png"
import Six from "../img/fourteen/six.png"

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`
const Top = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 4rem;
  align-self: start;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background: white;
  border-radius: 0.5rem;
`

const CardImg = styled.img`
  align-self: flex-start;
  margin-bottom: 1rem;
`
const CardName = styled.p`
  font-size: 1.4rem;
`

const CardAmount = styled.h2`
  margin: 2rem 0 1rem 0;
  font-size: 4rem;
`

const CardPercent = styled.p`
  font-size: 2rem;
  color: ${(props: any) => props.color};
`

const CardGraph = styled.div`
  width: 100%;
  margin-top: 2rem;

  svg {
    width: 100%;
  }
`

const Bottom = styled.div`
  margin-top: 4rem;
  padding: 6rem;
  background: white;
  border-radius: 0.5rem;
`

const BottomWrapper = styled.div`
  display: block;
  width: 72rem;
  margin: 0 auto;
  text-align: center;
`

const BottomTitle = styled.h2`
  font-size: 4rem;
`

const BottomText = styled.p`
  margin: 1rem 0 5rem 0;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.4);
`

const Form = styled.form`
  position: relative;
`

const FormInput = styled.input`
  width: 100%;
  padding: 2.5rem 3rem;
  background: #f8f8f8;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  border: none;
  outline: none;
`

const FormSubmitBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 1rem;
  padding: 1.6rem 3.8rem;
  background: #4339f2;
  font-family: inherit;
  font-size: 1.4rem;
  color: white;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  transform: translateY(-50%);
  transition: all 0.2s linear;

  &:hover {
    background: rgba(67, 57, 242, 0.85);
  }
`

const BottomTextFooter = styled.p`
  margin-top: 3rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.4);
`

const content = [
  {
    image: One,
    name: "Albert Wong",
    amount: 204,
    percent: 5,
    color: "#34B53A",
    graph: (
      <svg
        width="148"
        height="48"
        viewBox="0 0 148 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 30.8095C8.08295 30.8572 8.76317 36.3595 13.1048 37.9195C17.4465 39.4796 19.259 19.3302 24.2118 18.6613C29.1646 17.9924 30.9107 44.4387 35.3187 43.0596C39.7268 41.6806 40.0576 29.7403 45.8703 27.7954C51.6831 25.8504 51.1871 45.4452 56.4219 45.995C61.6568 46.5447 61.5692 2 66.9735 2C72.3779 2 72.9243 32.277 78.6358 31.77C84.3474 31.263 84.461 14.4053 90.5932 14.4053C96.7253 14.4053 98.6525 29.3748 104.044 30.7619C109.435 32.149 108.081 47.9617 113.623 43.0596C119.164 38.1576 118.432 19.5138 123.619 18.6613C128.806 17.8088 130.52 29.7475 134.99 31.77C139.46 33.7925 141.601 43.119 146 43.119"
          stroke="#34B53A"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    ),
  },

  {
    image: Two,
    name: "Theodore Walton",
    amount: 56,
    percent: 84,
    color: "#FF3A29",
    graph: (
      <svg
        width="148"
        height="48"
        viewBox="0 0 148 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 18.9652C7.97235 19.0082 8.76317 23.5885 13.1048 24.889C17.4465 26.1895 19.2644 46.5464 24.2172 45.9888C29.17 45.4311 30.8904 14.9217 35.2984 13.7721C39.7065 12.6225 40.0708 24.7258 45.8835 23.1044C51.6962 21.483 51.1785 9.09402 56.4134 9.55232C61.6483 10.0106 61.5941 17.0181 66.9984 17.0181C72.4028 17.0181 72.9194 2.42798 78.631 2.00535C84.3425 1.58272 84.4621 26.3504 90.5943 26.3504C96.7264 26.3504 98.6548 43.534 104.046 44.6903C109.437 45.8467 108.097 17.3717 113.639 13.2852C119.18 9.19873 118.431 38.2598 123.617 37.5491C128.804 36.8385 130.504 17.1986 134.974 18.8846C139.444 20.5706 141.601 17.1045 146 17.1045"
          stroke="#FF3A29"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    ),
  },
  {
    image: Three,
    name: "Bobby Jacobs",
    amount: 99,
    percent: 45,
    color: "#02A0FC",
    graph: (
      <svg
        width="148"
        height="48"
        viewBox="0 0 148 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 27.1207C8.63594 27.0975 8.66356 3.83385 13 2.12558C17.3364 0.417314 30.5972 16.6762 35 18.1862C39.4028 19.6963 40.2886 43.3288 46.0943 45.4585C51.9 47.5883 63.1022 25.8954 68.5 25.8954C73.8978 25.8954 73.7953 17.6311 79.5 18.1862C85.2047 18.7414 84.3752 2.12558 90.5 2.12558C96.6248 2.12558 98.1152 27.4142 103.5 25.8954C108.885 24.3765 107.465 39.8004 113 45.1681C118.535 50.5359 130.365 28.2547 134.83 26.0401C134.83 26.0401 141.606 45.1681 146 45.1681"
          stroke="#02A0FC"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    ),
  },
  {
    image: Four,
    name: "Emily Quinn",
    amount: 123,
    percent: 13,
    color: "#FFB200",
    graph: (
      <svg
        width="148"
        height="48"
        viewBox="0 0 148 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M146 39.0117C140.397 38.9545 120.892 2.35861 116.246 3.10056C111.599 3.84251 109.986 44.4382 105.85 45.9679C101.715 47.4976 103.785 -6.22858 80.8013 3.0856C57.8176 12.3998 56.4494 26.9213 51.2508 32.3587C46.0522 37.7962 42.9829 8.79298 38.1173 9.73859C33.2517 10.6842 16.5127 27.9491 12.3192 25.7058C8.12575 23.4624 6.12661 20.3834 2 20.3834"
          stroke="#FFB200"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    ),
  },
  {
    image: Five,
    name: "Delia Park",
    amount: 908,
    percent: 140,
    color: "#4339F2",
    graph: (
      <svg
        width="148"
        height="48"
        viewBox="0 0 148 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 30.8095C8.08295 30.8572 8.76317 36.3595 13.1048 37.9195C17.4465 39.4796 19.259 19.3302 24.2118 18.6613C29.1646 17.9924 51.1871 45.4452 56.4219 45.995C61.6568 46.5447 61.5692 2 66.9735 2C72.3779 2 108.081 47.9617 113.623 43.0596C119.164 38.1576 118.432 19.5138 123.619 18.6613C128.806 17.8088 141.601 43.119 146 43.119"
          stroke="#4339F2"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    ),
  },
  {
    image: Six,
    name: "Elner Christensen",
    amount: 835,
    percent: 76,
    color: "#FF3A29",
    graph: (
      <svg
        width="148"
        height="48"
        viewBox="0 0 148 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M146 37.928C139.532 37.8708 138.676 31.7837 133.974 30.0554C129.273 28.3271 127.304 1.27391 121.941 2.01495C116.577 2.75598 104.773 30.2724 98.4779 32.4271C92.1832 34.5818 81.4646 40.5155 75.6121 40.5155C69.7597 40.5155 56.7004 28.1133 50.0598 28.1133C43.4192 28.1133 41.331 5.27715 35.4926 3.74046C29.6543 2.20377 31.1056 40.0456 25.1045 45.4763C19.1035 50.9071 19.9152 12.2863 14.2985 13.2308C8.68188 14.1752 6.84076 40.2757 2 38.035"
          stroke="#FF3A29"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    ),
  },
]

const Fourteen = (props: RouteComponentProps) => {
  return (
    <Layout>
      <Grid>
        <Top>
          {content.map(
            (user: {
              image: any
              name: string
              amount: number
              percent: number
              color: string
              graph: JSX.Element
            }) => (
              <Card>
                <CardImg src={user.image} alt="" />
                <CardName>{user.name}</CardName>
                <CardAmount>{`$${user.amount}`}</CardAmount>
                <CardPercent
                  color={user.color}
                >{`+${user.percent}%`}</CardPercent>
                <CardGraph>{user.graph}</CardGraph>
              </Card>
            )
          )}
        </Top>
        <Bottom>
          <BottomWrapper>
            <BottomTitle>
              Every large design company whether it’s a multi-national branding
            </BottomTitle>
            <BottomText>
              Stop questioning your design decisions by taking advantage of
              predictive design!
            </BottomText>
            <Form>
              <FormInput type="email" placeholder="Enter your work email" />
              <FormSubmitBtn>Start Now</FormSubmitBtn>
            </Form>
            <BottomTextFooter>
              Become part of our ever growing community.{" "}
              <a href="#">Join us on Craftwork.</a>{" "}
            </BottomTextFooter>
          </BottomWrapper>
        </Bottom>
      </Grid>
    </Layout>
  )
}

export default Fourteen
