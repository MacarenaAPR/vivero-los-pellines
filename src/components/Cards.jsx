import { Icon } from './Icons'

export function CategoryCard({ category }) {
  return (
    <a className="category-card" href="#productos">
      <span className="category-card__icon"><Icon name={category.icon} size={29}/></span>
      <span>{category.name}</span>
      <Icon name="arrow" size={19}/>
    </a>
  )
}

export function ProductCard({ product }) {
  const message = encodeURIComponent(`Hola, quisiera consultar por ${product.name}.`)
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} style={{ objectPosition: `${product.position} center` }}/>
        <span className={product.availability === 'Pocas unidades' ? 'stock stock--low' : 'stock'}>{product.availability}</span>
      </div>
      <div className="product-card__body">
        <div><h3>{product.name}</h3><p>{product.detail}</p></div>
        <div className="product-card__bottom"><strong>{product.price}</strong><a href={`https://wa.me/56935395789?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label={`Consultar por ${product.name}`}><Icon name="arrow" size={18}/></a></div>
      </div>
    </article>
  )
}

export function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <img src={article.image} alt="" style={{ objectPosition: `${article.position} center` }}/>
      <div className="article-card__body">
        <div className="article-card__meta"><span>{article.tag}</span><span><Icon name="clock" size={14}/>{article.readTime}</span></div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href="#contacto">Leer consejo <Icon name="arrow" size={17}/></a>
      </div>
    </article>
  )
}
