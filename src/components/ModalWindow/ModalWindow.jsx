import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalWindow = ({ title, isOpen, onClose, children }) => (
  <Modal show={isOpen} onHide={onClose} animation={false}>
    <Modal.Header>{title}</Modal.Header>
    <Modal.Body>{children}</Modal.Body>
  </Modal>
);

export default ModalWindow;
