import React from 'react';
import { IoCloseSharp, IoCheckmarkSharp } from 'react-icons/io5';
import { Row, Col, Form, Button } from 'react-bootstrap';
const NewActivity = () => {
  return (
    <div id="specialModalBox">
      <div className="close">
        <IoCloseSharp />
      </div>

      <div className="title">
        <h2>Yeni Hesap Hareketi Ekle</h2>
      </div>
      <div className="formArea">
        <Form>
          <Row>
            <Col xs={6} md={6}>
              <Form.Label htmlFor="q">Tarih</Form.Label>
              <Form.Control
                type="q"
                placeholder="Hesap No veya Hesap Adı İle Arayın..."
                id="q"
              />
            </Col>
            <Col xs={6} md={6}>
              <Form.Label htmlFor="text">Hesap Tipi</Form.Label>
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
          <Row>
            <Col xs={12} md={12}>
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Label>Hareket Türü</Form.Label>
            </Col>
            <Col xs={12}>
              <Form.Check
                inline
                label="GELİR"
                name="group1"
                type="radio"
                id={`inline-radio-1`}
              />
              <Form.Check
                inline
                label="GİDER"
                name="group1"
                type="radio"
                id={`inline-radio-2`}
              />
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

export default NewActivity;
