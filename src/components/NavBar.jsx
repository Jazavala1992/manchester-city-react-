import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Noticias from '../pages/Noticias';
import Inicio from '../pages/Inicio';
import Calendario from '../pages/Calendario';
import Tienda from '../pages/Tienda';
import Equipo from '../pages/Equipo';
import Historia from '../pages/Historia';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from 'reactstrap';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="main-navbar" fixed='top' expand='xl' style={{ width: '100%', left: 0, right: 0, padding: 0, backgroundColor: '#a0c4ec' }}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="main-navbar-nav w-100 me-auto" tabs fill pills fluid style={{ minHeight: '80px', alignItems:'center', justifyContent:'center', flexWrap: 'wrap', gap: '2px', padding: '6px 8px'}} >
          <NavItem className="main-nav-item">
          <NavbarBrand className="main-brand" href="" style={{padding:'10px', margin:'6px'}}>
                <img
                src="https://es.mancity.com/dist/images/logos/crest.svg"
                alt="Logo"
                style={{ height: '56px' }}/>
            </NavbarBrand>
        </NavItem>
        <NavItem className="main-nav-item">
        <NavLink className="main-navlink">
          <Link className="main-navlink-text" to="/">Inicio</Link>
        </NavLink>
      </NavItem>
      <NavItem className="main-nav-item">
        <NavLink className="main-navlink">
          <Link className="main-navlink-text" to="/Noticias">Noticias</Link>
        </NavLink>
      </NavItem>
      <NavItem className="main-nav-item">
        <NavLink className="main-navlink">
          <Link className="main-navlink-text" to="/Historia">Historia del equipo</Link>
        </NavLink>
      </NavItem>
      <NavItem className="main-nav-item">
        <NavLink className="main-navlink">
          <Link className="main-navlink-text" to="/Tienda">Tienda onLine</Link>
        </NavLink>
      </NavItem>
      <NavItem className="main-nav-item">
        <NavLink className="main-navlink">
          <Link className="main-navlink-text" to="/Equipo">Nuestro equipo</Link>
        </NavLink>
      </NavItem>
      <NavItem className="main-nav-item">
        <NavLink className="main-navlink">
          <Link className="main-navlink-text" to="/Calendario">Calendario</Link>
        </NavLink>
      </NavItem>
      <NavItem className="main-nav-item">
          <NavbarBrand className="main-brand" href="/" style={{padding:'10px', margin:'6px'}}>
                <img
                src="https://es.mancity.com/dist/images/logos/crest.svg"
                alt="Logo"
            style={{ height: '56px' }}/>
            </NavbarBrand>
      </NavItem>  
          </Nav>
        </Collapse>
      </Navbar>
      <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/Noticias" element={<Noticias></Noticias>} />
          <Route path="/Historia" element={<Historia/>} />
          <Route path="/Tienda" element={<Tienda/>} />
          <Route path="/Equipo" element={<Equipo/>} />
          <Route path="/Calendario" element={<Calendario></Calendario>} />
        </Routes>
    </div>
  );
}

export default NavBar;





