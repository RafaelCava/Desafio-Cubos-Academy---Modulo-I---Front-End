import './App.css'
import logo from './assets/logo-dark.svg'
import setaDown from './assets/icons/down-arrows.svg'
import homepageProfile from './assets/home/image-homepage-profile.jpg'
import logoLight from './assets/logo-light.svg'
import github from './assets/icons/github-light.svg'
import twitter from './assets/icons/twitter-light.svg'
import linkedin from './assets/icons/linkedin-light.svg'

function App() {
  return (
    <div>
      <header>
        <div className="logo"><img src={logo} alt="logo-dark" /></div>
        <div className="menu">
          <nav>
            <ul>
              <li><a className="home" href="/pages/home/index.html">home</a></li>
              <li><a href="/pages/portfolio/index.html">portfolio</a></li>
              <li><a href="/pages/contato/index.html">contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="boxes">
          <div className="box">
            <h1>Olá, me chamo Alex Spencer e eu amo construir websites lindos</h1>
            <button href="#sobre-mim"><span><img src={setaDown} alt="arrows" /></span>sobre mim</button>
          </div>
        </div>
      </section>
      <section className="sobre-mim" id='sobre-mim'>
        <div className="box-img box-sobre">
          <img src={homepageProfile} alt="profile" />
        </div>
        <div className="box-texto box-sobre">
          <h1>Sobre mim</h1>
          <p>Sou um desenvolvedor front-end júnior procurando por uma oportunidade. Eu foco em escrever HTML acessível, usando práticas modernas de CSS e escrevendo um JavaScript limpo. Quando estou escrevendo código JavaScript, na maioria das vezes estou usando React, mas posso me adapta para qualquer ferramenta se necessário. Moro em Londres, UK, mas também seria feliz trabalhando remotamente e tenho experiência em times remotos. Quando não estou codando, poderá me achar fora de casa. Eu adoro estar próximo a natureza seja para uma caminhada, corrida ou ciclismo. Eu amaria se você desse uma olhada no meu trabalho.</p>
          <div className="link-box">
            <a href="/pages/portfolio/index.html" className="ctn">ir para portfolio</a>
          </div>
        </div>
      </section>
      <section className="interessado">
        <h1>Interessado em fazer projetos comigo?</h1>
        <a href="/pages/contato/index.html" className="ctn">contato</a>
      </section>
      <footer>
        <div className="logo-footer"><img src={logoLight} alt="logo-light" /></div>
        <div className="menu-footer">
          <nav>
            <ul>
              <li><a href="/pages/home/index.html">home</a></li>
              <li><a href="/pages/portfolio/index.html">portfolio</a></li>
              <li><a href="/pages/contato/index.html">contato</a></li>
            </ul>
          </nav>
        </div>
        <div className="social-media">
          <a href="/"><img src={github} alt="github" /></a>
          <a href="/"><img src={twitter} alt="twitter" /></a>
          <a href="/"><img src={linkedin} alt="linkedin" /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
