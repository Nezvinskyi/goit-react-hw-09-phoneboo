import React, { useState } from 'react';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';

const EditContactForm = ({ user, onEditContact, onClose }) => {
  const { id, name, number } = user;

  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const handleSubmit = e => {
    e.preventDefault();
    onEditContact(id, { name: newName, number: newNumber });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3  form-floating">
        <input
          className="form-control"
          type="name"
          name="newName"
          value={newName}
          id="floatingNewName"
          placeholder="Name"
          onChange={({ target: { value } }) => setNewName(value)}
          required
        />
        <label htmlFor="floatingNewName">Name</label>
      </div>
      <div className=" mb-3 form-floating">
        <input
          className="form-control"
          type="number"
          name="newNumber"
          value={newNumber}
          id="floatingNewNumber"
          placeholder="Number"
          onChange={({ target: { value } }) => setNewNumber(value)}
        />
        <label htmlFor="floatingNewNumber">Number</label>
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-secondary">
          Save
        </button>
        <button type="reset" onClick={onClose} className="btn btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = {
  onEditContact: contactsOperations.editContact,
};

export default connect(null, mapDispatchToProps)(EditContactForm);
