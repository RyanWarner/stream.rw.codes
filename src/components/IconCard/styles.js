
import styled from 'styled-components'

export const IconCardComponent = styled.div`
  background-color: rgba(255, 255, 255, .26);
  border-radius: 15px;
  padding: 17px 37px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(5px);
`

export const Text = styled.span`
  /* font-weight: ${Type.fontWeights.medium}; */
  color: ${props => props.theme.blue10};
  margin-left: 14px;
  font-size: 28px;
`
