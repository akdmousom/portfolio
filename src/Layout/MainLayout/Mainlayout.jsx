import PropTypes from 'prop-types'
import Navigation from '../../Components/Shared/Navigation/Navigation';


const Mainlayout = ({children}) => {
    return (
        <div className=' font-Poppins'>
          <div className='max-w-[1200px] mx-auto'>
          <Navigation/>
          </div>
           
            {children}
        </div>
    );
};

Mainlayout.propTypes ={
    children : PropTypes.node.isRequired,
}

export default Mainlayout;