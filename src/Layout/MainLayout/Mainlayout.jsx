import PropTypes from 'prop-types'

const Mainlayout = ({children}) => {
    return (
        <div>
            Hello
            {children}
        </div>
    );
};

Mainlayout.propTypes ={
    children : PropTypes.node.isRequired,
}

export default Mainlayout;