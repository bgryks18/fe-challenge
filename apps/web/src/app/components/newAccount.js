import React, { useState } from 'react';
import { IoCloseSharp, IoCheckmarkSharp } from 'react-icons/io5';
import { Row, Col, Form, Button } from 'react-bootstrap';
const NewAccount = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div id="specialModalBox">
      <div className="close">
        <IoCloseSharp />
      </div>

      <div className="title">
        <h2>Yeni Hesap Ekle</h2>
      </div>
      <div className="formArea">
        <Form>
          <Row>
            <Col xs={6}>
              <Form.Label htmlFor="accountName">Hesap Adı</Form.Label>
              <Form.Control
                type="text"
                placeholder="Hesap Adı"
                id="accountName"
              />
            </Col>
            <Col xs={6}>
              <Form.Label htmlFor="accountType">Hesap Tipi</Form.Label>
              <Form.Select>
                <option>Seçiniz</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </Form.Select>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="ok">
        <Button>
          <IoCheckmarkSharp />
          KAYDET
        </Button>
      </div>
    </div>
  );
};

export default NewAccount;
