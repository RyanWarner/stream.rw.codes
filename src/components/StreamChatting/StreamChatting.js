import React, { useEffect } from 'react'

import * as S from './styles'
import hearts from '../StreamStarting/hearts'

const StreamChatting = props => {
  useEffect(async () => {
    await hearts.initialize()
    hearts.start()
  }, [])

  return (
    <S.StreamChattingComponent />
  )
}

export default StreamChatting
