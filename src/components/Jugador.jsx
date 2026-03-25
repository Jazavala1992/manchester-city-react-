import '../styles/estiloseq.css';
import PropTypes from 'prop-types';

function Jugador({foto, nombre, apellido}) {
    return (
        <div className='jugador'>
            <div className="fotos">{foto}</div>
            <div className="nombre"><h3>{nombre}</h3></div>
            <div className="apellido"><h3>{apellido}</h3></div>
        </div>
    );
}

Jugador.propTypes = {
    foto: PropTypes.node.isRequired,
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
};

export default Jugador;