import React from 'react';
import styles from './styles/accountActivity.module.scss';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Flag from 'react-world-flags';
const AccountActivity = () => {
  return (
    <div id={styles.accountActivity}>
      <div>
        <div className={styles.accountInfo}>
          <div className={styles.accountFlag}>
            <Flag code="tr" fallback={<span>Unknown</span>} />
          </div>
          <div className={styles.accountDescription}>
            <span className={styles.accountName}>Super Hesap</span>
            <span className={styles.accountDescription}>
              122980 Türk Lirası (₺)
            </span>
          </div>
        </div>
        <div className={styles.activityListHeader}>
          <span className={styles.title}>Hesap Hareketleri</span>
          <span className={styles.results}>22 Sonuç</span>
        </div>
        <div className={styles.activityList}>
          <div className={styles.activityListItem}>
            <div>
              <span className={styles.day}>12</span>
              <span className={styles.month}>KASIM</span>
            </div>
            <div>
              <span className={styles.process}>Magiclick Market Alışveriş</span>
              <span className={styles.place}>Market</span>
            </div>
          </div>
          <div className={styles.activityListItem}>
            <div>
              <span className={styles.day}>12</span>
              <span className={styles.month}>KASIM</span>
            </div>
            <div>
              <span className={styles.process}>Magiclick Market Alışveriş</span>
              <span className={styles.place}>Market</span>
            </div>
          </div>
          <div className={styles.activityListItem}>
            <div>
              <span className={styles.day}>12</span>
              <span className={styles.month}>KASIM</span>
            </div>
            <div>
              <span className={styles.process}>Magiclick Market Alışveriş</span>
              <span className={styles.place}>Market</span>
            </div>
          </div>
          <div className={styles.activityListItem}>
            <div>
              <span className={styles.day}>12</span>
              <span className={styles.month}>KASIM</span>
            </div>
            <div>
              <span className={styles.process}>Magiclick Market Alışveriş</span>
              <span className={styles.place}>Market</span>
            </div>
          </div>
        </div>
        <div className={styles.pagination}>
          <div className={styles.paginationItems}>
            <div className={`${styles.paginationItem} ${styles.move}`}>
              <IoIosArrowBack />
            </div>
            <div className={`${styles.paginationItem} ${styles.chosen}`}>1</div>
            <div className={styles.paginationItem}>2</div>
            <div className={styles.paginationItem}>3</div>
            <div className={styles.paginationItem}>4</div>
            <div className={`${styles.paginationItem} ${styles.move}`}>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountActivity;
