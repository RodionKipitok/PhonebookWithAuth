import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './addContact/contactSlice';
import { filterReducer } from './filterContact/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer, // Редюсер для керування станом контактів
    filter: filterReducer, // Редюсер для керування станом фільтра
  },
});
