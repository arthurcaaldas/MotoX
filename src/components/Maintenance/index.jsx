import styles from './Maintenance.module.css';

const maintenance = () => {
  return (
    <section className={styles.maintenance}>

      <h1 className="py-3 text-center">Serviços</h1>
      <div className={styles.bege400}>
        <div>
          <h2 className={`${styles.title} ${"text-center py-3 mb-2"}`}>Manutenção</h2>
          <div className="pb-4">
            <h4 className={`${"text-center mb-2 px-3"}`}>
              Fazemos todo o tipo de manutenção entre elas: Troca de óleo, peças, 
              acessórios, manutenção em motores e carburadores.
            </h4>
            <ul>
              <li>
                <img src="src/assets/images/services/1.jpg" alt="" />
              </li>
              <li>
                <img src="src/assets/images/services/2.jpg" alt="" />
              </li>
              <li>
                <img src="src/assets/images/services/3.jpg" alt="" />
              </li>
              <li>
                <img src="src/assets/images/services/4.jpg" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={` ${'my-1'}`}>
        <h2 className={`${styles.title} ${"text-center py-3 mb-2"}`}>Injeção Eletrônica</h2>
        <div className="pb-4">
          <h4 className={`${"text-center mb-2 px-3"}`}>
            Possuímos aparelhos para efetuar a limpeza, diagnostico e correção de 
            erros de sua motocicleta.
          </h4>
          <ul>
            <li>
              <img src="src/assets/images/services/9.jpg" alt="" />
            </li>
            <li>
              <img src="src/assets/images/services/10.jpg" alt="" />
            </li>
            <li>
              <img src="src/assets/images/services/11.jpg" alt="" />
            </li>
            <li>
              <img src="src/assets/images/services/12.jpg" alt="" />
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bege400}>
        <h2 className={`${styles.title} ${"text-center py-3 mb-2"}`}>Revisões Gerais</h2>
        <div className="pb-4">
          <h4 className={`${"text-center mb-2 px-3"}`}>
            Possuímos referência de qualidade em nossas revisões, onde é feita a 
            verificação e manutenção completa de sua motocicleta. O que é feito na 
            revisão?
          </h4>
          <ul>
            <li className='flex flex-direction-column'>
              <img className='pb-1' src="src/assets/images/services/5.jpg" alt="" />
              <p>Troca de óleo das bengalas</p>
              <p>Engraxamento da caixa de direção</p>
              <p>Troca de fluido de freios</p>
              <p>Lixamento das lonas e cubos</p>
              <p>Engraxamento de Balança</p>
            </li>
            <li className='flex flex-direction-column'>
              <img className='pb-1' src="src/assets/images/services/6.jpg" alt="" />
              <p>Revisão carburador/Corpo e Bico</p>
              <p>Revisão de sensores e atuadores</p>
              <p>Regulagem Válvulas</p>
              <p>Engraxamento dos manetes</p>
              <p>Lubrificação dos cabos</p>
            </li>
            <li className='flex flex-direction-column'>
              <img className='pb-1' src="src/assets/images/services/7.jpg" alt="" />
              <p>Regulagem de corrente</p>
              <p>Engraxamento dos pedais</p>
              <p>Aperto dos parafusos do motor</p>
              <p>Calibragem de pneus</p>
              <p>Avaliação da parte elétrica</p>
            </li>
            <li className='flex flex-direction-column'>
              <img className='pb-1' src="src/assets/images/services/8.jpg" alt="" />
              <p>Avaliação de desempenho</p>
              <p>Engraxamento dos rolamentos</p>
              <p>Engraxamento dos eixos</p>
              <p>Limpeza geral</p>
              <p>Verificação de iluminação</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default maintenance