import './App.css'

import setaDown from './assets/icons/down-arrows.svg'
import homepageProfile from './assets/home/image-homepage-profile.jpg'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => (
  <div>
    <Header />
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
    <Footer />
  </div>
)

export default App
