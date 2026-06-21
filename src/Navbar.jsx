import {Link} from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';
import PillNav from './Animation/PillNav';

const Navbar = ()=>{

    const [scroll, setScroll] = useState(false)
     useEffect( ()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 50){
                setScroll(true)
            }else{
                setScroll(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () =>{
            window.removeEventListener("scroll",handleScroll)
        }
     },[] )
    return(
        <>
        
             <nav className={`fixed    w-full h-16.5 z-50 flex items-center justify-center transition-all duration-700 ease-in-out  ${
        scroll
          ? "bg-[#2246ba]/90 backdrop-blur-lg shadow-2xl border-b border-white/10 py-3"
          : "bg-transparent"
      }`} >
         
          <div className="w-60 h-12  pb-5">
            
          </div>
          <div className="w-120 h-12  flex  items-center justify-evenly   ">
                    {/* <Link to='/home'>Home</Link>
                    <Link>Flights</Link>
                    <Link>Manage Booking</Link>
                    <Link>Support</Link> */}
                    
<PillNav
  
  
  items={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ]}
  activeHref="/"
  className="custom-nav"
  ease="power2.easeOut"
  baseColor="#000000"
  pillColor="#ffffff"
  hoveredPillTextColor="#ffffff"
  pillTextColor="#000000"
  theme="light"
  initialLoadAnimation={false}
/>
               
           
          </div>
          <div className="w-80 h-12  flex justify-center items-center gap-8 pl-10 ml-10 ">
            <div className='w-45 h-10    border border-amber-100 hover:shadow-xl hover:bg-blue-500 transition-all duration-00 text-white  text-center rounded-2xl flex justify-center items-center gap-3'>
                <div><FaUser /></div>
                <div ><Link to='/signup'>Sign up</Link></div>
            </div>
                 <div className='w-45 h-10  border border-amber-100 hover:shadow-xl hover:bg-blue-500  transition-all duration-300 text-white text-center rounded-2xl  flex justify-center items-center gap-3'>
                <div> <FaSignInAlt /></div>
                <div><Link to='/login'>Login</Link></div>
            </div>
         
          </div  >

         
           
          

        </nav>
        </>
    )
}
export default Navbar
