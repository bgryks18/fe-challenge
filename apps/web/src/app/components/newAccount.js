import React, { useState } from 'react';
import { IoCloseSharp, IoCheckmarkSharp } from 'react-icons/io5';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const NewAccount = () => {
  const schema = yup
    .object({
      accountName: yup.string().required('Bu alan zorunludur.'),
      accountType: yup
        .string()
        .required('Bu alan zorunludur.')
        .notOneOf(['Seçiniz'], 'Bu alan zorunludur'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);
  return (
    <div id="specialModalBox">
      <div className="close">
        <IoCloseSharp />
      </div>

      <div className="title">
        <h2>Yeni Hesap Ekle</h2>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="formArea">
          <Row>
            <Col xs={6}>
              <Form.Label htmlFor="accountName">Hesap Adı</Form.Label>
              <Form.Control
                type="text"
                placeholder="Hesap Adı"
                id="accountName"
                {...register('accountName')}
              />
              {errors.accountName?.message && (
                <p className="error">{errors.accountName?.message}</p>
              )}
            </Col>
            <Col xs={6}>
              <Form.Label htmlFor="accountType">Hesap Tipi</Form.Label>
              <Form.Select {...register('accountType')}>
                <option>Seçiniz</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </Form.Select>
              {errors.accountType?.message && (
                <p className="error">{errors.accountType?.message}</p>
              )}
            </Col>
          </Row>
        </div>
        <div className="ok">
          <Button type="submit">
            <IoCheckmarkSharp />
            KAYDET
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewAccount;
