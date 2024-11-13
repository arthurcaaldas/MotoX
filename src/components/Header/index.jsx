import { Link, useLocation } from "react-router-dom"
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="flex justify-center">
      <div className="flex justify-space-between">
        
        <Link to="/">
          <img width="100px" height="100px" src="src/assets/images/logo-sem-fundo.png" alt="logo marca" />
        </Link>

        <nav>
          <div>
            <ul>
              <li className={location.pathname === "/" ? `${styles.active}` : ""}>
                <Link to="/">Home</Link>
              </li>
              <li className={location.pathname === "/serviceParts" ? `${styles.active}` : ""}>
                <Link to="/serviceParts">Serviços</Link>
              </li>
              <li className={location.pathname === "/history" ? `${styles.active}` : ""}>
                <Link to="/history">História</Link>
              </li>
              <li className={location.pathname === "/contact" ? `${styles.active}` : ""}>
                <Link to="/contact">Contato</Link>
              </li>
            </ul>

            <ul className="flex">
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
        </nav>
      </div>
    </header>
  );
}

export default Header;