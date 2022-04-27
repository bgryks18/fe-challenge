import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './styles/search.module.scss';
import { IoAddSharp } from 'react-icons/io5';
const Search = () => {
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
              />
            </div>

            <div>
              <Form.Label htmlFor="text">Hesap Tipi</Form.Label>
              <Form.Select>
                <option>Seçiniz</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </Form.Select>
            </div>
            <div>
              <br />
              <Button>
                <IoAddSharp className={styles.plus} />
                YENİ HESAP
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Search;
