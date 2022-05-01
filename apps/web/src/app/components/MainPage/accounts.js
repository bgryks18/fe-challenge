import React, { useEffect, useState } from 'react';
import styles from './styles/accounts.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAccounts } from '../../actions/accountAction';
import AccountItem from './accountItem';

const Accounts = () => {
  const states = useSelector((state) => state.accountState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccounts());
  }, []);
  useEffect(() => {
    console.log(states);
  }, [states]);
  const emptyCells = [];
  if (states.accounts.length < 6) {
    for (let i = 1; i <= 6 - states.accounts.length; i++) {
      emptyCells.push(i);
    }
  }
  return (
    <div id={styles.accounts}>
      <div id={styles.accountsArena}>
        <div className={`${styles.accountItem} ${styles.head}`}>
          <div></div>
          <div>HESAP ADI</div>
          <div>PARA BİRİMİ</div>
          <div>HESAP NO</div>
        </div>
        {states.accounts.map((accountItem) => {
          return (
            <div className={styles.accountItem}>
              <AccountItem
                currency={accountItem.currency}
                accountNumber={accountItem.accountNumber}
                name={accountItem.name}
              />
            </div>
          );
        })}
        {emptyCells &&
          emptyCells.map(() => {
            return (
              <>
                <div className={styles.accountItem}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Accounts;
