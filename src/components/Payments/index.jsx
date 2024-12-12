import './Payments.module.css';
import styles from './Payments.module.css';

const Payments = () => {
  return (
    <section className='flex justify-center mt-3'>
      <div className={`${styles.payment}`}>
        <div>
          <h2 className='text-center px-3'>Agende sua revisão hoje!</h2 >
          <p className='text-center px-3 mb-4'>
            Não espere mais para garantir a segurança e o desempenho da sua moto! 
            Agende agora mesmo sua revisão conosco e mantenha sua máquina sempre 
            pronta para qualquer jornada. Confie em nossa equipe de especialistas 
            e cuide do seu veículo com quem entende do assunto. Venha fazer a 
            diferença na vida útil da sua moto e viaje tranquilo!
          </p>
        </div>
        
        <div className={`${'flex justify-center relative'}`}>
          <a className={`${'p-05 absolute'}`} href="">Aproveite a oportunidade</a>
        </div>
        <div>
          <div className={`${'flex justify-center'}`}>
            <div className={`${styles.price} ${'flex py-2 px-1 justify-center'}`}>
              <div className={`${'flex align-items-center'}`}>
                <div className={`${styles.text1} ${'text-center'}`}>
                  <div>Revisões</div>
                  <div>A partir de</div>
                </div>
              </div>
              <div className="flex">
                <div className={`${styles.text2}`}>R$ 99</div>
                <div className={`${styles.text3}`}>,90</div>
              </div>
            </div>
          </div>
          <div className={`${'flex justify-center relative'}`}>
            <ul className={`${'flex justify-space-evenly absolute'}`}>
              <li>
                <img className='' src="src/assets/images/payments/visa.png" alt="" />
              </li>
              <li>
                <img className='' src="src/assets/images/payments/mastercard.png" alt="" />
              </li>
              <li>
                <img className='' src="src/assets/images/payments/hipercard.png" alt="" />
              </li>
              <li>
                <img className='' src="src/assets/images/payments/elo.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payments