export default function ExperienceCard({ experience, index }) {
  const dark = index % 2 === 1

  return (
    <article className={`experience-card ${dark ? 'experience-card--dark experience-card--reverse' : ''}`}>
      <div className="experience-card__media">
        {experience.images.map((image, imageIndex) => (
          <figure className={imageIndex === 0 ? 'experience-card__main-image' : 'experience-card__secondary-image'} key={`${experience.id}-${imageIndex}`}>
            <img src={image.src} alt={image.alt} style={{ objectPosition: image.position }} loading="lazy"/>
            {imageIndex === 0 && <figcaption>Registro fotografico del evento</figcaption>}
          </figure>
        ))}
      </div>
      <div className="experience-card__content">
        <span className="experience-card__number">0{index + 1}</span>
        <span className="experience-card__category">{experience.category}</span>
        <h3>{experience.title}</h3>
        {experience.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}

      </div>
    </article>
  )
}
