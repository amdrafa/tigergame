
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import Modal from 'react-modal'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  Modal.setAppElement('#root');
  return (
    <BrowserRouter>
      <Router />
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
