import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${"flex justify-center"}`}>
      <div className={`${styles.header}`}>
        <div className={`${"flex justify-space-between align-items-center px-3"}`}>
          
          <Link to="/">
            <img className={`${styles.logo} ${"py-1"}`} src="src/assets/images/logo-sem-fundo.png" alt="logo marca" />
          </Link>

          {/* Ícone do menu hambúrguer com classe `open` condicional */}
          <div 
            className={`${styles.hamburgerIcon} ${isMenuOpen ? styles.open : ""}`} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
            <div className={`${""}`}>
              <ul>
                <li className={location.pathname === "/" ? `${styles.active}` : ""}>
                  <Link to="/" onClick={toggleMenu}>Home</Link>
                </li>
                <li className={location.pathname === "/serviceParts" ? `${styles.active}` : ""}>
                  <Link to="/serviceParts" onClick={toggleMenu}>Serviços</Link>
                </li>
                <li className={location.pathname === "/history" ? `${styles.active}` : ""}>
                  <Link to="/history" onClick={toggleMenu}>História</Link>
                </li>
                <li className={location.pathname === "/contact" ? `${styles.active}` : ""}>
                  <Link to="/contact" onClick={toggleMenu}>Contato</Link>
                </li>
              </ul>

              <div>
                <ul className={`${"flex justify-center"}`}>
                  <li>
                    <a target="_blank" href="https://api.whatsapp.com/send/?phone=558288723172&text&type=phone_number&app_absent=0">
                      <img src="src/assets/images/icons/icon-whatsapp.png" alt="icon whatsapp" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.instagram.com/motoxmcz/">
                      <img src="src/assets/images/icons/icon-instagram.png" alt="icon instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;