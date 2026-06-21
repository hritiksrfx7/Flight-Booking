import bgImage from './assets/loging-bg.png'
import './Tailwind.css'
import './Home.css'
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineFlight, MdFlightTakeoff,MdFlightLand } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { MdOutlineGroups } from "react-icons/md";
import HomeSecondPage from './HomeSecondPage'





const Home = ()=>{
   

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
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
                             <div>Best Price Guarantee</div>
                        </div>
                          <div className='h-12 w-45 border rounded-2xl text-sm text-white bg-[#9b83831f]  flex  items-center justify-center gap-2 '>
                            <div> <FaCheckCircle  color="green" /></div>
                             <div>Best Price Guarantee</div>
                        </div>
                          <div className='h-12 w-45 border rounded-2xl text-sm text-white bg-[#9b83831f]  flex  items-center justify-center gap-2 '>
                            <div> <FaCheckCircle  color="green" /></div>
                             <div>Best Price Guarantee</div>
                        </div>
                        
                     </div>



                </div>
                </div>
         </div>
        
                   {/* -----------second Page--------------- */}

         <div className=' h-55 w-full border  bg-linear-to-b from-[#000814] via-[#00061A] to-[#00030F]  '>
            <div className='h-48  w-280 ml-30 mt-3 bg-white rounded-3xl '>
               <div className='h-10 w-full border-b flex items-center pl-5 gap-2 font-bold text-blue-700 '>
                <div> <MdOutlineFlight /></div> 
                <div> Flights</div>
               </div>
   

                          <form onSubmit={handleSubmit}> 
                   <div className='flex items-start  justify-center gap-4 '>
               <div className='pl-5 pt-3 '>

                <label  >FROM</label>
                <div className=' h-10 w-50  border rounded-2xl mt-1 ml-1 flex items-center justify-center bg-[#E8ECF8]  '>
                   <div> <MdFlightTakeoff  className='text-1xl text-blue-800' /></div>
                    <input type="text" id='search-input' placeholder='City to Airport' />
                </div>

               </div>
                <div className='pl-5 pt-3 '>

                <label  >To</label>
                <div className=' h-10 w-40  border rounded-2xl mt-1 ml-1 flex items-center justify-center bg-[#E8ECF8]  '>
                   <div> <MdFlightLand  className='text-1xl text-blue-800' /></div>
                    <input type="text" id='search-input' placeholder='City to Airport' />
                </div>

               </div>
                <div className='pl-5 pt-3 '>

                <label  >DEPARTURE</label>
                <div className=' h-10 w-40  border rounded-2xl mt-1 ml-1 flex items-center justify-center bg-[#E8ECF8]  '>
                   <div> <SlCalender   className='text-1xl text-blue-800' /></div>
                    <input type="text" id='search-input' placeholder='Select date' />
                </div>

               </div>
                <div className='pl-5 pt-3 '>

                <label  >RETURNS </label>
                <div className=' h-10 w-40  border rounded-2xl mt-1 ml-1 flex items-center justify-center bg-[#E8ECF8]  '>
                   <div> <SlCalender   className='text-1xl text-blue-800' /></div>
                    <input type="text" id='search-input' placeholder='Select date' />
                </div>

               </div>
                <div className='pl-5 pt-3 '>

                <label  >PASSENGERS</label>
                <div className=' h-10 w-40  border rounded-2xl mt-1 ml-1 flex items-center justify-center bg-[#E8ECF8]  '>
                   <div> <MdOutlineGroups  className='text-2xl text-blue-800' /></div>
                    <input type="text" id='search-input' placeholder='1 Adult' />
                </div>

               </div>

               
               </div>
                      <button className="bg-blue-600 text-white px-10 py-2 rounded-lg hover:bg-blue-700 mt-5 ml-120">Search</button>

                      </form>
            </div>
         </div>
        <HomeSecondPage />
        </>
    )
}


export default Home                