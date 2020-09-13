import { useEffect } from 'react'

import * as S from './styles'
import hearts from '../StreamStarting/hearts'

const StreamEnding = props => {
  useEffect(async () => {
    await hearts.initialize()
    hearts.start()
  }, [])

  return (
    <S.StreamEndingComponent>
      <S.Title>Stream ending</S.Title>
      @RyanWarnerCodes
    </S.StreamEndingComponent>
  )
}

export default StreamEnding
