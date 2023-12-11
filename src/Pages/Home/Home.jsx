import { Helmet } from "react-helmet-async";
import Particle from "../../Components/Particle/Particle";
import Arijit from "../../assets/Imeges/arijit.png"
import './Home.css'
import Navigation from "../../Components/Shared/Navigation/Navigation";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>AKD | Home</title>
            </Helmet>


            <div className="min-h-[100vh]">
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

            <section className="my-96">
                <h1>about</h1>
            </section>







        </>
    );
};

export default Home;