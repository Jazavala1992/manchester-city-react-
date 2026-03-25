
import Card from '../components/Card.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Partido from '../components/Partido.jsx';
import Revive from '../components/Revive.jsx';
import imagen from '../assets/images/img/ManCity.png';
import imagen2 from '../assets/images/img/Liverpool.png';
import imagen3 from '../assets/images/img/Chelsea.png';
import imagen4 from '../assets/images/img/Revive.webp';    

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

