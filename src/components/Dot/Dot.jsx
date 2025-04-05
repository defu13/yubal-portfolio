import styles from './Dot.module.css'

function Dot() {
  return (
    <div className={`${styles.dot} shadow-custom dark:bg-neutral-100 bg-[#232323]`}></div>
  )
}

export default Dot