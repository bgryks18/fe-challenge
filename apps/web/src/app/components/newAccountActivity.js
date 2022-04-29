import React from 'react';
import { IoCloseSharp, IoCheckmarkSharp } from 'react-icons/io5';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const NewActivity = () => {
  const today = new Date();

  const schema = yup
    .object({
      activityDate: yup
        .date()
        .max(today, 'İleri tarihli hesap hareketi oluşturulamaz.')
        .nullable()
        .transform((curr, orig) => (orig === '' ? null : curr))
        .required('Bu alan zorunludur'),

      category: yup
        .string()
        .required('Bu alan zorunludur.')
        .notOneOf(['Seçiniz'], 'Bu alan zorunludur.'),

      amount: yup
        .number()
        .round('floor')
        .min(0, 'Tutar negatif olamaz.')
        .transform((value) => (isNaN(value) ? undefined : value))
        .nullable()
        .required('Lütfen geçerli bir tutar girin.'),

      description: yup.string().required('Bu alan zorunludur.'),
      activityType: yup
        .string()
        .nullable()
        .oneOf(['expense', 'income'], 'Lütfen seçim yapın.'),
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
        <h2>Yeni Hesap Hareketi Ekle</h2>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="formArea">
          <Row>
            <Col xs={4}>
              <Form.Label htmlFor="date">Tarih</Form.Label>
              <Form.Control
                type="date"
                {...register('activityDate')}
              ></Form.Control>
              {errors.activityDate?.message && (
                <p className="error">{errors.activityDate?.message}</p>
              )}
            </Col>
            <Col xs={4}>
              <Form.Label htmlFor="category">Kategori</Form.Label>
              <Form.Select {...register('category')} id="category">
                <option>Seçiniz</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </Form.Select>
              {errors.category?.message && (
                <p className="error">{errors.category?.message}</p>
              )}
            </Col>
            <Col xs={4}>
              <Form.Label htmlFor="amount">Tutar</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tutar"
                id="amount"
                {...register('amount')}
              />
              {errors.amount?.message && (
                <p className="error">{errors.amount?.message}</p>
              )}
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Form.Label>Açıklama</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Açıklama"
                {...register('description')}
              />
              {errors.description?.message && (
                <p className="error">{errors.description?.message}</p>
              )}
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
                value="income"
                id={`inline-radio-1`}
                {...register('activityType')}
              />
              <Form.Check
                inline
                label="GİDER"
                name="group1"
                type="radio"
                value="expense"
                id={`inline-radio-2`}
                {...register('activityType')}
              />
              {errors.activityType?.message && (
                <p className="error">{errors.activityType?.message}</p>
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

export default NewActivity;
