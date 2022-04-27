import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles/navigation.module.scss';
import { IoAddSharp } from 'react-icons/io5';
const Navigation = () => {
  return (
    <div id={styles.navigation}>
      <div>
        <Link to="/">
          <Button className={styles.mainPage}>ANA SAYFA</Button>
        </Link>

        <Link to="/">
          <Button className={styles.newActivity}>
            <IoAddSharp className={styles.plus} />
            YENİ HESAP HAREKETİ
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
