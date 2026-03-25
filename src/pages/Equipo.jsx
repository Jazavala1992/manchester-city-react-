import Jugador from '../components/Jugador';
import Footer from '../components/Footer';
import imagen from '../assets/images/jug/1.png';
import imagen2 from '../assets/images/jug/2.png';
import imagen3 from '../assets/images/jug/3.png';
import imagen4 from '../assets/images/jug/4.png';
import imagen5 from '../assets/images/jug/5.png';
import imagen6 from '../assets/images/jug/6.png';
import imagen7 from '../assets/images/jug/7.png';
import imagen8 from '../assets/images/jug/8.png';
import imagen9 from '../assets/images/jug/9.png';
import imagen10 from '../assets/images/jug/10.png';
import imagen11 from '../assets/images/jug/11.png';
import imagen12 from '../assets/images/jug/12.png';
import imagen13 from '../assets/images/jug/13.png';
import imagen14 from '../assets/images/jug/14.png';
import imagen15 from '../assets/images/jug/15.png';
import imagen16 from '../assets/images/jug/16.png';
import imagen17 from '../assets/images/jug/17.png';
import imagen18 from '../assets/images/jug/18.png';
import imagen19 from '../assets/images/jug/19.png';
import imagen20 from '../assets/images/jug/20.png';
import imagen21 from '../assets/images/jug/21.png';
import imagen22 from '../assets/images/jug/22.png';
import imagen23 from '../assets/images/jug/23.png';
import imagen24 from '../assets/images/jug/24.png';
import imagen25 from '../assets/images/jug/25.png';
import imagen26 from '../assets/images/jug/26.png';
import imagen27 from '../assets/images/jug/27.png';

function Equipo ()
{
    return(
 <div className="container" style={{paddingTop:'90px'}}>
        <div className="row">
        <h1 style={{color:'skyblue', display:'flex', justifyContent:'flex-start', fontWeight:'bold'}}>PORTEROS</h1>
            <div className="col">
            <Jugador foto={<img src={imagen} alt="" />} nombre='SCOTT' apellido='CARSON'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen2} alt="" />} nombre='EDERSON' apellido='MORALES'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen3} alt="" />} nombre='STEFAN' apellido='ORTEGA'/>
            </div>
            <div className="col"> </div>
        </div>
        <div className="row">
        <h1 style={{color:'skyblue', display:'flex', justifyContent:'flex-start', fontWeight:'bold'}}>DEFENSAS</h1>
            <div className="col">
            <Jugador foto={<img src={imagen4} alt="" />} nombre='MANUEL' apellido='AKAJIN'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen5} alt="" />} nombre='NATHAN' apellido='AKE'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen6} alt="" />} nombre='RUBEN' apellido='DIAZ'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen7} alt="" />} nombre='JOSKO' apellido='GVARDIOL'/>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <Jugador foto={<img src={imagen8} alt="" />} nombre='RICO' apellido='LEWIS'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen9} alt="" />} nombre='JOHN' apellido='STONES'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen10} alt="" />} nombre='KYLE' apellido='WALKER'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen11} alt="" />} nombre='JOSHUA' apellido='ESBRAND'/>
            </div>
        </div>
        <div className="row">
        <h1 style={{color:'skyblue', display:'flex', justifyContent:'flex-start', fontWeight:'bold'}}>CENTROCAMPISTAS</h1>
            <div className="col">
            <Jugador foto={<img src={imagen12} alt="" />} nombre='OSCAR' apellido='BOB'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen13} alt="" />} nombre='KEVIN' apellido='DE BRUYNE'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen14} alt="" />} nombre='JEREMY' apellido='DOKU'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen15} alt="" />} nombre='PHIL' apellido='FODEN'/>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <Jugador foto={<img src={imagen16} alt="" />} nombre='JACK' apellido='GREALISH'/>  
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen17} alt="" />} nombre='LUKA' apellido='GUNDOGAN'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen18} alt="" />} nombre='MATEO' apellido='KOVACIC'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen19} alt="" />} nombre='JAMES' apellido='MCATEE'/>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <Jugador foto={<img src={imagen20} alt="" />} nombre='MATHEUS' apellido='NUNES'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen21} alt="" />} nombre='MAXIMO' apellido='PERRONE'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen22} alt="" />} nombre='KALVIN' apellido='PHILLIPS'/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen23} alt="" />} nombre='RODRIGO' apellido=''/>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <Jugador foto={<img src={imagen24} alt="" />} nombre='SAVINHO' apellido=''/>
            </div>
            <div className="col">
            <Jugador foto={<img src={imagen25} alt="" />} nombre='BERNANDO' apellido='SILVA'/>
            </div>
            <div className="col">

            </div>
            <div className="col">

            </div>
        </div>
        <div className="row">
        <h1 style={{color:'skyblue', display:'flex', justifyContent:'flex-start', fontWeight:'bold'}}>DELANTEROS</h1>
            <div className="col">
            <Jugador foto={<img src={imagen26} alt="" />} nombre='ERLING' apellido='HAALAND'/>
            </div>
            <div className="col">

            </div>
            <div className="col">

            </div>
            <div className="col">

            </div>
        </div>
        <div className="row">
        <h1 style={{color:'skyblue', display:'flex', justifyContent:'flex-start', fontWeight:'bold'}}>ENTRENADORES</h1>
            <div className="col">
            <Jugador foto={<img src={imagen27} alt="" />} nombre='PEP' apellido='GUARDIOLA'/>
            </div>
            <div className="col">

            </div>
            <div className="col">

            </div>
            <div className="col">

            </div>
        </div>
        <Footer/>
</div>      
    );
    
}

export default Equipo;