import dayjs from 'dayjs'

import * as S from './styles'
import { Timer, Hearts } from '../'
import { Time } from '../Icons'

const title = 'Morning design sesh'
const date = dayjs().format('dddd, MMM DD YYYY')

export default function StreamStarting () {
  return (
    <S.StreamStarting>
      <Hearts />
      <S.Date>{date}</S.Date>
      <S.Title>{title}</S.Title>
      <S.IconCards>
        <a href='https://twitter.com/RyanWarnerCodes'>
          <S.StyledIconCard
            icon={<S.StyledTwitter />}
            text='@RyanWarnerCodes'
          />
        </a>
        <a href='https://rw.codes'>
          <S.StyledIconCard
            icon={<S.StyledLinkIcon />}
            text='https://rw.codes'
          />
        </a>
      </S.IconCards>
      <S.TimeWrap>
        <Time />
        <Timer />
      </S.TimeWrap>
    </S.StreamStarting>
  )
}
