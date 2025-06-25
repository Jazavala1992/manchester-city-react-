import React from 'react';
import Ofertas from './Ofertas';
import Carrusel from './Carrusel';
import Footer from './Footer';

function Tienda()
{
    return(
        <div className="container" style={{paddingTop:'90px'}}>

            <div className="row" style={{padding:'20px'}}>
            <h1 style={{color:'skyblue', display:'flex', justifyContent:'flex-start', fontWeight:'bold', padding:'20px'}}>OFERTAS</h1>
           <Ofertas/>
            </div>
            <div className="row" style={{padding:'20px'}}>
            <h1 style={{color:'skyblue', display:'flex', justifyContent:'flex-start', fontWeight:'bold', padding:'30px'}}>COMPRAS POR JUGADORES</h1>
            <Carrusel/>
            </div>
            <Footer/>
        </div>
    );
}

export default Tienda;