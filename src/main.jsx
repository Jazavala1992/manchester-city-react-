import { createRoot } from 'react-dom/client'
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar/>
  </BrowserRouter>,

)
