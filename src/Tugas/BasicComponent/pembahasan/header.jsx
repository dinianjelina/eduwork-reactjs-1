import logo from '../../img/dinianjelina.jpg';
import './style.css';

function Header() {
  return (
    <div className="Header">
      <header className="Header-section">
        <h1>Profil Pribadi</h1>
        <img src={logo} className="Header-logo" alt="dinianjelina" />
        <p>
          Dini Anjelina
          <br />
          Pengusaha || Web Programmer
        </p>
        <a className="Header-link" href="https://www.instagram.com/dinianjelina_/" target="_blank" rel="noopener noreferrer">
          dinianjelina
        </a>
      </header>
    </div>
  );
}

export default Header;
