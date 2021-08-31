import '../styles/Footer.styles.css'
import logoLight from '../assets/logo-light.svg'
import github from '../assets/icons/github-light.svg'
import twitter from '../assets/icons/twitter-light.svg'
import linkedin from '../assets/icons/linkedin-light.svg'
const Footer = () => (
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
)

export default Footer
