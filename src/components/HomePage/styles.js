
import styled from 'styled-components'

export const StreamChattingComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  background: linear-gradient(162.07deg, #BAFFC5 5.07%, #74AED6 80.61%);
  padding: 100px 174px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 90px;
  color: ${props => props.theme.blue10};
  margin: 0;
  max-width: 60vw;
  line-height: 120%;
  z-index: 3;
`

export const Menu = styled.nav`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  padding: 20px 34px;
  backdrop-filter: blur(7px);
  position: relative;
  z-index: 3;
`

export const A = styled.a`
  padding: 10px;
  display: block;
  font-size: 28px;
  margin: 10px 0;
  text-decoration: none;
  color: ${props => props.theme.blue10};

  &:hover {
    color: ${props => props.theme.red};
  }
`