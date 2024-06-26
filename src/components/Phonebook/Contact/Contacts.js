import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from '../../../redux/filterContact/selector';
import { getContacts } from '../../../redux/addContact/selector';
import { deleteContact } from '../../../redux/addContact/operations';
import '../Contact/contact.css';

export default function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const filteredItems = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <h2 className="titleContact">Contacts</h2>
      <ul className="list">
        {filteredItems.map(contact => (
          <li className="contactItem" key={contact.id}>
            {contact.name} {contact.number}{' '}
            <button
              className="btnContact"
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
