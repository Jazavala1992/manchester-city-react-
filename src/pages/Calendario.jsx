import FechaP from '../components/FechaP';
import imagen from '../assets/images/img/ManCity.png';
import imagen1 from '../assets/images/img/Liverpool.png';
import imagen2 from '../assets/images/img/champions.webp';
import imagen3 from '../assets/images/img/premiere.webp';
import imagen4 from '../assets/images/img/Chelsea.png';
import imagen5 from '../assets/images/img/barcelona.png';
import imagen6 from '../assets/images/img/psg.png';
import imagen7 from '../assets/images/img/juve.png';
import imagen8 from '../assets/images/img/everton.png';
import imagen9 from '../assets/images/img/astonvilla.png';
import imagen10 from '../assets/images/img/arsenal.png';
import imagen11 from '../assets/images/img/porto.png';
import imagen12 from '../assets/images/img/fulham.png';
import imagen13 from '../assets/images/img/newcastle.png';
import imagen14 from '../assets/images/img/Munited.png';
import imagen15 from '../assets/images/img/tottemham.png';
import Footer from '../components/Footer.jsx';


function Calendario() {
  return (
    <div className="container" style={{paddingTop:'90px'}}>
      <h1 style={{color:'skyblue', display:'flex', justifyContent:'flex-start', fontWeight:'bold'}}>Diciembre 2024</h1>
      <FechaP camp={<img src={imagen2} alt="" />} fecha='Champions League Viernes 13 Diciembre' e1='Manchester City' l1={<img src={imagen} alt="" />} hora='17:00' l2={<img src={imagen5}alt="" />} e2='Barcelona' btn={<button>Comprar</button>}/>
      <FechaP camp={<img src={imagen3} alt="" />} fecha='Premiere League Viernes 20 Diciembre' e1='Manchester City' l1={<img src={imagen} alt="" />} hora='21:00' l2={<img src={imagen4} alt="" />} e2='Chelsea' btn={<button>Comprar</button>}/>
      <FechaP camp={<img src={imagen3} alt="" />} fecha='Premiere League Viernes 27 Diciembre' e1='Manchester City' l1={<img src={imagen} alt="" />} hora='19:00' l2={<img src={imagen1} alt="" />} e2='Liverpool' btn={<button>Comprar</button>}/>
      <h1 style={{color:'skyblue', display:'flex', justifyContent:'flex-start', fontWeight:'bold'}}>Enero 2025</h1>
      <FechaP camp={<img src={imagen3} alt="" />} fecha='Premiere League Viernes 3 Enero' e1='Manchester Cityf' l1={<img src={imagen} alt="" />} hora='21:00' l2={<img src={imagen8} alt="" />} e2='Eveton' btn={<button>Comprar</button>}/>
      <FechaP camp={<img src={imagen3} alt="" />} fecha='Premiere League Viernes 10 Enero' e1='Manchester Cityf' l1={<img src={imagen} alt="" />} hora='18:00' l2={<img src={imagen9} alt="" />} e2='Aston Villa' btn={<button>Comprar</button>}/>
      <FechaP camp={<img src={imagen2} alt="" />} fecha='Champions League Viernes 17 Enero' e1='Manchester Cityf' l1={<img src={imagen} alt="" />} hora='13:00' l2={<img src={imagen6} alt="" />} e2='París Saint-Germain' btn={<button>Comprar</button>}/>
      <FechaP camp={<img src={imagen3} alt="" />} fecha='Premiere League Viernes 21 Enero' e1='Manchester Cityf' l1={<img src={imagen} alt="" />} hora='20:00' l2={<img src={imagen10} alt="" />} e2='Arsenal' btn={<button>Comprar</button>}/>
      <h1 style={{color:'skyblue', display:'flex', justifyContent:'flex-start', fontWeight:'bold'}}>Febrero 2025</h1>
      <FechaP camp={<img src={imagen3} alt="" />} fecha='Premiere League Viernes 10 Febrero' e1='Manchester Cityf' l1={<img src={imagen} alt="" />} hora='18:00' l2={<img src={imagen12} alt="" />} e2='Fulham' btn={<button>Comprar</button>}/>
      <FechaP camp={<img src={imagen3} alt="" />} fecha='Premiere League Viernes 17 Febrero' e1='Manchester Cityf' l1={<img src={imagen} alt="" />} hora='18:00' l2={<img src={imagen13} alt="" />} e2='NewCastke' btn={<button>Comprar</button>}/>
      <FechaP camp={<img src={imagen2} alt="" />} fecha='Champions League Viernes 24 Febrero' e1='Manchester Cityf' l1={<img src={imagen} alt="" />} hora='20:00' l2={<img src={imagen7} alt="" />} e2='Juevntus' btn={<button>Comprar</button>}/>
      <h1 style={{color:'skyblue', display:'flex', justifyContent:'flex-start', fontWeight:'bold'}}>Marzo 2025</h1>
      <FechaP camp={<img src={imagen3} alt="" />} fecha='Premiere League Viernes 9 Marzo' e1='Manchester Cityf' l1={<img src={imagen} alt="" />} hora='22:00' l2={<img src={imagen14} alt="" />} e2='Manchester United' btn={<button>Comprar</button>}/>
      <FechaP camp={<img src={imagen3} alt="" />} fecha='Premiere League Viernes 16 Marzo' e1='Manchester Cityf' l1={<img src={imagen} alt="" />} hora='21:00' l2={<img src={imagen15} alt="" />} e2='Tottenham' btn={<button>Comprar</button>}/>
      <FechaP camp={<img src={imagen2} alt="" />} fecha='Champions League Viernes 23 Marzo' e1='Manchester Cityf' l1={<img src={imagen} alt="" />} hora='19:00' l2={<img src={imagen11} alt="" />} e2='Porto FC' btn={<button>Comprar</button>}/>
      <Footer/>
    </div>
  );
}
export default Calendario;