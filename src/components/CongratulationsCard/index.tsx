import styles from './styles.module.scss'

interface CongratulationsProps {
  isOpen: boolean
  onChangeIsOpen: () => void
  setIsGameOver: (value: boolean) => void
  isGameOver: boolean
}

export function CongratulationsCard({
  isOpen,
  onChangeIsOpen,
  isGameOver,
  setIsGameOver
}: CongratulationsProps) {
  return (
    <div className={!isOpen && isGameOver ? styles.container : styles.close}>
      <span>Desafio concluído</span>
      <button
        onClick={() => {
          onChangeIsOpen()
          setIsGameOver(false)
        }}
      >
        Iniciar outro desafio
      </button>
    </div>
  )
}
