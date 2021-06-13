import { connect } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import './Filter.scss';

const Filter = ({ contacts, filter, onChange }) => (
  <>
    <input
      className="form-control"
      list="datalistOptions"
      id="exampleDataList"
      placeholder="Type to search..."
      value={filter}
      onChange={onChange}
    />
    <datalist id="datalistOptions">
      {contacts.map(({ id, name }) => (
        <option key={id} value={name} />
      ))}
    </datalist>
  </>
);

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
  contacts: contactsSelectors.getAllSortedContacts(state),
});

const mapDispatchToProps = {
  onChange: contactsOperations.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
