import { useState } from 'react'
import { CardBoard } from '../../components/CardBoard'
import styles from './styles.module.scss'
import { Menu } from '../../components/Menu'
import { MenuIcon } from '../../components/MenuIcon'
export interface CardContent {
  id?: string
  name: string
  path: string
  isFlipped: boolean
  isEnabled: boolean
}

export const LEVELS = {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  DIFFICULT: 'DIFFICULT'
}

const cardsContent: CardContent[] = [
  {
    name: 'ceviche',
    path: './assets/ceviche.jpg',
    isFlipped: false,
    isEnabled: true
  },
  {
    name: 'coxinha',
    path: './assets/coxinha.jpg',
    isFlipped: false,
    isEnabled: true
  },
  {
    name: 'espetinho',
    path: './assets/espetinho.jpg',
    isFlipped: false,
    isEnabled: true
  },
  {
    name: 'lamen_1',
    path: './assets/lamen_1.jpg',
    isFlipped: false,
    isEnabled: true
  },
  {
    name: 'lamen_2',
    path: './assets/lamen_2.jpg',
    isFlipped: false,
    isEnabled: true
  },
  {
    name: 'lamen_3',
    path: './assets/lamen_3.jpg',
    isFlipped: false,
    isEnabled: true
  },
  {
    name: 'pasteis_1',
    path: './assets/pasteis_1.jpg',
    isFlipped: false,
    isEnabled: true
  },
  {
    name: 'pasteis_2',
    path: './assets/pasteis_2.jpg',
    isFlipped: false,
    isEnabled: true
  },
  {
    name: 'pasteis_3',
    path: './assets/pasteis_3.jpg',
    isFlipped: false,
    isEnabled: true
  }
]

export function Home() {
  const [selectedLevel, setSelectedLevel] = useState<string>(LEVELS.EASY)
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  function handleSelectLevel(level: string) {
    setSelectedLevel(level)
  }

  function handleToggleIsMenuOpen() {
    setIsMenuOpen(oldValue => !oldValue)
  }

  return (
    <div className={styles.container}>
      <MenuIcon
        isMenuOpen={isMenuOpen}
        onToggleMenuIsOpen={handleToggleIsMenuOpen}
      />
      <Menu
        isOpen={isMenuOpen}
        onLevelChange={handleSelectLevel}
        onChangeIsOpen={handleToggleIsMenuOpen}
      />
      <CardBoard
        cardsData={cardsContent}
        level={selectedLevel}
        isMenuOpen={isMenuOpen}
      />
    </div>
  )
}
