import Particle from "../../Components/Particle/Particle";
import Arijit from "../../assets/Imeges/arijit.png"

const Home = () => {
    return (
        <div>
            <div className="z-[-10] bg-gradient-to-r from-[#c2e59c] to-[#64b3f4]  absolute w-full top-[-10px]">
                <Particle />
                <div className=" absolute bottom-2/4 w-full mx-auto text-center">
                    <h1>Welcome to my profile</h1>

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