import { Card } from './components/Card'
import './styles/globalStyles.scss'

export interface CardContent {
  name: string
  path: string
}

const cardContent: CardContent[] = [
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

export function App() {
  return (
    <div>
      <Card data={cardContent[0]} />
    </div>
  )
}
