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
import building from '../../assets/Imeges/building-management.png'
import study from '../../assets/Imeges/online-study.png'
import brand from '../../assets/Imeges/brand-shop.png'

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
                    <h1 className="text-center font-bold w-full border-b-red-600 text-2xl lg:text-4xl">About Me</h1>

                    <p className=" text-center text-xl ">Who am I?</p>
                </div>

                <div className="max-w-[1200px] mx-auto my-20">
                    <div className="flex flex-col lg:flex-row gap-6 items-center">

                        <img data-aos="fade-up" className=" h-[300px] border-4 rounded-lg  object-cover" src={Arijit} alt="" />


                        <div className="grid gap-4 px-2">
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

            <section className="my-32" id="skills">
                <div data-aos="fade-up">
                    <h1 className="text-center font-bold w-full border-b-red-600 text-2xl lg:text-4xl">My Skills</h1>

                </div>

                <div className="max-w-[1200px] px-2 mx-auto my-20">
                    <div className="flex flex-col gap-4 lg:flex-row justify-between">
                        <div data-aos="fade-right" className=" lg:w-2/4 space-y-4 ">
                            <h1 className="text-2xl text-center lg:text-left">skills & experiences.</h1>
                            <p className=" text-center lg:text-left">I am a junior front end developer. I have been working for the past few months I have learned a lot in my journey like reactjs , mongodb , nodejs , expressjs , tailwind , SASS , nextjs , material UI basically I am a frontend developer but I am also able to do backend work for backend related task i use mongoose or express js</p>
                        </div>
                        <div data-aos="fade-up" className="lg:w-2/4 h-auto">
                            <div className="flex justify-between">
                                <p>React</p>
                                <p> 70%</p>
                            </div>
                            <progress className="progress progress-primary " value="70" max="100">

                            </progress>
                            <div className="flex justify-between">
                                <p>Mongo DB</p>
                                <p> 70%</p>
                            </div>
                            <progress className="progress progress-primary " value="70" max="100">

                            </progress>

                            <div className="flex justify-between">
                                <p>Express JS</p>
                                <p>   60%</p>
                            </div>
                            <progress className="progress progress-primary " value="60" max="100">

                            </progress>

                            <div className="flex justify-between">
                                <p>Node JS</p>
                                <p> 45%</p>
                            </div>
                            <progress className="progress progress-primary " value="45" max="100">

                            </progress>

                            <div className="flex justify-between">
                                <p>Tailwind CSS</p>
                                <p> 95%</p>
                            </div>
                            <progress className="progress progress-primary " value="95" max="100">

                            </progress>
                            <div className="flex justify-between">
                                <p>JavaScript</p>
                                <p>70%</p>
                            </div>
                            <progress className="progress progress-primary " value="70" max="100">

                            </progress>

                            <div className="flex justify-between">
                                <p>SASS</p>
                                <p>70%</p>
                            </div>
                            <progress className="progress progress-primary " value="70" max="100">

                            </progress>

                            <div className="flex justify-between">
                                <p>CSS</p>
                                <p>70%</p>
                            </div>
                            <progress className="progress progress-primary " value="70" max="100">

                            </progress>

                            <div className="flex justify-between">
                                <p>HTML</p>
                                <p>85%</p>
                            </div>
                            <progress className="progress progress-primary " value="85" max="100">

                            </progress>

                        </div>


                    </div>
                </div>
            </section>

            <section className="my-36" id="projects">

            <div data-aos="fade-up">
                    <h1 className="text-center font-bold w-full border-b-red-600 text-2xl lg:text-4xl">My Projects</h1>

                </div>

                <div className="max-w-[1200px] mt-10 grid gap-4 mx-auto">
               
                <div data-aos="fade-up" className="hero min-h-[500px]  ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={building} className=" lg:max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-2xl font-bold">Buuilding Managenent System</h1>
                            <p className="py-6">With this web application you can do all the deal of your building. By using this application you can take your monthly rent online from anywhere in the country. You can post all your announcements using this website. I am still working on it, more work to be done</p>
                            <Link to={'https://building-management-syst-40685.web.app/'}><button className="btn btn-primary">Live</button></Link> 
                        </div>
                    </div>
                    </div>

                    <div data-aos="fade-up"  className="hero min-h-[500px] ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={study} className="lg:max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-2xl font-bold">Online Group Study</h1>
                            <p className="py-6">This is an educational website, you can easily share your assignments with your friends through this website, mark your assignments and you can give mark and comment from here.</p>
                            <Link to={'https://online-study-application.web.app/'}><button className="btn btn-primary">Live</button></Link> 
                        </div>
                    </div>
                    </div>

                    <div data-aos="fade-up" className="hero min-h-[500px] ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img  src={brand} className="lg:max-w-sm rounded-lg object-cover shadow-2xl" />
                        <div>
                            <h1 className="text-2xl font-bold">Beautify</h1>
                            <p className="py-6">You can get all information about ladis beauty product in this site this site gather information about all brands and then this site provide all information who visit this site </p>
                            <Link to={'https://building-management-syst-40685.web.app/'}><button className="btn btn-primary">Live</button></Link> 
                        </div>
                    </div>
                    </div>





                </div>
                

            </section>








        </>
    );
};

export default Home;