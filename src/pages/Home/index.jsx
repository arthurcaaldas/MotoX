import Header from "../../components/Header";
import Footer from "../../components/Footer"
import './Home.css'


const Home = () => {
  return (
    <body>
      <Header></Header>

      <main className="">
        <h2 className="text-center py-4">Tudo que sua moto precisa!</h2>
        <section className="cards pb-4">
          <article className="flex flex-direction-column justify-space-between">
              <div>
                <img src="src/assets/images/cards/technology.jpg" 
                  alt="imagem de manutencao de moto" />
                <h4 className="py-1">Serviços</h4>
                <p>
                  Utilizamos equipamentos de última geração para garantir o máximo 
                  de precisão, segurança e eficiência em cada serviço. Nossa 
                  tecnologia de ponta é aliada ao cuidado de profissionais 
                  especializados, assegurando que sua moto receba o melhor 
                  tratamento e fique pronta para qualquer desafio na estrada.
                </p>
              </div>
              <a className="pt-1 pb-2" href="">Leia mais</a>
            </article>

            <article className="flex flex-direction-column justify-space-between">
              <div>
                <img src="src/assets/images/cards/revision.jpg" 
                  alt="imagem de manutencao de moto" />
                <h4 className="py-1">Qualidade</h4>
                <p>
                  A qualidade dos nossos serviços é a prioridade absoluta. Com 
                  uma equipe altamente qualificada e comprometida, oferecemos 
                  um atendimento detalhado e rigoroso em cada etapa. Nossa 
                  missão é proporcionar confiança e satisfação total aos nossos 
                  clientes, garantindo que cada moto saia de nossas mãos em 
                  perfeitas condições para rodar com segurança e desempenho 
                  excepcionais.
                </p>
              </div>
              <a className="pt-1 pb-2" href="">Leia mais</a>
            </article>

            <article className="flex flex-direction-column justify-space-between">
              <div>
                <img src="src/assets/images/cards/maintenance.jpg" 
                  alt="imagem de manutencao de moto" />
                <h4 className="py-1">Peças e acessórios</h4>
                <p>
                Oferecemos uma seleção de peças e acessórios de alta qualidade, 
                cuidadosamente escolhidos para atender às necessidades de 
                desempenho, durabilidade e estilo de sua moto. Trabalhamos com 
                marcas confiáveis e produtos que garantem o máximo em segurança 
                e performance, para que você personalize e mantenha sua moto 
                sempre no seu melhor.
                </p>
              </div>
              <a className="pt-1 pb-2" href="">Leia mais</a>
            </article>

          </section>
      </main>

      <Footer></Footer>
    </body>
  )
}

export default Home
