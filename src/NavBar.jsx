import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState } from 'react';
import Noticias from './noticias';
import Inicio from './Inicio';
import Calendario from './Calendario';
import Tienda from './Tienda';
import Equipo from './Equipo';
import Historia from './Historia';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  NavbarBrand,
} from 'reactstrap';

function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed='top' full fluid expand='xl' >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" tabs fill pills fluid style={{ height: '100px', backgroundColor: '#a0c4ec', alignItems:'center', justifyContent:'center'}} >
          <NavItem>
          <NavbarBrand href="" style={{padding:'50px', margin:'40px'}}>
                <img
                src="https://es.mancity.com/dist/images/logos/crest.svg"
                alt="Logo"
                style={{ height: '80px' }}/>
            </NavbarBrand>
        </NavItem>
        <NavItem>
        <NavLink>
          <Link to="/" style={{ textDecoration: 'none', color: 'darkslategrey' }}>Inicio</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to="/Noticias" style={{ textDecoration: 'none', color: 'darkslategrey' }}>Noticias</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to="/Historia" style={{ textDecoration: 'none', color: 'darkslategrey' }}>Historia del equipo</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to="/Tienda" style={{ textDecoration: 'none', color: 'darkslategrey' }}>Tienda onLine</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to="/Equipo" style={{ textDecoration: 'none', color: 'darkslategrey' }}>Nuestro equipo</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to="/Calendario" style={{ textDecoration: 'none', color: 'darkslategrey' }}>Calendario</Link>
        </NavLink>
      </NavItem>
      <NavItem>
          <NavbarBrand href="/" style={{padding:'45px', margin:'35px'}}>
                <img
                src="https://es.mancity.com/dist/images/logos/crest.svg"
                alt="Logo"
                style={{ height: '80px' }}/>
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





