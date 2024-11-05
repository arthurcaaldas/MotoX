// import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <img src="src\assets\images\logo-sem-fundo.png" width="200px" alt="logo marca" />
      <nav>
        <div>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">História</a>
            </li>
            <li>
              <a href="">Serviços</a>
            </li>
            <li>
              <a href="">Contatos</a>
            </li>
          </ul>

          <ul>
            <li>
              <a target="_blank" href="https://api.whatsapp.com/send/?phone=558288723172&text&type=phone_number&app_absent=0">
                <img src="src\assets\images\icons\icon-whatsapp.png" alt="icon whatsapp" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/motoxmcz/">
                <img src="src\assets\images\icons\icon-instagram.png" alt="icon instagram" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header