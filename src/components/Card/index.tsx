import { CardContent } from '../../pages/Home'
import { useState } from 'react'

import styles from './styles.module.scss'

interface CardProps {
  data: CardContent
  onClick: (card: CardContent) => void
}

export function Card({ data, onClick }: CardProps) {
  const [uriImageImportedState, setUriImageImportedState] = useState('')

  const handleImportedImage = async () => {
    const logo = await import(`../../assets/${data.name}.jpg`)
    setUriImageImportedState(logo.default)
  }

  handleImportedImage()

  const handleClickCard = () => {
    if (data.isEnabled) {
      onClick(data)
    }
  }

  return (
    <div
      className={`${styles.container} ${data.isFlipped && styles.flip}`}
      onClick={() => handleClickCard()}
    >
      <div className={`${styles.face} ${styles.cardFront}`}>
        <img src={uriImageImportedState} alt="imagem" />
      </div>
      <div className={`${styles.face} ${styles.cardBack}`}>
        <span>?</span>
      </div>
    </div>
  )
}
