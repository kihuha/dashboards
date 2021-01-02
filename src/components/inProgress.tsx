import { navigate } from "@reach/router"
import styled, { keyframes } from "styled-components"

import Button from "../components/button"

const Progress = styled.div`
  width: 50%;
  margin: 5rem auto;
  text-align: center;
`

const ProgressTitle = styled.h2`
  font-size: 4rem;
`

const progressBarStripes = keyframes`
    0% { background-position-x: 1rem; }
`

const ProgressBand = styled.div`
  display: block;
  width: 100%;
  height: 2rem;
  margin-top: 2rem;
  background: #ffb200;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
  border-radius: 1rem;
  animation: 1s linear infinite ${progressBarStripes};
`

const InProgress = () => (
  <Progress>
    <ProgressTitle>In Progress</ProgressTitle>
    <ProgressBand />

    <Button
      modifiers="primary"
      style={{ marginTop: "2rem", cursor: "pointer" }}
      onClick={() => navigate("/")}
    >
      Home
    </Button>
  </Progress>
)

export default InProgress
