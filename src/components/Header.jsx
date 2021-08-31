/* eslint-disable react/prop-types */
import '../styles/Header.styles.css'
import logo from '../assets/logo-dark.svg'
const Header = () => (
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
)

export default Header
