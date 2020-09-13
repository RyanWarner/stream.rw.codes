import { useEffect } from 'react'
import hearts from '../StreamStarting/hearts'

const startHeartsAnimation = async () => {
  await hearts.initialize()
  hearts.start()
}

const Hearts = props => {
  useEffect(() => {
    startHeartsAnimation()
  }, [])

  return null
}

export default Hearts
