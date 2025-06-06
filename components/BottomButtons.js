import styles from '../styles/components/BottomButtons.module.css'

export default function BottomButtons() {
  const handleGetValue = () => {
    alert('获取量值功能')
  }

  const handleCustomerService = () => {
    alert('客服功能')
  }

  return (
    <div className={styles.bottomButtons}>
      <button className={styles.btnPrimary} onClick={handleGetValue}>
        <i className="fas fa-bolt"></i>
        获取量值
      </button>
      <button className={styles.btnSecondary} onClick={handleCustomerService}>
        <i className="fas fa-headset"></i>
      </button>
    </div>
  )
}