import { useCallback, useEffect, useState } from 'react'
import { CardContent } from '../../pages/Home'
import { shuffleArray } from '../../utils/utils'
import { Card } from '../Card'
import { v4 as uuidv4 } from 'uuid'

import styles from './styles.module.scss'
import { CongratulationsCard } from '../CongratulationsCard'
import Confetti from 'react-confetti'

interface CardBoardProps {
  cardsData: CardContent[]
  level: 'EASY' | 'MEDIUM' | 'DIFFICULT'
  isMenuOpen: boolean
  onChangeIsOpen: () => void
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

export function CardBoard({
  cardsData,
  level,
  isMenuOpen,
  onChangeIsOpen
}: CardBoardProps) {
  const [cards, setCards] = useState<CardContent[]>([])
  const [isGameOver, setIsGameOver] = useState(false)

  const generateCards = useCallback(() => {
    const currentLevel =
      levelsData.find(item => item.level === level) ?? levelsData[0]

    const shuffledCardsData: CardContent[] = shuffleArray(cardsData)

    const baseCards = shuffledCardsData.slice(0, currentLevel.totalCards / 2)

    const generatedCards = shuffleArray([...baseCards, ...baseCards]).map(
      (card: CardContent) => {
        return {
          ...card,
          id: uuidv4()
        }
      }
    )

    setCards(generatedCards)
  }, [cardsData, level])

  function changeCardStatus(clickedCard: CardContent) {
    let updatedCards: CardContent[] = cards.map(card => {
      if (clickedCard.id === card.id) {
        return {
          ...card,
          isFlipped: !card.isFlipped
        }
      }

      return card
    })

    const flippedCards = updatedCards.filter(
      card => card.isFlipped && card.isEnabled
    )

    if (flippedCards.length === 2) {
      if (flippedCards[0].name === flippedCards[1].name) {
        updatedCards = cards.map(card => {
          if (card.name === flippedCards[0].name) {
            return {
              ...card,
              isEnabled: false,
              isFlipped: true
            }
          }

          return card
        })
      }
    }

    setCards(updatedCards)
  }

  const verifyIfGameEnded = useCallback(() => {
    const filteredCards = cards.filter(
      card => !card.isEnabled && card.isFlipped
    )

    if (filteredCards?.length === cards?.length) {
      setIsGameOver(true)
    }
  }, [cards])

  useEffect(() => {
    generateCards()
  }, [generateCards])

  useEffect(() => {
    if (cards?.length !== 0) {
      verifyIfGameEnded()
    }
  }, [cards?.length, verifyIfGameEnded])

  if (isGameOver) {
    return (
      <div className={styles.endGame}>
        <Confetti />
        <CongratulationsCard
          isOpen={isMenuOpen}
          onChangeIsOpen={onChangeIsOpen}
          isGameOver={isGameOver}
          setIsGameOver={setIsGameOver}
        />
      </div>
    )
  }

  return (
    <>
      <div className={isMenuOpen ? styles.close : styles.container}>
        <div className={styles[level.toLowerCase()]}>
          {cards.map((card, index) => (
            <Card key={index} data={card} onClick={changeCardStatus} />
          ))}
        </div>
      </div>
    </>
  )
}
