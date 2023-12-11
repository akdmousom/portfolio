import { Helmet } from "react-helmet-async";
import Particle from "../../Components/Particle/Particle";
import Arijit from "../../assets/Imeges/arijit.png"

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>AKD | Home</title>
            </Helmet>
            <div className="z-[-10] bg-gradient-to-r from-[#c2e59c] to-[#64b3f4]  absolute w-full top-[-10px]">
                <Particle />
                <div className=" absolute grid gap-2 bottom-[40%] w-full mx-auto text-center">
                    <h1 className=" text-xl  lg:text-4xl">Hi there I&apos;m <span className="font-bold">Arijit Kumar Das</span></h1>
                    <h1 className=" text-xl  lg:text-4xl">I&apos;m an enthusiastic<span className="font-bold"> Frontend Developer</span></h1>
     

                </div>

            </div> 

            <div className="grid justify-center lg:justify-normal max-w-[1200px] mx-auto">
                <div className="rounded-full relative top-[220px]  ">
                    <img className="h-[200px] w-[200px] rounded-full object-cover"  src={Arijit} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;