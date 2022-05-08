import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoCloseSharp, IoCheckmarkSharp } from 'react-icons/io5';
import { FcCheckmark } from 'react-icons/fc';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCategories,
  postActivities,
  toggleModal,
} from '../actions/accountAction';

const NewActivity = () => {
  const [success, setSuccess] = useState(false);
  const states = useSelector((state) => state.accountState);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (states.categories.length === 0) {
      dispatch(getCategories());
    }
  }, []);
  const onHide = () => {
    dispatch(toggleModal());
  };
  const filteredIds = states.categories.map((item) => item.id.toString());
  const today = new Date();
  const schema = yup
    .object({
      createdAt: yup
        .date()
        .max(today, 'İleri tarihli hesap hareketi oluşturulamaz.')
        .nullable()
        .transform((curr, orig) => (orig === '' ? null : curr))
        .required('Bu alan zorunludur'),

      categoryId: yup
        .string()
        .required('Bu alan zorunludur.')
        .oneOf(filteredIds, 'Lütfen bir kategori seçin'),

      amount: yup
        .number()
        .required()
        .min(0, 'Tutar negatif olamaz.')
        .transform((value) => (isNaN(value) ? undefined : value))
        .nullable()
        .required('Lütfen geçerli bir tutar girin.'),

      description: yup.string().required('Bu alan zorunludur.'),
      type: yup.string().nullable().oneOf(['0', '1'], 'Lütfen seçim yapın.'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    const formData = {
      ...data,
      categoryId: parseInt(data.categoryId),
      type: parseInt(data.type),
      accountId: parseInt(params.id),
      createdAt: data.createdAt.toISOString(),
    };
    dispatch(postActivities({ data: formData }));
    setSuccess(true);
  };
  return (
    <div id="specialModalBox">
      <div className="close" onClick={onHide}>
        <IoCloseSharp />
      </div>

      <div className="title">
        <h2>Yeni Hesap Hareketi Ekle</h2>
      </div>
      {success ? (
        <p className="success">
          <FcCheckmark /> Ekleme başarılı.
        </p>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="formArea">
            <Row>
              <Col xs={4}>
                <Form.Label htmlFor="createdAt">Tarih</Form.Label>
                <Form.Control
                  type="date"
                  {...register('createdAt')}
                ></Form.Control>
                {errors.createdAt?.message && (
                  <p className="error">{errors.createdAt?.message}</p>
                )}
              </Col>
              <Col xs={4}>
                <Form.Label htmlFor="categoryId">Kategori</Form.Label>
                <Form.Select {...register('categoryId')} id="categoryId">
                  <option value="">Seçiniz</option>
                  {states.categories.map(({ id, name }) => (
                    <option value={id} key={id}>
                      {name}
                    </option>
                  ))}
                </Form.Select>
                {errors.categoryId?.message && (
                  <p className="error">{errors.categoryId?.message}</p>
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
                  value="1"
                  id={`inline-radio-1`}
                  {...register('type')}
                />
                <Form.Check
                  inline
                  label="GİDER"
                  name="group1"
                  type="radio"
                  value="0"
                  id={`inline-radio-2`}
                  {...register('type')}
                />
                {errors.type?.message && (
                  <p className="error">{errors.type?.message}</p>
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
      )}
    </div>
  );
};

export default NewActivity;
