import './estiloseq.css';
import React from 'react';

function Jugador({foto, nombre, apellido}) {
    return (
        <div className='jugador'>
            <div className="fotos">{foto}</div>
            <div className="nombre"><h3>{nombre}</h3></div>
            <div className="apellido"><h3>{apellido}</h3></div>
        </div>
    );
}

export default Jugador;