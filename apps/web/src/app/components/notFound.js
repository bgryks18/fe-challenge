import { Alert } from 'react-bootstrap';
import { FcHighPriority } from 'react-icons/fc';
const NotFound = () => {
  return (
    <div className="pageError">
      <div className="pageError">
        <Alert variant="danger">
          <FcHighPriority /> 404 Not Found
        </Alert>
      </div>
    </div>
  );
};

export default NotFound;
