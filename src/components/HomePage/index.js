import Link from 'next/link'

import * as S from './styles'
import { Hearts, SEO } from 'components'

const menuItems = [{
  name: 'Starting',
  url: '/starting'
}, {
  name: 'Chatting',
  url: '/chatting'
}, {
  name: 'Commands',
  url: '/commands'
}, {
  name: 'BRB',
  url: '/brb'
}, {
  name: 'Ending',
  url: '/ending'
}]

const HomePage = props => {
  return (
    <S.StreamChattingComponent>
      <SEO />
      <Hearts />
      <S.Menu>
        {menuItems.map((item, index) => {
          return (
            <Link href={item.url} passHref key={index}>
              <S.A>
                {item.name}
              </S.A>
            </Link>
          )
        })}
      </S.Menu>
    </S.StreamChattingComponent>
  )
}

export default HomePage
