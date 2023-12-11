import PropTypes from 'prop-types'
const Mainlayout = ({children}) => {
    return (
        <div className=' font-Poppins'>
          <div className='max-w-[1200px] mx-auto'>
          
          </div>
           
           <section> {children}</section>
        </div>
    );
};

Mainlayout.propTypes ={
    children : PropTypes.node.isRequired,
}

export default Mainlayout;