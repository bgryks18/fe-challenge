import { useRef } from 'react';
import { Toast } from 'react-bootstrap';
import { FcHighPriority } from 'react-icons/fc';
const ErrorItem = ({ errorItem }) => {
  const toastItem = useRef(null);
  const close = () => {
    toastItem.current.innerHTML = '';
  };
  return (
    <Toast
      show={true}
      style={{ position: 'relative', right: 0, top: 0 }}
      onClose={close}
      className="errorBox"
      ref={toastItem}
    >
      <Toast.Header className="errorBoxHeader">
        <strong className="me-auto">{errorItem.errorTitle}</strong>
        <small>{errorItem.errorCode}</small>
      </Toast.Header>
      <Toast.Body>
        <p>
          <FcHighPriority /> &nbsp;
          {errorItem.errorContent}
        </p>
      </Toast.Body>
    </Toast>
  );
};

export default ErrorItem;
