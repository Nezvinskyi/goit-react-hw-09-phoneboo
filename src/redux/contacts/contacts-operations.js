import api from '../../service/contacts-api';
import * as actions from './contacts-actions';

export const addContact = contact => async dispatch => {
  dispatch(actions.addContactRequest());

  try {
    const data = await api.addContact(contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

export const editContact = (id, contact) => async dispatch => {
  dispatch(actions.editContactRequest());

  try {
    const data = await api.editContact(id, contact);
    dispatch(actions.editContactSuccess(data));
  } catch (error) {
    dispatch(actions.editContactError(error));
  }
};

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());
  try {
    const data = await api.fetchContacts();
    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await api.deleteContact(id);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};

export const changeFilter =
  ({ target: { value } }) =>
  dispatch => {
    dispatch(actions.changeFilter(value));
  };
