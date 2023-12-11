import Particle from "../../Components/Particle/Particle";

const Home = () => {
    return (
        <div>
               <div className="z-[-10] bg-gradient-to-r from-[#c2e59c] to-[#64b3f4]  absolute w-full top-[-10px]">
               <Particle/>
               <div className=" absolute bottom-2/4 w-full mx-auto text-center">
                <h1>Welcome to my profile</h1>
                
                </div>
          
               </div>
            
        </div>
    );
};

export default Home;