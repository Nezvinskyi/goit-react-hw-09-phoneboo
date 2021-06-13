import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import './Filter.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllSortedContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  const handleChange = e => {
    dispatch(contactsOperations.changeFilter(e));
  };

  return (
    <>
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
        value={filter}
        onChange={handleChange}
      />
      <datalist id="datalistOptions">
        {contacts.map(({ id, name }) => (
          <option key={id} value={name} />
        ))}
      </datalist>
    </>
  );
};

export default Filter;
