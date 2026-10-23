import imagen1 from '../assets/niños1.png'
import imagen2 from '../assets/niños2.png'
import imagen3 from '../assets/niños3.png'
import imagen4 from '../assets/alcalde2.png'
import imagen5 from '../assets/alcalde3.png'  
import imagen6 from '../assets/alcalde1.png'

// Imágenes temporales: reemplazar cada `src` cuando estén disponibles los registros reales.
export const experiences = [
  {
    id: 'educacion-comunidad',
    category: 'Educación · Comunidad',
    title: 'Pequeñas manos, grandes aprendizajes',
    paragraphs: [
      'Recibimos la visita de niños y niñas para compartir una experiencia cercana con las plantas, conocer el vivero y aprender sobre la importancia de cuidar nuestro entorno.',
    ],
    images: [
      { src: imagen1, alt: 'Trabajo con plantas en el vivero; imagen temporal pendiente de reemplazo', position: '50% center' },
      { src: imagen2, alt: 'Interior del vivero; imagen temporal pendiente de reemplazo', position: '72% center' },
      { src: imagen3, alt: 'Plantas cultivadas; imagen temporal pendiente de reemplazo', position: '15% center' },
    ],
  },
  {
    id: 'comunidad-territorio',
    category: 'Comunidad · Territorio',
    title: 'Un vivero que crece junto a su comunidad',
    paragraphs: [
      'En el marco del Día de la Tierra, Vivero Los Pellines recibió una visita institucional junto a la alcaldesa de Valdivia, dando a conocer el trabajo que se desarrolla desde el sector rural.',
      'Una instancia que permitió visibilizar iniciativas vinculadas al cultivo de especies nativas, la restauración ecológica y el trabajo colaborativo en nuestros territorios.',
    ],
    images: [
      { src: imagen4, alt: 'Vista del vivero; imagen temporal pendiente de reemplazo', position: '58% center' },
      { src: imagen5, alt: 'Alcalde en el vivero; imagen temporal pendiente de reemplazo', position: '50% 50%' },
      { src: imagen6, alt: 'Actividad comunitaria en el vivero; imagen temporal pendiente de reemplazo', position: 'left' },
    ],
  },
]
