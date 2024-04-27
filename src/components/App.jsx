import { PhonebookForm } from './Phonebook/AddСontactForm/Form';
import Filter from './Phonebook/Filter/Filter';
import Contacts from './Phonebook/Contact/Contacts';
import { fetchContacts } from '../redux/addContact/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PhonebookForm />
      <Filter />
      <Contacts />
    </>
  );
}

export default App;
