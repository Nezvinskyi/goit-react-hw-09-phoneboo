import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.contacts.filter;

export const getAllContacts = state => {
  return state.contacts.items;
};

export const getAllSortedContacts = createSelector([getAllContacts], contacts => {
  return [...contacts].sort((a, b) => a.name.localeCompare(b.name));
});

export const getFilteredSortedContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts
      .filter(({ name }) => name.toLowerCase().includes(normalizedFilter))
      .sort((a, b) => a.name.localeCompare(b.name));
  },
);
