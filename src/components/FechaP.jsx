import '../styles/estiloscal.css';
import PropTypes from 'prop-types';

function Calendario({camp, fecha, e1, l1, hora, l2, e2, btn}) {
    return (
        <div className="calendario">
            <div className="camp">{camp}</div>
            <div className="fecha">{fecha}</div>
            <div className="equipo1">{e1}</div>
            <div className="logo1">{l1}</div>
            <div className="hora">{hora}</div>
            <div className="logo2">{l2}</div>
            <div className="equipo2">{e2}</div>
            <div className="boton">{btn}</div>
        </div>
    );
}

Calendario.propTypes = {
    camp: PropTypes.node.isRequired,
    fecha: PropTypes.string.isRequired,
    e1: PropTypes.string.isRequired,
    l1: PropTypes.node.isRequired,
    hora: PropTypes.string.isRequired,
    l2: PropTypes.node.isRequired,
    e2: PropTypes.string.isRequired,
    btn: PropTypes.node.isRequired,
};

export default Calendario;