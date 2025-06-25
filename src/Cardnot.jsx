import './estiloscard.css';
import React from 'react';

function Cardnot({foto, texto}) {
    return (
        <div className='noticia'>
            <div className="fotografia">{foto}</div>
            <div className="textnot"><p>{texto}</p></div>
        </div>
            );
        }
export default Cardnot;        