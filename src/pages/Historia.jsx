import Footer from '../components/Footer';
import Acordion from '../components/Acordion';
import Revive from '../components/Revive';
import imagen from '../assets/images/img/1.webp';

function Historia ()
{
    return(
        <div className="container" style={{paddingTop:'90px'}}>
            <h1 style={{color:'skyblue', display:'flex', justifyContent:'flex-start', fontWeight:'bold'}}>HISTORIA DEL EQUIPO</h1>
            <Acordion/>
            <Revive Foto={<img src={imagen} alt="" />}  Texto='Together: 4-In-A-Row
'/>
            <Footer/>
        </div>
    );
    
}

export default Historia;