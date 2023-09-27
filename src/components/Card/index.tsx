import { CardContent } from '../../App'
import styles from './styles.module.scss'
import { useState } from 'react'

interface CardProps {
  data: CardContent
}

export function Card({ data }: CardProps) {
  const [isClicked, setIsClicked] = useState(false)

  function toggleClicked() {
    setIsClicked(oldValue => !oldValue)
  }

  return (
    <div
      className={`${styles.container} ${isClicked && styles.flip}`}
      onClick={toggleClicked}
    >
      <div className={`${styles.face} ${styles.cardFront}`}>
        <img src={data.path} alt="imagem da frente da carta" />
      </div>
      <div className={`${styles.face} ${styles.cardBack}`}>
        <span>?</span>
      </div>
    </div>
  )
}
