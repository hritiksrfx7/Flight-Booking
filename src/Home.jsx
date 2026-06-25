import bgImage from './assets/loging-bg.png'
import './Tailwind.css'
import './Home.css'
import { FaCheckCircle } from "react-icons/fa";
import HomeSecondPage from './HomeSecondPage'
import Form from './Form'





const Home = ()=>{
   

    
    return(
        <>
         <div id='main-container'>
                         <video
                  autoPlay
                  loop
                  muted
                 
                   className="absolute  w-full h-full object-cover"
             >
                  <source src="/vedio/flightgif.mp4" type="video/mp4" />
             </video>
                <div id="bg-conatiner " className='relative h-screen w-full  object-cover '>
                         
                         
                {/* First Page */}
                  <div className='h-screen w-full border  pl-100 pt-40  '>
                     
                     <div id='firstPage-title' className='h-10 w-100 border ml-20 rounded-2xl text-center '>
                        #1 TRAVEL PLATFORM IN THE WORLD
                     </div>
                     <div className='h-30 w-150 pt-10 text-6xl text-center pr-20 font-bold text-white'>

                        Explore the world <br /> with <span className='text-[#6EB4FF]'>skyway</span>
                     </div>
                     <div className='h-30 w-130  text-center text-2xl pt-15 text-[#FFFFFFB8]'>
                        Book Flights, at the best prices. <br />Your journey start here.
                     </div>
                     <div className='h-20 w-150 pt-15  flex items-center justify-center gap-10 '>
                        <div className='h-12 w-45 border rounded-2xl text-sm text-white bg-[#9b83831f]  flex  items-center justify-center gap-2 '>
                            <div> <FaCheckCircle  color="green" /></div>
                             <div><span className='font-bold'>Best Price Guarantee  </span> </div>
                        </div>
                          <div className='h-12 w-45 border rounded-2xl text-sm text-white bg-[#9b83831f]  flex  items-center justify-center gap-2 '>
                            <div> <FaCheckCircle  color="green" /></div>
                             <div> <span className='font-bold'>Free cancellation</span></div>
                        </div>
                          <div className='h-12 w-45 border rounded-2xl text-sm text-white bg-[#9b83831f]  flex  items-center justify-center gap-2 '>
                            <div> <FaCheckCircle  color="green" /></div>
                             <div>24/7  <span className='font-bold'>Support</span> </div>
                        </div>
                        
                     </div>



                </div>
                </div>
         </div>
        
                   {/* -----------second Page--------------- */}
                      
                      <Form />
        
         
        <HomeSecondPage />
        </>
    )
}


export default Home                