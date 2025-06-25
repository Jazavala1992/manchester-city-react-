import './estilosrevive.css';
import React from 'react';

function Revive({Foto, Texto}) {
    return (
        <div className="revive">
            <div className='desc'><h4 style={{color:'skyblue'}}>{Texto}</h4></div>
            <div className='foto'>{Foto}</div>
        </div>
    );
}
export default Revive;