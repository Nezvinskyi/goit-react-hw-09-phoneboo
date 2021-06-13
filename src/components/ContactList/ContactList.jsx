import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import CallBtn from '../CallBtn/CallBtn';
import DeleteBtn from '../DeleteBtn';
import EditBtn from '../EditBtn';
import ModalWindow from '../ModalWindow';
import EditContactForm from '../EditContactForm';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getFilteredSortedContacts);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <table className="table table-striped table-hover ">
        <thead className="table-secondary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col" style={{ textAlign: 'center', width: '160px' }}>
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, name, number }, idx) => (
            <tr key={id} className="align-middle">
              <th scope="row">{idx + 1}</th>
              <td>{name}</td>
              <td>{number}</td>
              <td>
                {
                  <>
                    <CallBtn number={number} />
                    <EditBtn
                      onClick={() => {
                        toggleModal();
                        setCurrentUser({ id, name, number });
                      }}
                    />
                    <DeleteBtn
                      id={id}
                      onDeleteContact={() => dispatch(contactsOperations.deleteContact(id))}
                    />
                  </>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalWindow title="Edit contact" isOpen={showModal} onClose={toggleModal}>
        <EditContactForm user={currentUser} onClose={toggleModal} />
      </ModalWindow>
    </>
  );
}
