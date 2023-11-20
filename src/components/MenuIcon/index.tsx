import styles from './styles.module.scss'
import { AiFillHome } from 'react-icons/ai'

interface data {
  isMenuOpen: boolean
  onToggleMenuIsOpen: () => void
}

export function MenuIcon({ isMenuOpen, onToggleMenuIsOpen }: data) {
  return (
    <button
      onClick={() => onToggleMenuIsOpen()}
      className={isMenuOpen ? styles.close : styles.container}
    >
      <AiFillHome color="389999" className={styles.icon} />
    </button>
  )
}
