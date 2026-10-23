import { Icon } from './Icons'

const links = [
  ['Inicio', 'inicio'],
  ['Quiénes somos', 'nosotros'],
  ['Experiencias', 'experiencias'],
  ['Nuestro trabajo', 'nuestro-trabajo'],
  ['Galería', 'galeria'],
  ['Contacto', 'contacto'],
]

export default function Footer() {
  return (
    <footer>
      <div className="shell footer__top">
        <a className="brand brand--footer" href="#inicio">
          <span className="brand__mark"><Icon name="sprout" size={22}/></span>
          <span><strong>Los Pellines</strong><small>Vivero de campo</small></span>
        </a>
        <p>Cultivando naturaleza, educación y comunidad.</p>
        <nav className="footer__links" aria-label="Navegación del pie de página">
          {links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
      </div>
      <div className="shell footer__bottom"><span>© 2026 Vivero Los Pellines</span><span>Hecho con calma en el sur de Chile</span></div>
    </footer>
  )
}
