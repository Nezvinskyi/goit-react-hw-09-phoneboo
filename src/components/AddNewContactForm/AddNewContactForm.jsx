import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

export default function AddNewContactForm({ toggleModal }) {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const [formData, setFormData] = useState({ name: '', number: '' });
  const { name, number } = formData;

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(contactsOperations.addContact({ name, number }));
    toggleModal();
    reset();
  };

  const reset = () => {
    setFormData({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3  form-floating">
        <input
          className="form-control"
          type="name"
          name="name"
          value={name}
          id="floatingName"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <label htmlFor="floatingName">Name</label>
      </div>
      <div className=" mb-3 form-floating">
        <input
          className="form-control"
          type="number"
          name="number"
          value={number}
          id="floatingNumber"
          placeholder="Number"
          onChange={handleChange}
          required
        />
        <label htmlFor="floatingNumber">Number</label>
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-secondary">
          Add contact
        </button>
        <button type="reset" onClick={toggleModal} className="btn btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  );
}
