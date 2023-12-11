import PropTypes from 'prop-types'
import Footer from '../../Components/Shared/Footer/Footer';
const Mainlayout = ({children}) => {
    return (
        <div className=' font-Poppins'>
          <div className='max-w-[1200px] mx-auto'>
          
          </div>
           
           <section> {children}</section>
           <Footer></Footer>
        </div>
    );
};

Mainlayout.propTypes ={
    children : PropTypes.node.isRequired,
}

export default Mainlayout;