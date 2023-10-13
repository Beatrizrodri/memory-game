import styles from './styles.module.scss'
import { AiFillHome } from 'react-icons/ai'

interface data {
  isOpen: boolean
  onToggleMenuIsOpen: () => void
}

export function MenuIcon({ isOpen, onToggleMenuIsOpen }: data) {
  return (
    <button
      onClick={() => onToggleMenuIsOpen()}
      className={isOpen ? styles.close : styles.container}
    >
      <AiFillHome color="389999" className={styles.icon} />
    </button>
  )
}
