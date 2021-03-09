import styled from "styled-components"
import { color } from "../design"

const PlainAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 7rem;
  border-radius: 100%;
  background: ${color.primary.main};
  color: white;
`

const ImageAvatar = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 100%;
`

const AvatarOnlineIndicator = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background: ${(props: any) => props.color};
  transform: translate(0, -100%);
  box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.05);
`

const AvatarWrapper = styled.div`
  position: relative;
  width: 7rem;
  height: 7rem;
`

const Avatar = ({ src, icon, online, onlineColor, ...rest }: any) => {
  return (
    <AvatarWrapper>
      {online && <AvatarOnlineIndicator color={onlineColor} />}
      {src ? (
        <ImageAvatar src={src} {...rest} />
      ) : (
        <PlainAvatar {...rest}>{icon}</PlainAvatar>
      )}
    </AvatarWrapper>
  )
}

export default Avatar
