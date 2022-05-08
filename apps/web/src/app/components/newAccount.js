import { useState } from 'react';
import { IoCloseSharp, IoCheckmarkSharp } from 'react-icons/io5';
import { FcCheckmark } from 'react-icons/fc';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { toggleModal, postAccounts } from '../actions/accountAction';
const NewAccount = () => {
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const onHide = () => {
    dispatch(toggleModal());
  };
  const schema = yup
    .object({
      name: yup.string().required('Bu alan zorunludur.'),
      currency: yup
        .string()
        .required('Bu alan zorunludur.')
        .notOneOf([''], 'Bu alan zorunludur'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    dispatch(postAccounts({ data }));
    setSuccess(true);
  };
  return (
    <div id="specialModalBox">
      <div className="close" onClick={onHide}>
        <IoCloseSharp />
      </div>

      <div className="title">
        <h2>Yeni Hesap Ekle</h2>
      </div>
      {success ? (
        <p className="success">
          <FcCheckmark /> Ekleme başarılı.
        </p>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="formArea">
            <Row>
              <Col xs={6}>
                <Form.Label htmlFor="name">Hesap Adı</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Hesap Adı"
                  id="name"
                  {...register('name')}
                />
                {errors.name?.message && (
                  <p className="error">{errors.name?.message}</p>
                )}
              </Col>
              <Col xs={6}>
                <Form.Label htmlFor="currency">Hesap Tipi</Form.Label>
                <Form.Select {...register('currency')}>
                  <option value="">Seçiniz</option>
                  <option value="TRY">Türk Lirası</option>
                  <option value="GBP">İngiliz Sterlini</option>
                  <option value="USD">Amerikan Doları</option>
                </Form.Select>
                {errors.currency?.message && (
                  <p className="error">{errors.currency?.message}</p>
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

export default NewAccount;
