import '../styles/estiloscard.css';
import PropTypes from 'prop-types';

function Cardnot({foto, texto}) {
    return (
        <div className='noticia'>
            <div className="fotografia">{foto}</div>
            <div className="textnot"><p>{texto}</p></div>
        </div>
            );
        }

Cardnot.propTypes = {
    foto: PropTypes.node.isRequired,
    texto: PropTypes.string.isRequired,
};

export default Cardnot;        