import './App.css';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/books.tsx';
import Category from './components/Category.tsx';
import NavigationBar from './components/NavigationBar';
import {store} from "./redux/store.ts";

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <h2>Web Final Lab </h2>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Navigate to="/book" />} />
          <Route path="/book" element={<Books />} />
          <Route path="/category" element={<Category/>} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
};

export default App;

