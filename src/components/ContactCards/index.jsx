import styles from './ContactCards.module.css';

const ContactCards = () => {
  return (
    <section className={`${styles.contactCards} ${"pt-5"}`}>
       <ul>
        <li className={`${"py-2 flex-direction-column justify-space-between"}`}>
          <a target="_blank" href="https://maps.app.goo.gl/L9rgDagt5HZvydhA7">
            <img src="src/assets/images/icons/icon-loc.png" alt="" />
          </a>
          <div className={`${"text-center"}`}>
            <h4>Localização</h4>
            <p>Rua Alcídes Ramos de Lima, 65, Jacintinho</p>
            <p>Maceió-AL, 57041-020</p>
          </div>
        </li>
        <li className={`${"flex-direction-column justify-space-between"}`}>
          <a target="_blank" href="https://www.instagram.com/motoxmcz/">
            <img src="src/assets/images/icons/icon-instagram.png" alt="" />
          </a>
          <div className={`${"text-center"}`}>
            <h4>Siga no instagram</h4>
            <p>@Motoxmcz</p>
          </div>
        </li>
        <li className={`${"py-2 flex-direction-column justify-space-between"}`}>
          <a target="_blank" href="https://api.whatsapp.com/send/?phone=558288723172&text&type=phone_number&app_absent=0">
            <img src="src/assets/images/icons/icon-whatsapp.png" alt="" />
          </a>
          <div className={`${"text-center"}`}>
            <h4>Fale conosco</h4>
            <p>(082) 98872-3172</p>
          </div>
        </li>
        <li className={`${"flex-direction-column justify-space-between"}`}>
          <a href="">
            <img src="src/assets/images/icons/icon-facebook.png" alt="" />
          </a>
          <div className={`${"text-center"}`}>
            <h4>Curta no facebook</h4>
            <p>@Motoxmcz</p>
          </div>
        </li>
       </ul>
      </section>
  )
}

export default ContactCards