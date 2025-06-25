
import Card from './Card.jsx';
import Footer from './Footer.jsx';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Partido from './Partido.jsx';
import Revive from './Revive.jsx';
import imagen from './img/ManCity.png';
import imagen2 from './img/Liverpool.png';
import imagen3 from './img/Chelsea.png';
import imagen4 from './img/Revive.webp';    

function Inicio ()
{
    return(
        <div className="container" style={{paddingTop:'90px'}}>
        <Card />
        <div className="row" >
            <div className="col">
            <Partido Titulo='PROXIMO PARTIDO' Texto='Viernes 13 de diciembre' Est='Etihad Stadium' E1={<img src={imagen} alt="Imagen" />}  E2={<img src={imagen2} alt="Imagen" />}  Fecha='19:00' bnt={<button>Comprar</button>}/>
            </div>
            <div className="col">
            <Partido Titulo='PROXIMO PARTIDO' Texto='Viernes 20 de diciembre' Est='Etihad Stadium' E1={<img src={imagen} alt="Imagen" />}  E2={<img src={imagen3} alt="Imagen" />}  Fecha='21:00' bnt={<button>Comprar</button>}/>
            </div>
        </div>

        <Revive Foto={<img src={imagen4} alt="Imagen" />} Texto='REVIVE LOS MEJORS MOMENTOS DE LA TEMPORADA'/>
        <Footer/>
        </div>
    );
    
}

export default Inicio;

