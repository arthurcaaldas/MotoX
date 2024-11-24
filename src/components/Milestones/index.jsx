import styles from './Milestones.module.css';

const Milestones = () => {
  return (
    <div className="pb-4">
      <section className={`${styles.milestones}`}>
       <ul>
        <li>
          <img src="src/assets/images/brands/motul.png" alt="" />
        </li>
        <li>
          <img src="src/assets/images/brands/mobil.png" alt="" />
        </li>
        <li>
          <img src="src/assets/images/brands/lubrax.png" alt="" />
        </li>
        <li>
          <img src="src/assets/images/brands/riffel.png" alt="" />
        </li>
        <li>
          <img src="src/assets/images/brands/norisk.png" alt="" />
        </li>
       </ul>
      </section>
    </div>
  )
}

export default Milestones