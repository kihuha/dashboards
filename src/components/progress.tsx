import styled from "styled-components"

const StyledProgress = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledProgressHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  p {
    margin: 0;
    font-size: 1.4rem;
    font-weight: bold;
  }
`

const StyledProgressBack = styled.div`
  width: 100%;
  height: 0.5rem;
  background: rgba(0, 0, 0, 0.1);
`

const StyledProgressIcon = styled.div<any>`
  display: block;
  width: ${(props: any) => props.width + "%"};
  height: 0.5rem;
  background: ${(props: any) => props.color};
`
export interface ProgressProps {
  width: number
  color: string
  title?: string
  titleNumber?: number
}

const Progress = ({ width, color, title, titleNumber }: ProgressProps) => {
  return (
    <StyledProgress>
      {(title || titleNumber) && (
        <StyledProgressHeader>
          <p>{title}</p>
          {titleNumber && (
            <p style={{ color: color }}>
              {String(titleNumber).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          )}
        </StyledProgressHeader>
      )}
      <StyledProgressBack>
        <StyledProgressIcon width={width} color={color} />
      </StyledProgressBack>
    </StyledProgress>
  )
}

export default Progress
