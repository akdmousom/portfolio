import PropTypes from 'prop-types'
import Particle from '../../Components/Particle/Particle';
import Navigation from '../../Components/Shared/Navigation/Navigation';


const Mainlayout = ({children}) => {
    return (
        <div>
          <Navigation/>
           
            {children}
        </div>
    );
};

Mainlayout.propTypes ={
    children : PropTypes.node.isRequired,
}

export default Mainlayout;