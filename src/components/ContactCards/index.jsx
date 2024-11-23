import styles from './ContactCards.module.css';

const ContactCards = () => {
  return (
    <section className={`${styles.contactCards} ${"pt-5"}`}>
       <ul>
        <li className={`${"flex-direction-column justify-space-between"}`}>
          <div className={`${"text-center"}`}>
            <h4>Localização</h4>
            <p>Rua Alcídes Ramos de Lima, 65, Jacintinho</p>
            <p>Maceió-AL, 57041-020</p>
          </div>
          <img src="src/assets/images/icons/icon-loc.png" alt="" />
        </li>
        <li className={`${"flex-direction-column justify-space-between"}`}>
          <div className={`${"text-center"}`}>
            <h4>Siga no instagram</h4>
            <p>@Motoxmcz</p>
          </div>
          <img src="src/assets/images/icons/icon-instagram.png" alt="" />
        </li>
        <li className={`${"flex-direction-column justify-space-between"}`}>
          <div className={`${"text-center"}`}>
            <h4>Fale conosco</h4>
            <p>(082) 98872-3172</p>
          </div>
          <img src="src/assets/images/icons/icon-whatsapp.png" alt="" />
        </li>
        <li className={`${"flex-direction-column justify-space-between"}`}>
          <div className={`${"text-center"}`}>
            <h4>Curta no facebook</h4>
            <p>@Motoxmcz</p>
          </div>
          <img src="src/assets/images/icons/icon-facebook.png" alt="" />
        </li>
       </ul>
      </section>
  )
}

export default ContactCards