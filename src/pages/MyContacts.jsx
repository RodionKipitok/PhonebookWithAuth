import { PhonebookForm } from 'components/Phonebook/AddСontactForm/Form';
import Filter from 'components/Phonebook/Filter/Filter';
import Contacts from 'components/Phonebook/Contact/Contacts';
export function MyContact() {
  return (
    <>
      <PhonebookForm />
      <Filter />
      <Contacts />
    </>
  );
}
