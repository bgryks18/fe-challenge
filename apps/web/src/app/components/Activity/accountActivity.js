import { useEffect } from 'react';
import styles from './styles/accountActivity.module.scss';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount, getCategories } from '../../actions/accountAction';
import ActivityList from './activityList';
import NotFound from '../notFound';
const AccountActivity = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const states = useSelector((state) => state.accountState);
  if (states.accounts.length < 1) {
    return <NotFound />;
  }
  useEffect(() => {
    dispatch(getAccount({ id: params.id }));
    dispatch(getCategories());
  }, []);
  return (
    <div id={styles.accountActivity}>
      {states.accountLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </Spinner>
      ) : states.accountLoading === null ? (
        <div>Yüklenirken bir hata oluştu.</div>
      ) : (
        <ActivityList account={states.account} id={params.id} />
      )}
    </div>
  );
};

export default AccountActivity;
