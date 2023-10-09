import { CardContent } from '../../pages/Home'
import { shuffleArray } from '../../utils/utils'
import { Card } from '../Card'

import styles from './styles.module.scss'

interface CardBoardProps {
  cardsData: CardContent[]
  level: 'EASY' | 'MEDIUM' | 'DIFFICULT'
}

const levelsData = [
  {
    level: 'EASY',
    totalCards: 8
  },
  {
    level: 'MEDIUM',
    totalCards: 12
  },
  {
    level: 'DIFFICULT',
    totalCards: 18
  }
]

export function CardBoard({ cardsData, level }: CardBoardProps) {
  console.log('[level]: ', level)

  const currentLevel =
    levelsData.find(item => item.level === level) ?? levelsData[0]

  const shuffledCardsData: CardContent[] = shuffleArray(cardsData)

  const baseCards = shuffledCardsData.slice(0, currentLevel.totalCards / 2)

  const cards: CardContent[] = shuffleArray([...baseCards, ...baseCards])

  return (
    <div className={`${styles.container}`}>
      <div className={styles[level.toLowerCase()]}>
        {cards.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
  )
}
