import React, { useState } from 'react';
import { IoCloseSharp, IoCheckmarkSharp } from 'react-icons/io5';
import { Row, Col, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const NewActivity = () => {
  const [startDate, setStartDate] = useState(new Date());
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
            <Col xs={4}>
              <Form.Label htmlFor="date">Tarih</Form.Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control"
                id="date"
              />
            </Col>
            <Col xs={4}>
              <Form.Label htmlFor="category">Kategori</Form.Label>
              <Form.Select>
                <option>Seçiniz</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </Form.Select>
            </Col>
            <Col xs={4}>
              <Form.Label htmlFor="category">Tutar</Form.Label>
              <Form.Control type="text" placeholder="Tutar" id="amount" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Form.Label>Açıklama</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Açıklama" />
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
