import Logo from "../../../assets/Imeges/Logo.png"
import { Link } from "react-scroll";
const Navigation = () => {

    const navItem = <>
    
    <li><Link to="hero">Home</Link></li>
    <li><Link to="about" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >About Me</Link></li>



    <li><Link to="skills" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >skills</Link></li>


    </>

    return (
        <div className="navbar  bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {navItem}
                    </ul>
                </div>
                <div><a className=" hidden lg:block text-xl"><img width={60} src={Logo} alt="" /></a></div>
            </div>
            <div className="navbar-end lg:hidden"><a className="btn btn-ghost text-xl"><img width={60} src={Logo} alt="" /></a></div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            
        </div>
    );
};

export default Navigation;