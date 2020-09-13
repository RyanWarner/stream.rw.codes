import { useContext } from 'react'
import ComfyJS from 'comfy.js'

import * as S from './styles'
import getRandomInt from 'utils/getRandomInt'
import rainbowfireball from 'images/rainbow-fireball.png'
import hadouken from 'images/hadouken.png'
import fireball from 'images/fireball.png'
import Fireball from './Fireball'
import { store } from 'store'

const twitchChannel = 'RyanWarnerCodes'
const MAX_PARTICLES = 100

const commands = {
  test: 'test',
  heart: 'heart',
  heal: 'heal',
  heal10: 'heal10',
  fireball: 'fireball',
  hadouken: 'hadouken',
  rainbowfireball: 'rainbowfireball',
  rbf: 'rbf'
}

ComfyJS.Init(twitchChannel)

const lasers = []

const createLaser = (image) =>
  new Fireball({
    x: 0,
    y: getRandomInt(100, 980),
    angle: getRandomInt(-70, 70),
    velocity: getRandomInt(0.5, 8),
    index: 1,
    image
  })

const addNew = (image, message) => {
  const laser = createLaser(image)
  const number = parseInt(message)

  if (number && number <= MAX_PARTICLES) {
    for (let i = 1; i < number; i++) {
      const laser = createLaser(image)
      lasers.push(laser)
    }
  }
  lasers.push(laser)
}

const startGame = () => {
  function gameLoop() {
    for (var i = 0; i < lasers.length; i++) {
      var laser = lasers[i]
      const doMovement = laser.doMovement()

      switch (doMovement) {
        case 'delete':
          // dispatch({ type: 'SET_HEALTH', health: state.health - 1 })
          lasers.splice(i, 1)
          break
        case 'hit':
          lasers.splice(i, 1)
          break
      }
    }
  }

  setInterval(gameLoop, 33)

  return <div />
}

startGame()

export default function Commands () {
  const cont = useContext(store)
  const { state, dispatch } = useContext(store)
  const hearts = state.health

  ComfyJS.onCommand = (user, command, message, flags, extra) => {
    console.log('command', command)
    console.log('message', message)
    console.log('extra', extra)
    if (flags.broadcaster && command === commands.test) {
      console.log('!test was typed in chat')
    }

    switch (command) {
      case commands.heal:
        dispatch({ type: 'SET_HEALTH', health: hearts + 1 })
        break
      case commands.heal10:
        dispatch({ type: 'SET_HEALTH', health: hearts + 10 })
        break
      case commands.fireball:
        dispatch({ type: 'SET_HEALTH', health: hearts - 1 })
        addNew(fireball, message)
        break
      case commands.hadouken:
        dispatch({ type: 'SET_HEALTH', health: hearts - 1 })
        addNew(hadouken, message)
        break
      case commands.rainbowfireball:
      case commands.rbf:
        dispatch({ type: 'SET_HEALTH', health: hearts - 1 })
        addNew(rainbowfireball, message)
        break
    }
  }

  const newArray = Array(hearts).fill().map((x, i) => i)
  return (
    <S.StreamCommandsComponent>
      {newArray.map((_, index) => <S.StyledHeart key={index} />)}
    </S.StreamCommandsComponent>
  )
}
