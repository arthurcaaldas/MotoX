import styles from './Milestones.module.css';

const Milestones = () => {
  return (
    <div className="pb-4">
      <section className={`${styles.milestones}`}>
       <ul>
        <li>
          <img src="src/assets/images/workshop/oficina1.png" alt="" />
        </li>
        <li>
          <img src="src/assets/images/workshop/oficina2.png" alt="" />
        </li>
        <li>
          <img src="src/assets/images/workshop/oficina3.png" alt="" />
        </li>
        <li>
          <img src="src/assets/images/workshop/oficina4.png" alt="" />
        </li>
        <li>
          <img src="src/assets/images/workshop/oficina5.png" alt="" />
        </li>
       </ul>
      </section>
    </div>
  )
}

export default Milestones