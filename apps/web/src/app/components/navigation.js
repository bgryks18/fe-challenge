import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles/navigation.module.scss';
const Navigation = () => {
  return (
    <div id={styles.navigation}>
      <div>
        <Link to="/">
          <Button className={styles.mainPage}>ANA SAYFA</Button>
        </Link>

        <Link to="/">
          <Button className={styles.newActivity}>YENİ HESAP HAREKETİ</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
