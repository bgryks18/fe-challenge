import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/accountActivity.module.scss';
import { Alert } from 'react-bootstrap';
import currencies from '../../utils/currencies';
import icons from 'currency-icons';
import Flag from 'react-world-flags';
import { getActivities } from '../../actions/accountAction';
import ActivityItem from './activityItem';
import ItemsPagination from '../pagination';

const ActivityList = ({ account, id }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activitesPerPage, setActivitesPerPage] = useState(4);

  const states = useSelector((state) => state.accountState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities({ id }));
  }, []);

  const getPerPage = useMemo(() => {
    return activitesPerPage;
  }, []);
  const getCurrentPage = useMemo(() => {
    return currentPage;
  }, []);
  const setPage = useCallback((pageNumber) => {
    return setCurrentPage(pageNumber);
  }, []);
  let flagCode = '';
  for (const [key, value] of Object.entries(currencies)) {
    if (key === account.currency) {
      flagCode = value;
    }
  }

  const indexOfLastActivity = currentPage * activitesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitesPerPage;
  const currentActivities = states.activities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );
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
            {currentActivities.map((activity) => (
              <ActivityItem
                key={activity.id}
                activity={activity}
                account={account}
              />
            ))}
          </div>
          <ItemsPagination
            perPage={getPerPage}
            totalItems={states.activities.length}
            setPage={setPage}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default ActivityList;
