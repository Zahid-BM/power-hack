import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './Components/HomePage/HomePage';
import Register from './Components/HomePage/Register';


function App() {
  return (
    <div>
      <ToastContainer />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
