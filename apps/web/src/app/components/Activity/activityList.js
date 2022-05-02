import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/accountActivity.module.scss';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Alert } from 'react-bootstrap';
import currencies from '../../utils/currencies';
import icons from 'currency-icons';
import Flag from 'react-world-flags';
import { getActivities } from '../../actions/accountAction';
import ActivityItem from './activityItem';

const ActivityList = ({ account, id }) => {
  const states = useSelector((state) => state.accountState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities({ id }));
  }, []);
  let flagCode = '';
  for (const [key, value] of Object.entries(currencies)) {
    if (key === account.currency) {
      flagCode = value;
    }
  }
  return (
    <div>
      <div className={styles.accountInfo}>
        <div className={styles.accountFlag}>
          <Flag code={flagCode} fallback={<span>Unknown</span>} />
        </div>
        <div className={styles.accountDescription}>
          <span className={styles.accountName}>{account.name}</span>
          <span className={styles.accountDescription}>
            {account.accountNumber} {account.currency} (
            {icons[`${account.currency}`].symbol})
          </span>
        </div>
      </div>
      {states.activities.length === 0 ? (
        <Alert variant="warning" className="mt-2">
          Hiç hesap hareketi bulunamadı.
        </Alert>
      ) : (
        <>
          <div className={styles.activityListHeader}>
            <span className={styles.title}>Hesap Hareketleri</span>
            <span className={styles.results}>
              {states.activities.length} Sonuç
            </span>
          </div>
          <div className={styles.activityList}>
            {states.activities.map((activity) => (
              <ActivityItem
                key={activity.id}
                activity={activity}
                account={account}
              />
            ))}
          </div>
          <div className={styles.pagination}>
            <div className={styles.paginationItems}>
              <div className={`${styles.paginationItem} ${styles.move}`}>
                <IoIosArrowBack />
              </div>
              <div className={`${styles.paginationItem} ${styles.chosen}`}>
                1
              </div>
              <div className={styles.paginationItem}>2</div>
              <div className={styles.paginationItem}>3</div>
              <div className={styles.paginationItem}>4</div>
              <div className={`${styles.paginationItem} ${styles.move}`}>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityList;
