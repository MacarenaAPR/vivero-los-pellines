export default function GalleryItem({ item }) {
  return (
    <figure className={`gallery-item gallery-item--${item.layout}`}>
      <img src={item.image} alt={item.alt} style={{ objectPosition: item.position }} loading="lazy"/>
      <figcaption>
        <span>{item.category}</span>
        <p>{item.caption}</p>
      </figcaption>
    </figure>
  )
}
