import styles from './styles/accountActivity.module.scss';
import icons from 'currency-icons';
import moment from 'moment';

moment.locale('tr');
const getDay = (date) => {
  return moment(date).format('DD');
};
const getMonth = (date) => {
  return moment(date).format('MMMM');
};

const ActivityItem = ({ activity, account }) => {
  return (
    <div className={styles.activityListItem} key={activity.id}>
      <div>
        <span className={styles.day}>{getDay(activity.createdAt)}</span>
        <span className={styles.month}>{getMonth(activity.createdAt)}</span>
      </div>
      <div>
        <div className={styles.info}>
          <span className={styles.process}>{activity.description}</span>
          <span className={styles.place}>{activity.categoryId}</span>
        </div>
        <div className={styles.spending}>
          <span className={`${activity.type === 0 ? styles.spent : ''}`}>
            {' '}
            {activity.type === 0 ? '-' : '+'}
            {activity.amount} {icons[`${account.currency}`].symbol}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
