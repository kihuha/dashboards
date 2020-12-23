import styled from "styled-components"

const Badge = styled.div`
  display: inline-block;
  padding: 5px 7.75px;
  border-radius: 0.5rem;
  background: ${(props: any) => `${props.color}`};

  &:not(:last-child) {
    margin-right: 1rem;
  }
`

const BadgeWrapper = (props: { color: string; label: string }) => (
  <Badge {...props}>{props.label}</Badge>
)

export default BadgeWrapper
