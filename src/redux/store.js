import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const persistConfig = {
  key: 'contacts', 
  storage,
  whitelist: ['contacts'], 
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], 
        ignoredPaths: ['register'], 
      },
    }),
});

export const persistor = persistStore(store);

export default store;
