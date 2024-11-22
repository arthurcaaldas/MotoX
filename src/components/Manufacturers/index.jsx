import styles from './Manufacturers.module.css';

const Manufacturers = () => {
  return (
    <div className="pb-4">
      <h2 className="text-center pb-1 px-2">Trabalhamos com marcas reconhecidas</h2>
      <section className={`${styles.manufacturers}`}>
       <ul>
        <li>
          <img src="src/assets/images/brands/honda.png" alt="" />
        </li>
        <li>
          <img src="src/assets/images/brands/yamaha.png" alt="" />
        </li>
        <li>
          <img src="src/assets/images/brands/suzuki.png" alt="" />
        </li>
        <li>
          <img src="src/assets/images/brands/kawasaki.png" alt="" />
        </li>
       </ul>
      </section>
    </div>
  )
}

export default Manufacturers