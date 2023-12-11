import { Helmet } from "react-helmet-async";
import Particle from "../../Components/Particle/Particle";
import Arijit from "../../assets/Imeges/arijit.png"
import './Home.css'
import Navigation from "../../Components/Shared/Navigation/Navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Resume from "../../assets/Resume/dummy.pdf"

const Home = () => {
    AOS.init();
    return (
        <>
            <Helmet>
                <title>AKD | Home</title>
            </Helmet>


            <div id="hero" className="min-h-[100vh]">
                <Navigation />
                <div className="z-[-10] bg-gradient-to-r from-[#c2e59c] to-[#64b3f4]  absolute w-full top-[-10px]">
                    <Particle />
                    <div className=" absolute grid gap-2 bottom-[40%] w-full mx-auto text-center">
                        <h1 className=" text-xl  lg:text-4xl">Hi there I&apos;m <span className="font-bold">Arijit Kumar Das</span></h1>
                        <h1 className=" text-xl  lg:text-4xl">I&apos;m an enthusiastic<span className="font-bold"> Frontend Developer</span></h1>


                    </div>

                </div>

                <div className="grid justify-center  max-w-[1200px] mx-auto">
                    <div className=" relative  grid items-center justify-center top-[220px]  ">
                        <img className="h-[200px] w-[200px] rounded-full object-cover" src={Arijit} alt="" />
                        <img className="h-[55px] absolute left-36 top-36 " src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" />
                       
                        
                       

                    </div>
                    <h1 className="text-2xl font-bold relative top-[220px] text-center left-[0%]">Arijit Kumar Das</h1>
                        
                    
                </div>

            </div>

            <section className="my-32" id="about">
                <div data-aos="fade-up">
                    <h1  className="text-center font-bold w-full border-b-red-600 text-2xl lg:text-4xl">About Me</h1>
                    
                    <p className=" text-center text-xl ">Who am I?</p>
                </div>

                <div className="max-w-[1200px] mx-auto my-20">
                    <div className="flex flex-col lg:flex-row gap-6 items-center">

                        <img data-aos="fade-up"   className=" h-[300px] border-4 rounded-lg  object-cover" src={Arijit} alt="" />
                       

                        <div className="grid gap-4">
                        <h4 data-aos="fade-up" className="text-2xl font-bold">I&apos;m Arijit Kumar Das</h4>
                        <p data-aos="fade-up" >I&apos;m an enthusiastic front-end developer. I mostly do front-end development with React. Moreover, I have worked with the backend in the past few months I used many web technologies for developing the frontend and backend. <br /> <br />
                        As a front-end developer, I always prefer working with React. Moreover, In my MERN Stack journey, I learned many technologies like ReactJS, MongoDB, NodeJS, ExpressJS, Mongoose, NextJS, Tailwind, Bootstrap, and SASS.</p>
                        <div className="flex gap-2" data-aos="fade-up">
                        <Link to={'https://www.linkedin.com/in/contact-arijit/'}><button className="btn btn-outline btn-info"> Linkedin <FaLinkedin /></button></Link>
                       <a href={Resume}><button className="btn btn-outline btn-info"> Download Resume <FaLinkedin /></button></a>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
           







        </>
    );
};

export default Home;