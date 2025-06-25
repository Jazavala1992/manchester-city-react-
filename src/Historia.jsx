import React from 'react';
import Footer from './Footer';
import Acordion from './Acordion';
import Revive from './Revive';
import imagen from './img/1.webp';

function Historia ()
{
    return(
        <div className="container" style={{paddingTop:'90px'}}>
            <h1 style={{color:'skyblue', display:'flex', justifyContent:'flex-start', fontWeight:'bold'}}>HISTORIA DEL EQUIPO</h1>
            <Acordion/>
            <Revive Foto={<img src={imagen} alt="" />}  Texto='Together: 4-In-A-Row
'/>
            <Footer/>
        </div>
    );
    
}

export default Historia;