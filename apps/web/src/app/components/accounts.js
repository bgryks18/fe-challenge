import React from 'react';
import styles from './styles/accounts.module.scss';
const Accounts = () => {
  return (
    <div id={styles.accounts}>
      <div id={styles.accountsArena}>
        <div className={`${styles.accountItem} ${styles.head}`}>
          <div></div>
          <div>HESAP ADI</div>
          <div>PARA BİRİMİ</div>
          <div>HESAP NO</div>
        </div>
        <div className={styles.accountItem}>
          <div>₺</div>
          <div>Super Hesap</div>
          <div>Türk Lirası</div>
          <div>434232323</div>
        </div>
        <div className={styles.accountItem}>
          <div>₺</div>
          <div>Super Hesap</div>
          <div>Türk Lirası</div>
          <div>434232323</div>
        </div>
        <div className={styles.accountItem}>
          <div>₺</div>
          <div>Super Hesap</div>
          <div>Türk Lirası</div>
          <div>434232323</div>
        </div>
        <div className={styles.accountItem}>
          <div>₺</div>
          <div>Super Hesap</div>
          <div>Türk Lirası</div>
          <div>434232323</div>
        </div>
        <div className={styles.accountItem}>
          <div>₺</div>
          <div>Super Hesap</div>
          <div>Türk Lirası</div>
          <div>434232323</div>
        </div>
        <div className={styles.accountItem}>
          <div>₺</div>
          <div>Super Hesap</div>
          <div>Türk Lirası</div>
          <div>434232323</div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
