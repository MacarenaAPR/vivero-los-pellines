import Header from './components/Header'
import Footer from './components/Footer'
import SectionTitle from './components/SectionTitle'
import WorkAreaCard from './components/WorkAreaCard'
import ExperienceCard from './components/ExperienceCard'
import GalleryItem from './components/GalleryItem'
import { Icon } from './components/Icons'
import { experiences } from './data/experiences'
import { galleryItems } from './data/gallery'
import heroImage from './assets/hero.png'
import aboutImage from './assets/trabajando-tierra.png'

const workAreas = [
  {
    number: '01',
    title: 'Cultivo de especies',
    description: 'Trabajo y cuidado desarrollado desde nuestro vivero, respetando los procesos y tiempos de la naturaleza.',
    icon: 'sprout',
  },
  {
    number: '02',
    title: 'Educación ambiental',
    description: 'Acercamos la naturaleza y sus procesos a nuevas generaciones mediante experiencias de aprendizaje.',
    icon: 'education',
  },
  {
    number: '03',
    title: 'Comunidad',
    description: 'Generamos espacios de encuentro, participación y colaboración junto a nuestro entorno.',
    icon: 'community',
  },
  {
    number: '04',
    title: 'Territorio',
    description: 'Contribuimos al cuidado y valoración del entorno rural y su patrimonio natural.',
    icon: 'territory',
  },
]

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="inicio" style={{ '--hero-image': `url(${heroImage})` }}>
          <div className="hero__grain" />
          <div className="hero__content">
            <span className="hero__kicker">Desde Los Pellines para nuestra comunidad</span>
            <h1>Cultivando<br/>un mejor <em>mañana</em></h1>
            <p>Un vivero nacido desde la comunidad, donde cultivamos especies y experiencias que fortalecen nuestro vínculo con la naturaleza y el territorio.</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#nuestro-trabajo">Conoce nuestro trabajo <Icon name="arrow" size={19}/></a>
              <a className="text-link text-link--light" href="#nosotros">Nuestra historia</a>
            </div>
          </div>
          <div className="hero__note"><Icon name="sprout" size={20}/><span>Cultivo local<br/><strong>con manos y paciencia</strong></span></div>
          <a className="hero__scroll" href="#nosotros" aria-label="Bajar a quiénes somos"><span>Descubre</span><i/></a>
        </section>

        <section className="story" id="nosotros">
          <div className="story__image">
            <img src={aboutImage} alt="Manos trabajando con plantas y tierra en un vivero" loading="lazy"/>
          </div>
          <div className="story__content">
            <SectionTitle light eyebrow="Vivero Los Pellines" title="Cultivamos más que plantas" />
            <p className="story__lead">Vivero Los Pellines es una iniciativa ubicada en el sector rural de Los Pellines, que nace desde el trabajo colaborativo y el compromiso con nuestro entorno.</p>
            <p>A través del cultivo, las actividades educativas y el trabajo junto a la comunidad, buscamos aportar al cuidado del medioambiente y acercar la naturaleza a niños, familias y nuestro territorio.</p>
            <div className="story__values">
              <span><strong>01</strong><b>Naturaleza</b><small>Cuidado y valoración de nuestro entorno.</small></span>
              <span><strong>02</strong><b>Educación</b><small>Experiencias para aprender desde la naturaleza.</small></span>
              <span><strong>03</strong><b>Comunidad</b><small>Trabajo colaborativo desde Los Pellines.</small></span>
            </div>
          </div>
        </section>

        <section className="experiences" id="experiencias">
          <div className="shell">
            <SectionTitle
              eyebrow="Experiencias"
              title="Experiencias que nos conectan"
              text="El vivero también es un espacio de encuentro, aprendizaje y colaboración. Cada visita y actividad nos permite compartir el valor de la naturaleza y fortalecer los vínculos con nuestro territorio."
            />
            <div className="experiences__list">
              {experiences.map((experience, index) => (
                <ExperienceCard key={experience.id} experience={experience} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="work" id="nuestro-trabajo">
          <div className="shell">
            <SectionTitle
              eyebrow="Lo que hacemos"
              title="Nuestro trabajo"
              text="Desde Los Pellines desarrollamos un trabajo conectado con la naturaleza, la educación y nuestra comunidad."
            />
            <div className="work-grid">
              {workAreas.map(area => <WorkAreaCard key={area.number} area={area}/>)}
            </div>
          </div>
        </section>

        <section className="gallery shell" id="galeria">
          <SectionTitle
            eyebrow="Registros"
            title="Momentos que dejan huella"
            text="Una mirada a las experiencias, encuentros y actividades que forman parte de la historia de Vivero Los Pellines."
          />
          <div className="gallery-grid">
            {galleryItems.map(item => <GalleryItem key={item.id} item={item}/>)}
          </div>
        </section>

        <section className="contact" id="contacto">
          <div className="shell contact__grid">
            <div>
              <span className="eyebrow">Contacto</span>
              <h2>Sigamos cultivando <em>juntos</em></h2>
              <p>¿Quieres conocer Vivero Los Pellines, coordinar una visita o conversar sobre posibles actividades y colaboraciones? Escríbenos.</p>
              {/* TODO: validar el número definitivo de WhatsApp antes de publicar. */}
              <a className="button button--whatsapp" href="https://wa.me/56935395789?text=Hola%20Vivero%20Los%20Pellines%2C%20quisiera%20conversar%20sobre%20una%20visita%20o%20colaboraci%C3%B3n." target="_blank" rel="noreferrer">Conversemos <Icon name="arrow" size={20}/></a>
            </div>
            <div className="contact__details">
              <div className="contact-item"><Icon name="phone"/><div><small>WhatsApp</small><strong>Escríbenos</strong><span>Consultas, visitas y colaboraciones</span></div></div>
              {/* TODO: validar la cuenta de Instagram y convertirla en enlace definitivo. */}
              <div className="contact-item"><Icon name="instagram"/><div><small>Instagram</small><strong>@viverolospellines</strong><span>Novedades y registros del vivero</span></div></div>
              <div className="contact-item"><Icon name="pin"/><div><small>Nos encuentras en</small><strong>Los Pellines · Valdivia</strong><span>Región de Los Ríos, Chile</span></div></div>
              <div className="contact-item"><Icon name="clock"/><div><small>Visitas</small><strong>Previa coordinación</strong><span>Conversemos para preparar tu visita</span></div></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
