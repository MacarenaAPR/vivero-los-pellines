import { useEffect, useState } from 'react'
import { Icon } from './Icons'

const links = [
  ['Inicio', 'inicio'],
  ['Quiénes somos', 'nosotros'],
  ['Experiencias', 'experiencias'],
  ['Nuestro trabajo', 'nuestro-trabajo'],
  ['Galería', 'galeria'],
  ['Contacto', 'contacto'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <a className="brand" href="#inicio" aria-label="Vivero Los Pellines, ir al inicio">
        <span className="brand__mark"><Icon name="sprout" size={22}/></span>
        <span><strong>Los Pellines</strong><small>Vivero de campo</small></span>
      </a>
      <button className="menu-button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)}>
        <Icon name={open ? 'close' : 'menu'} />
      </button>
      <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Navegación principal">
        {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav__cta" href="https://wa.me/56912345678" target="_blank" rel="noreferrer">Escríbenos</a>
      </nav>
    </header>
  )
}
