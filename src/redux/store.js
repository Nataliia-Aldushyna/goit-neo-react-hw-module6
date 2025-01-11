import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // локальне сховище
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const persistConfig = {
  key: 'contacts', // ключ для збереження в локальному сховищі
  storage,
  whitelist: ['contacts'], // зберігаємо тільки список контактів
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
  // Додаємо serializableCheck для ігнорування несеріалізованих значень
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // ігноруємо дію persist
        ignoredPaths: ['register'], // виключаємо register
      },
    }),
});

export const persistor = persistStore(store);

export default store;
