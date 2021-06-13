import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalWindow = ({ title, isOpen, onClose, children }) => {
  return (
    <Modal show={isOpen} onHide={onClose} animation={false}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {/* <Modal.Footer>This is the footer</Modal.Footer> */}
    </Modal>
  );
};

export default ModalWindow;
