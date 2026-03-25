import '../styles/estilosrevive.css';
import PropTypes from 'prop-types';

function Revive({Foto, Texto}) {
    return (
        <div className="revive">
            <div className='desc'><h4 className='desc-title'>{Texto}</h4></div>
            <div className='foto'>{Foto}</div>
        </div>
    );
}

Revive.propTypes = {
    Foto: PropTypes.node.isRequired,
    Texto: PropTypes.string.isRequired,
};

export default Revive;