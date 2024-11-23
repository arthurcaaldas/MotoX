import styles from './Map.module.css';

const Map = () => {
  return (
    <div className={`${"flex justify-center py-3"}`}>
        <iframe className={`${styles.iframe}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.4394395920967!2d-35.72360862515892!3d-9.643441090444483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145952db2d819%3A0x63953b3da7925685!2sMOTO%20X%20pe%C3%A7as%20e%20servi%C3%A7os!5e0!3m2!1spt-BR!2sbr!4v1732362785969!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map