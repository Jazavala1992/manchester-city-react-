import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar.jsx';
import Card from './card.jsx';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div className="container">
    <NavBar/>
  </div>
</BrowserRouter>,

)
