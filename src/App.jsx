import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Імпортуємо стилі для тостів
import store, { persistor } from './redux/store'; // Правильний імпорт
import ContactForm from './components/ContactForm/ContactForm'; // Ваш компонент ContactForm
import ContactList from './components/ContactList/ContactList'; // Ваш компонент ContactList
import SearchBox from './components/SearchBox/SearchBox'; // Ваш компонент SearchBox
import './App.module.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
          
          {/* Налаштування ToastContainer */}
          <ToastContainer
            position="top-right" // Позиція тостів
            autoClose={3000} // Час автоматичного закриття тосту (мс)
            hideProgressBar={false} // Показувати прогрес-бар
            newestOnTop={false} // Найновіші тости будуть на верху
            closeOnClick // Закриття при кліку на тост
            rtl={false} // Для праворуч налаштованих мов
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
