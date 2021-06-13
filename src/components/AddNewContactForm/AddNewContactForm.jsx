import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

class AddNewContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { name, number } = this.state;
    const { contacts, addContact, toggleModal } = this.props;

    event.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    addContact({ name, number });
    toggleModal();
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3  form-floating">
          <input
            className="form-control"
            type="name"
            name="name"
            value={this.state.name}
            id="floatingName"
            placeholder="Name"
            onChange={this.handleChange}
            required
          />
          <label htmlFor="floatingName">Name</label>
        </div>
        <div className=" mb-3 form-floating">
          <input
            className="form-control"
            type="number"
            name="number"
            value={this.state.number}
            id="floatingNumber"
            placeholder="Number"
            onChange={this.handleChange}
            required
          />
          <label htmlFor="floatingNumber">Number</label>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-secondary">
            Add contact
          </button>
          <button type="reset" onClick={this.props.toggleModal} className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = {
  addContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewContactForm);
