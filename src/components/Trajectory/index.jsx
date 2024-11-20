import styles from './Trajectory.module.css';

const Trajectory = () => {
 
  return (
    <section className={`${styles.trajectory}`}>
      <h2 className={`${"py-2 px-3 text-center"}`}>Conheça nossa História!</h2>
      <p className={`${"pb-2 px-2"}`}>
        A Moto X peças e serviços surgiu em 2013 com a missão de atender o mercado 
        no segmento de serviços para motocicletas, comercializando produtos e 
        prestando serviços, atendendo, além das principais marcas: Honda, Yamaha e 
        Suzuki, uma variedade de outras marcas e seus modelos.
      </p>
      <p className={`${"pb-2 px-2"}`}>
        A Moto X peças e serviços foi fundada por Adalberto Santos, que sempre foi 
        um entusiasta por motocicletas, e é um profissional com vasta experiência 
        no mercado, além da sua expertise, a empresa conta com uma equipe 
        qualificada de profissionais, que focam em desempenhar seus trabalhos para 
        garantir a satisfação dos clientes. Ao longo do tempo, a Moto X peças e 
        serviços foi se aprimorando e hoje conta com uma estrutura completa para 
        poder realizar variados tipos de serviços para motocicletas de diversos 
        portes.
      </p>
      <p className={`${"pb-2 px-2"}`}>
        Desde sua inauguração, a empresa localiza-se na rua Alcides Ramos de Lima, 
        no bairro do Jacintinho, em Maceió, um dos principais locais de referência 
        do segmento de serviços para motocicletas na cidade. São mais de 10 anos de 
        história, atendendo e satisfazendo clientes e sempre buscando melhoria e 
        inovação.
      </p>
    </section>
  );
};

export default Trajectory;