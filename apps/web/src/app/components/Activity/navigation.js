import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles/navigation.module.scss';
import { IoAddSharp, IoArrowBackOutline } from 'react-icons/io5';
import { Modal } from 'react-bootstrap';
import NewActivity from '../newAccountActivity';
const Navigation = () => {
  const [newActivityModal, setNewActivityModal] = useState(false);
  const switchActivityModal = () => {
    setNewActivityModal(!newActivityModal);
  };
  return (
    <div id={styles.navigation}>
      <div>
        <Link to="/">
          <Button className={styles.mainPage}>
            <IoArrowBackOutline />
            ANA SAYFA
          </Button>
        </Link>

        <Button className={styles.newActivity} onClick={switchActivityModal}>
          <IoAddSharp className={styles.plus} />
          YENİ HESAP HAREKETİ
        </Button>
        <Modal
          show={newActivityModal}
          onHide={switchActivityModal}
          dialogAs={NewActivity}
        />
      </div>
    </div>
  );
};

export default Navigation;
