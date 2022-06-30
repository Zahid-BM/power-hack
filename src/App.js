import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './Components/HomePage/HomePage';


function App() {
  return (
    <div>
      <ToastContainer />
      <HomePage />
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
