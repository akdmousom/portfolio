import PropTypes from 'prop-types'
import Particle from '../../Components/Particle/Particle';


const Mainlayout = ({children}) => {
    return (
        <div>
            Hello
           <div className=' w-full min-h-[500px]'>
           <Particle/>
           </div>
            {children}
        </div>
    );
};

Mainlayout.propTypes ={
    children : PropTypes.node.isRequired,
}

export default Mainlayout;