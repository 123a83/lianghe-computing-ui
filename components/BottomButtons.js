import { useState } from 'react'
import styles from '../styles/components/BottomButtons.module.css'

export default function BottomButtons() {
  const [showRechargeModal, setShowRechargeModal] = useState(false)

  const handleRecharge = () => {
    setShowRechargeModal(true)
  }

  const handleCloseModal = () => {
    setShowRechargeModal(false)
  }

  const handleRechargeAmount = (amount) => {
    // 这里实现充值逻辑
    alert(`充值 ${amount} 元，跳转到支付页面...`)
    setShowRechargeModal(false)
  }

  return (
    <>
      <div className={styles.bottomButtons}>
        <button className={styles.primaryBtn} onClick={handleRecharge}>
          <i className="fas fa-credit-card"></i>
          充值获取量值
        </button>
      </div>

      {/* 充值模态框 */}
      {showRechargeModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3>充值获取量值</h3>
              <button className={styles.closeBtn} onClick={handleCloseModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className={styles.modalBody}>
              <div className={styles.rechargeNotice}>
                <i className="fas fa-info-circle"></i>
                1元 = 1000量值，充值后立即到账
              </div>
              
              <div className={styles.amountGrid}>
                <button 
                  className={styles.amountBtn} 
                  onClick={() => handleRechargeAmount(10)}
                >
                  <div className={styles.amount}>¥10</div>
                  <div className={styles.value}>10,000量值</div>
                </button>
                
                <button 
                  className={styles.amountBtn} 
                  onClick={() => handleRechargeAmount(50)}
                >
                  <div className={styles.amount}>¥50</div>
                  <div className={styles.value}>50,000量值</div>
                  <div className={styles.tag}>推荐</div>
                </button>
                
                <button 
                  className={styles.amountBtn} 
                  onClick={() => handleRechargeAmount(100)}
                >
                  <div className={styles.amount}>¥100</div>
                  <div className={styles.value}>100,000量值</div>
                </button>
                
                <button 
                  className={styles.amountBtn} 
                  onClick={() => handleRechargeAmount(500)}
                >
                  <div className={styles.amount}>¥500</div>
                  <div className={styles.value}>500,000量值</div>
                  <div className={styles.tag}>优惠</div>
                </button>
              </div>
              
              <div className={styles.paymentMethods}>
                <div className={styles.methodTitle}>支付方式</div>
                <div className={styles.methodList}>
                  <div className={styles.method}>
                    <i className="fab fa-weixin"></i>
                    微信支付
                  </div>
                  <div className={styles.method}>
                    <i className="fab fa-alipay"></i>
                    支付宝
                  </div>
                  <div className={styles.method}>
                    <i className="fas fa-university"></i>
                    银行卡
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}