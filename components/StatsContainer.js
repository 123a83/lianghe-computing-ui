import styles from '../styles/components/StatsContainer.module.css'

export default function StatsContainer() {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statCard}>
        <div className={styles.label}>
          <i className="fas fa-user"></i>
          个人有效量值
        </div>
        <div className={styles.value}>
          x<span className={styles.unit}>k</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{width: '65%'}}></div>
        </div>
      </div>
      
      <div className={styles.statCard}>
        <div className={styles.label}>
          <i className="fas fa-globe"></i>
          个人总量值
        </div>
        <div className={styles.value}>
          x<span className={styles.unit}>k</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{width: '85%'}}></div>
        </div>
      </div>
    </div>
  )
}