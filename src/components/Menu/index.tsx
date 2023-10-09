import styles from './styles.module.scss'

import { LEVELS } from '../../pages/Home'

interface data {
  isOpen: boolean
  onLevelChange: (level: string) => void
  onChangeIsOpen: () => void
}

export function Menu({ isOpen, onLevelChange, onChangeIsOpen }: data) {
  function handleClick(level: string) {
    onLevelChange(level)
    onChangeIsOpen()
  }

  return (
    <div className={isOpen ? styles.container : styles.close}>
      <span>Escolha uma dificuldade</span>
      <button onClick={() => handleClick(LEVELS.EASY)}>Fácil</button>
      <button onClick={() => handleClick(LEVELS.MEDIUM)}>Médio</button>
      <button onClick={() => handleClick(LEVELS.DIFFICULT)}>Difícil</button>
    </div>
  )
}
