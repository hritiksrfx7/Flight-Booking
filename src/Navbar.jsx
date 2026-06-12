import {Link} from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
const Navbar = ()=>{
    return(
        <>
        <nav className=" fixed w-full h-16.5  bg-[#0A294D]  text-white flex justify-center items-center gap-20 ">
         
          <div className="w-60 h-12  pb-5">
            
          </div>
          <div className="w-150 h-12  flex  items-center justify-evenly   ">
                    <Link to='/home'>Home</Link>
                    <Link>Flights</Link>
                    <Link>Manage Booking</Link>
                    <Link>Support</Link>
               
           
          </div>
          <div className="w-80 h-12  flex justify-center items-center">
            <div className='w-60 h-10  pl-20 border-b-black text-center flex justify-center items-center gap-4'>
                <div><FaUser /></div>
                <div><Link to='/signup'>Sign up</Link></div>
            </div>
                 <div className='w-60 h-10  border-b-black text-center flex justify-center items-center gap-4'>
                <div> <FaSignInAlt /></div>
                <div><Link to='/login'>Login</Link></div>
            </div>
         
          </div  >

         
           
          

        </nav>
        </>
    )
}
export default Navbar
