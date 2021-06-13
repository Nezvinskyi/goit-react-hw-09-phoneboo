import AddNewContactForm from '../components/AddNewContactForm';
import ContactList from '../components/ContactList';
import AddBtn from '../components/AddBtn';
import ModalWindow from '../components/ModalWindow';
import { useState } from 'react';

const ContactsView = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <>
      <ContactList />

      <AddBtn onClick={toggleModal} />
      <ModalWindow title="Add new contact" isOpen={showModal} onClose={toggleModal}>
        <AddNewContactForm toggleModal={toggleModal} />
      </ModalWindow>
    </>
  );
};

export default ContactsView;
