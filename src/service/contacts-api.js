/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import './api-settings';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const editContact = async (id, contact) => {
  const { data } = await axios.patch(`/contacts/${id}`, contact);
  return data;
};

export const deleteContact = async id => {
  await axios.delete(`/contacts/${id}`);
};

export default { fetchContacts, addContact, editContact, deleteContact };
