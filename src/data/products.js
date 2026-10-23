import productImage from '../assets/productos-vivero.png'

export const categories = [
  { name: 'Plantas y almácigos', icon: 'sprout', position: '8%' },
  { name: 'Semillas', icon: 'seed', position: '36%' },
  { name: 'Verduras de temporada', icon: 'basket', position: '67%' },
  { name: 'Plantas aromáticas', icon: 'herb', position: '94%' },
]

export const products = [
  {
    id: 1,
    name: 'Almácigos de lechuga',
    detail: 'Bandeja de 6 unidades',
    price: '$2.500',
    availability: 'Disponible',
    image: productImage,
    position: '7%',
  },
  {
    id: 2,
    name: 'Semillas de temporada',
    detail: 'Sobre de 30 semillas',
    price: '$1.800',
    availability: 'Disponible',
    image: productImage,
    position: '35%',
  },
  {
    id: 3,
    name: 'Tomate reliquia',
    detail: 'Cosecha local · 1 kg',
    price: '$3.900',
    availability: 'Pocas unidades',
    image: productImage,
    position: '66%',
  },
  {
    id: 4,
    name: 'Mix de aromáticas',
    detail: 'Romero, menta y albahaca',
    price: '$4.500',
    availability: 'Disponible',
    image: productImage,
    position: '94%',
  },
]
