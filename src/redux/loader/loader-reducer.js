import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as authActions from '../auth/auth-actions';
import * as contactsActions from '../contacts/contacts-actions';

const loading = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.loginRequest]: () => true,
  [authActions.logoutRequest]: () => true,
  [authActions.getCurrentUserRequest]: () => true,

  [authActions.registerSuccess]: () => false,
  [authActions.loginSuccess]: () => false,
  [authActions.logoutSuccess]: () => false,
  [authActions.getCurrentUserSuccess]: () => false,

  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.logoutError]: () => false,
  [authActions.getCurrentUserError]: () => false,

  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.editContactRequest]: () => true,

  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.editContactSuccess]: () => false,

  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactError]: () => false,
  [contactsActions.editContactError]: () => false,
});

export default combineReducers({ loading });
