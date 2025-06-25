import './estiloscal.css';
import React from 'react';

function Calendario({camp, fecha, e1, l1, hora, l2, e2, btn}) {
    return (
        <div className="calendario">
            <div className="camp">{camp}</div>
            <div className="fecha">{fecha}</div>
            <div className="equipo1">{e1}</div>
            <div className="logo1">{l1}</div>
            <div className="hora">{hora}</div>
            <div className="logo2">{l2}</div>
            <div className="equipo2">{e2}</div>
            <div className="boton">{btn}</div>
        </div>
    );
}

export default Calendario;