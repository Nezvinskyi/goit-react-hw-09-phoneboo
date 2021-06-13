import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/contacts-operations';
import { contactsSelectors } from '../../redux/contacts';
import CallBtn from '../CallBtn/CallBtn';
import DeleteBtn from '../DeleteBtn';
import EditBtn from '../EditBtn';
import ModalWindow from '../ModalWindow';
import EditContactForm from '../EditContactForm';

class ContactList extends Component {
  state = {
    showModal: false,
    currentUser: {},
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  setCurrentUser = user => {
    this.setState({ currentUser: user });
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <>
        <table className="table table-striped table-hover ">
          <thead className="table-secondary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col" style={{ width: '160px' }}>
                Handle
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
                          this.toggleModal();
                          this.setCurrentUser({ id, name, number });
                        }}
                      />
                      <DeleteBtn id={id} onDeleteContact={onDeleteContact} />
                    </>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ModalWindow title="Edit contact" isOpen={this.state.showModal} onClose={this.toggleModal}>
          <EditContactForm user={this.state.currentUser} onClose={this.toggleModal} />
        </ModalWindow>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredSortedContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
