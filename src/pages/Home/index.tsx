import { useState } from 'react'
import { CardBoard } from '../../components/CardBoard'
import styles from './styles.module.scss'
import { Menu } from '../../components/Menu'

export interface CardContent {
  name: string
  path: string
}

export const LEVELS = {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  DIFFICULT: 'DIFFICULT'
}

const cardsContent: CardContent[] = [
  {
    name: 'ceviche',
    path: './assets/ceviche.jpg'
  },
  {
    name: 'coxinha',
    path: './assets/coxinha.jpg'
  },
  {
    name: 'espetinho',
    path: './assets/espetinho.jpg'
  },
  {
    name: 'lamen1',
    path: './assets/lamen_1.jpg'
  },
  {
    name: 'lamen2',
    path: './assets/lamen_2.jpg'
  },
  {
    name: 'lamen3',
    path: './assets/lamen_3.jpg'
  },
  {
    name: 'pasteis1',
    path: './assets/pasteis_1.jpg'
  },
  {
    name: 'pasteis2',
    path: './assets/pasteis_2.jpg'
  },
  {
    name: 'pasteis',
    path: './assets/pasteis_3.jpg'
  }
]

export function Home() {
  const [selectedLevel, setSelectedLevel] = useState<string>(LEVELS.EASY)
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  console.log('[selectedLevel]: ', selectedLevel)

  function handleSelectLevel(level: string) {
    setSelectedLevel(level)
  }

  function handleToggleIsMenuOpen() {
    setIsMenuOpen(oldValue => !oldValue)
  }

  return (
    <div className={styles.container}>
      <Menu
        isOpen={isMenuOpen}
        onLevelChange={handleSelectLevel}
        onChangeIsOpen={handleToggleIsMenuOpen}
      />
      <CardBoard cardsData={cardsContent} level={selectedLevel} />
    </div>
  )
}
