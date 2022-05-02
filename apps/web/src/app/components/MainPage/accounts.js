import React, { useEffect, useDeferredValue } from 'react';
import styles from './styles/accounts.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import AccountItem from './accountItem';
import { getAccounts } from '../../actions/accountAction';
import { Link } from 'react-router-dom';
const Accounts = () => {
  const states = useSelector((state) => state.accountState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccounts());
  }, []);
  const dAccounts = useDeferredValue(states.accounts);
  const emptyCells = [];
  if (states.accounts.length < 6) {
    for (let i = 1; i <= 6 - states.accounts.length; i++) {
      emptyCells.push(i);
    }
  }
  return (
    <div id={styles.accounts}>
      {states.accountsLoading ? (
        'Yükleniyor'
      ) : (
        <div id={styles.accountsArena}>
          <div className={`${styles.accountItem} ${styles.head}`}>
            <div></div>
            <div>HESAP ADI</div>
            <div>PARA BİRİMİ</div>
            <div>HESAP NO</div>
          </div>
          {dAccounts &&
            dAccounts.map((accountItem, i) => {
              return (
                <Link
                  className={styles.accountItem}
                  key={accountItem.id}
                  to={`Activity/${accountItem.id}`}
                >
                  <AccountItem
                    currency={accountItem.currency}
                    accountNumber={accountItem.accountNumber}
                    name={accountItem.name}
                  />
                </Link>
              );
            })}
          {emptyCells &&
            emptyCells.map((item, index) => {
              return (
                <div
                  className={`${styles.accountItem} ${styles.empty}`}
                  key={index}
                >
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Accounts;
