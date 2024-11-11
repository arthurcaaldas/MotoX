import './Footer.module.css';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className="p-2">
      <div className="container">
        <img className="mb-2" src="src\assets\images\motox.png" alt="logo marca" />

        <div className={styles.address}>
          <div className="mb-2">
            <h4>Endereço</h4>
            <p>Rua Alcídes Ramos de Lima, 65, Jacintinho </p>
            <p>Maceió-AL, 57041-020</p>
          </div>
          
          <div className="mb-2">
            <h4>Contato</h4>
            <p><span>Telefone:</span> (82) 98872-3172</p>
            <p><span>Email:</span> motoxmcz@gmail.com</p>
            <p><span>Instagram:</span> @motoxmcz</p>
          </div>

          <div className="flex justify-center mb-2">
            <ul className="flex flex-direction-column justify-space-between">
              <li>
                <a className="flex align-items-center mb-1" target="_blank" href="https://api.whatsapp.com/send/?phone=558288723172&text&type=phone_number&app_absent=0">
                  <img className="mr-05" src="src\assets\images\icons\icon-whatsapp.png" alt="icon whatsapp" />
                  <div>
                    <p>Fale conosco!</p>
                    <p>nosso whatsapp</p>
                  </div>
                </a>
              </li>
              <li>
                <a className="flex align-items-center" target="_blank" href="https://www.instagram.com/motoxmcz/">
                  <img className="mr-05" src="src\assets\images\icons\icon-instagram.png" alt="icon instagram" />                
                  <div>
                    <p>Siga-nos!</p>
                    <p>nosso instagram</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.rights}>
          <p>TODOS OS DIREITOS RESERVADOS &copy; MOTOX 2013&nbsp;</p>
          <p>- FEITO POR <a target="_blank" href="https://www.linkedin.com/in/arthurcaaldas/">ARTHUR CALDAS.</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer