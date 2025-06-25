import './estilos.css';
import React from 'react';

function Partido({Titulo, Texto, Est, E1, E2, Fecha, bnt}) {
    return (
        <div className="partido">
            <div className='uno'><h2>{Titulo}</h2></div>
            <div className='dos'>{Texto}</div>
            <div className='est'>{Est}</div>
            <div className='tres'>{E1}</div>
            <div className='cuatro'>{E2}</div>
            <div className='cinco'>{Fecha}</div>
            <div className='bnt'>{bnt}</div>
        </div>
    );
}
export default Partido;