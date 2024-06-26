import styles from './styles.module.scss'
import { AiFillHome } from 'react-icons/ai'

interface data {
  isMenuOpen: boolean
  onChangeIsOpen: () => void
}

export function MenuIcon({ isMenuOpen, onChangeIsOpen }: data) {
  return (
    <button
      onClick={() => onChangeIsOpen()}
      className={isMenuOpen ? styles.close : styles.container}
    >
      <AiFillHome color="389999" className={styles.icon} />
    </button>
  )
}
