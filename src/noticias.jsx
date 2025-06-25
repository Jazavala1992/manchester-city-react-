import Footer from './Footer';
import Cardnot from './Cardnot';
import imagen from './noti/1.webp';
import imagen2 from './noti/2.webp';
import imagen3 from './noti/3.webp';
import imagen4 from './noti/4.webp';
import imagen5 from './noti/5.webp';
import imagen6 from './noti/6.webp';
import imagen7 from './noti/7.webp';
import imagen8 from './noti/8.webp';
import imagen9 from './noti/9.webp';
import imagen10 from './noti/10.webp';

function Noticias() {
  return (
    <div className="container" style={{paddingTop:'90px'}}>
      <h2 style={{fontWeight:'bold', color:'darkblue', borderTop:'1px solid gray' , justifySelf:'flex-start'}}>TODAS LAS NOTICIAS</h2>
      <Cardnot foto={<img src={imagen} alt="" />} texto='Juventus 2 - 0 City: Resumen'/>
      <h4 style={{fontWeight:'bold', borderTop:'1px solid gray' , justifySelf:'flex-start'}}>Ayer</h4>
      <Cardnot foto={<img src={imagen2} alt="" />} texto='"Estamos en un periodo duro, pero seguiremos luchando"'/>
      <Cardnot foto={<img src={imagen3} alt="" />} texto='"Necesitamos encontrar la manera de cambiar las cosas"'/>
      <Cardnot foto={<img src={imagen4} alt="" />} texto='Demasiado castigo en Turín'/>
      <Cardnot foto={<img src={imagen5} alt="" />} texto='¿Quién es Max Hudson?'/>
      <h4 style={{fontWeight:'bold', borderTop:'1px solid gray' , justifySelf:'flex-start'}}>10 de diciembre</h4>
      <Cardnot foto={<img src={imagen6} alt="" />} texto='"Lo que define tu legado es cómo reaccionas en el momento más difícil de tu carrera"'/>
      <Cardnot foto={<img src={imagen7} alt="" />} texto='Pep actualiza el estado físico de Foden y Kovačić antes de jugar contra la Juventus'/>
      <Cardnot foto={<img src={imagen8} alt="" />} texto='La lista del City de jugadores que han viajado a Turín'/>
      <Cardnot foto={<img src={imagen9} alt="" />} texto='Rueda de prensa: en directo'/>
      <Cardnot foto={<img src={imagen10} alt="" />} texto='Fechas confirmadas para los partidos de Premier League en febrero'/>
    
      <Footer />
    </div>
  );
}
export default Noticias;
