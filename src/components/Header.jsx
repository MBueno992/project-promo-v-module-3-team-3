import logoAdalab from '../images/logo-adalab.png';
import '../scss/layout/Header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__nav--div">
          <i className="fa-solid fa-laptop-code"></i>
          <p className="text">Proyectos Molones</p>
        </div>
        <a href="https://www.adalab.es/" className="header__nav--logo">
          <img src={logoAdalab} alt="adalab" />
        </a>
      </nav>

      <div className="header__title">
        <h1>Proyectos molones</h1>
        <h2>
          Escaparate en línea para recoger ideas a través de la tecnología
        </h2>
        <button className="header__title--new-btn">Nuevo proyecto</button>
        <button className="header__title--see-btn">Ver proyectos</button>
      </div>
    </header>
  );
}
export default Header;
