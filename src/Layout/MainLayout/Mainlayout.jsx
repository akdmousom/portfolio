import PropTypes from 'prop-types'
import Particle from '../../Components/Particle/Particle';


const Mainlayout = ({children}) => {
    return (
        <div>
          
           
            {children}
        </div>
    );
};

Mainlayout.propTypes ={
    children : PropTypes.node.isRequired,
}

export default Mainlayout;