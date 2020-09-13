
import styled from 'styled-components'

export const StreamEndingComponent = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  background: linear-gradient(162.07deg, #BAFFC5 5.07%, #74AED6 80.61%);
  padding: 100px 174px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 90px;
  color: ${props => props.theme.blue10};
  margin: 0;
  max-width: 60vw;
  line-height: 120%;
  z-index: 3;
`
