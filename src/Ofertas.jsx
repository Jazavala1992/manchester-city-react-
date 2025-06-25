import './estilostienda.css';
import React from 'react';
import imagen from './img/2.png';
import imagen2 from './img/3.webp';
import imagen3 from './img/4.webp';

function Ofertas()
{
    return(

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src={imagen} alt="Logo" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Toalla grande</h5>
                            <p className="card-text">El diseño se destaca por un logo de PUMA Cat contrastante y el escudo del Manchester City.</p>
                            <a href="#" className="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={imagen2} alt="Logo" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Zapatillas PUMA x Man City Palermo 0161</h5>
                            <p className="card-text"> Estas zapatillas capturan la esencia del Manchester City</p>
                            <a href="#" className="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={imagen3} alt="Logo" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Sudadera para Adultos</h5>
                            <p className="card-text">Esta icónica prenda de aficionado está diseñada para mantenerte abrigado,</p>
                            <a href="#" className="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>

    );

}
export default Ofertas;
