import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"

// COMPONENTS
import Layout from "../components/layout"
import { ProgressBase } from "../components/progress"
import Menu from "../img/menu.svg"

const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`

const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 3rem;
  background: white;
  border-radius: 1rem;
`

const Bottom = styled.div`
  margin-top: 3rem;
  padding: 3rem 0;
  border-radius: 1rem;
`

const TitleGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  margin-bottom: 1.4rem;
  padding: 0 2.5rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.4);
`

const DataGrid = styled(TitleGrid)`
  padding: 2.5rem;
  border-radius: 1rem;
  background: white;
  color: rgba(0, 0, 0, 1);

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`

const CheckBox = styled.input`
  margin-right: 1rem;
`

const GraphTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 2.2rem;

  img {
    opacity: 0.2;
  }
`

const ProgressWrapper = styled.div`
  margin-top: 3rem;

  div {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`

const Progress = styled.div`
  display: flex;
  align-items: center;
`

const ProgressBar = styled(ProgressBase)`
  width: 100%;
  height: 1.2rem;
`

const ProgressText = styled.p`
  width: 8rem;
  margin-right: 2rem;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
`

const Legend = styled.div``

const LegendGrid = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 3.5rem;
`

const LegendItem = styled.div`
  display: flex;
  font-size: 1.4rem;

  &:not(:last-child) {
    margin-right: 3rem;
  }

  &::before {
    content: "";
    display: block;
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.5rem;
    border-radius: 100%;
  }

  &:nth-of-type(1) {
    &::before {
      background: #dad7fe;
    }
  }
  &:nth-of-type(2) {
    &::before {
      background: #4339f2;
    }
  }
`
const BottomScale = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  margin-left: 8rem;
  color: rgba(0, 0, 0, 0.4);
`

const BarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
const Bar = styled.div<any>`
  width: 1.8rem;
  border-radius: 1rem;
  background: ${(props: any) => (props.color ? props.color : "#DAD7FE")};
  height: ${(props: any) => `${props.height}px`};

  &:nth-of-type(6) {
    background: #4339f2;
  }
`

const Five = (props: RouteComponentProps) => {
  const testData = [
    164,
    132,
    136,
    186,
    158,
    210,
    191,
    158,
    178,
    136,
    158,
    93,
    191,
    158,
    178,
    136,
    158,
    93,
    93,
  ]
  return (
    <Layout>
      <Content>
        <Top>
          <GraphWrapper style={{ marginRight: "2rem" }}>
            <GraphTitle>Title</GraphTitle>
            <ProgressWrapper>
              <Progress>
                <ProgressText>28 Jul 2019</ProgressText>
                <ProgressBar color="#FF3A29" width={20} />
              </Progress>
              <Progress>
                <ProgressText>07 Jan 2019</ProgressText>
                <ProgressBar color="#FF3A29" width={20} />
              </Progress>
              <Progress>
                <ProgressText>18 May 2019</ProgressText>
                <ProgressBar color="#FF3A29" width={20} />
              </Progress>
              <Progress>
                <ProgressText>23 May 2019</ProgressText>
                <ProgressBar color="#FF3A29" width={20} />
              </Progress>
              <Progress>
                <ProgressText>17 Feb 2019</ProgressText>
                <ProgressBar color="#FF3A29" width={20} />
              </Progress>
            </ProgressWrapper>
            <BottomScale>
              <p>01</p>
              <p>02</p>
              <p>03</p>
              <p>04</p>
              <p>05</p>
              <p>06</p>
              <p>07</p>
              <p>08</p>
              <p>09</p>
              <p>10</p>
              <p>11</p>
            </BottomScale>
          </GraphWrapper>
          <GraphWrapper style={{ marginLeft: "2rem" }}>
            <Legend>
              <GraphTitle>
                Text
                <img src={Menu} alt="" />
              </GraphTitle>
              <LegendGrid>
                <LegendItem>Instagram</LegendItem>
                <LegendItem>Facebook</LegendItem>
              </LegendGrid>
            </Legend>
            <BarWrapper>
              {testData.map((value: any, index: number) => (
                <Bar height={value} key={index} />
              ))}
            </BarWrapper>
          </GraphWrapper>
        </Top>
        <Bottom>
          <TitleGrid>
            <p>Name</p>
            <p>Status</p>
            <p>Size</p>
            <p>Date</p>
            <p>Time</p>
          </TitleGrid>
          <DataGrid>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CheckBox type="checkbox" checked={true} />
              <p>Chinaza Akachi</p>
            </div>
            <p>In Progress</p>
            <p>456 MB</p>
            <p>09 Dec 2019</p>
            <p>05:18AM</p>
          </DataGrid>
          <DataGrid>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CheckBox type="checkbox" />
              <p>Bernarr Dominik</p>
            </div>
            <p>In Progress</p>
            <p>345 MB</p>
            <p>26 Feb 2019</p>
            <p>05:10AM</p>
          </DataGrid>
          <DataGrid>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CheckBox type="checkbox" checked={true} />
              <p>Beth Murphy</p>
            </div>
            <p>In Progress</p>
            <p>498 MB</p>
            <p>16 Sep 2019</p>
            <p>00:37PM</p>
          </DataGrid>
          <DataGrid>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CheckBox type="checkbox" />
              <p>Dameon Peterson</p>
            </div>
            <p>In Progress</p>
            <p>125 MB</p>
            <p>08 Oct 2019</p>
            <p>05:11AM</p>
          </DataGrid>
        </Bottom>
      </Content>
    </Layout>
  )
}

export default Five
