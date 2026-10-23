import { Icon } from './Icons'

export default function WorkAreaCard({ area }) {
  return (
    <article className="work-card">
      <div className="work-card__top">
        <span className="work-card__icon"><Icon name={area.icon} size={29}/></span>
        <span className="work-card__number">{area.number}</span>
      </div>
      <h3>{area.title}</h3>
      <p>{area.description}</p>
    </article>
  )
}
