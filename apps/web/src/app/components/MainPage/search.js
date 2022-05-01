import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Form, Button } from 'react-bootstrap';
import styles from './styles/search.module.scss';
import { IoAddSharp } from 'react-icons/io5';
import NewAccount from '../newAccount';
import { searchAccounts } from '../../actions/accountAction';
const Search = () => {
  const [newAccountModal, setNewAccountModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState({ keyw: '', type: '' });

  const dispatch = useDispatch();

  const switchAccountModal = () => {
    setNewAccountModal(!newAccountModal);
  };

  useEffect(() => {
    dispatch(searchAccounts(searchQuery));
  }, [searchQuery]);
  const setKeyword = (e) => {
    setSearchQuery((prev) => ({ keyw: e.target.value, type: prev.type }));
  };
  const setAccountType = (e) => {
    console.log(e.target.value);
    setSearchQuery((prev) => ({ keyw: prev.keyw, type: e.target.value }));
  };
  return (
    <div id={styles.search}>
      <div>
        <Form>
          <Form.Group id={styles.form}>
            <div>
              <Form.Label htmlFor="q">Arama</Form.Label>
              <Form.Control
                type="q"
                placeholder="Hesap No veya Hesap Adı İle Arayın..."
                id="q"
                onChange={setKeyword}
              />
            </div>

            <div>
              <Form.Label htmlFor="text">Hesap Tipi</Form.Label>
              <Form.Select onChange={setAccountType}>
                <option value="">Seçiniz</option>
                <option value="TRY">TL</option>
                <option value="DOVIZ">Döviz</option>
              </Form.Select>
            </div>
            <div>
              <br />
              <Button onClick={switchAccountModal}>
                <IoAddSharp className={styles.plus} />
                YENİ HESAP
              </Button>
              <Modal
                show={newAccountModal}
                onHide={switchAccountModal}
                dialogAs={NewAccount}
              />
            </div>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Search;
