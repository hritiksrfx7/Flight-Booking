
import { useState } from 'react'
 import { FcGoogle } from "react-icons/fc";
 import { FaFacebook } from "react-icons/fa6";
 import {Link, useNavigate} from 'react-router-dom'
import bgImage from './assets/loging-bg.png'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineFlight } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";
import TextType from './TextType'
import './Login.css'



const Login = ()=>{
    const [form,setForm] = useState({
        "email":"",
        "pass":""
    })
    let Navigate = useNavigate();

    const [checked,setChecked] = useState(false)
    const handleChange = (e)=>{
        setForm({
            ...form,[e.target.name]:e.target.value
        })

    }
    const handleSubmit = (e)=>{
       e.preventDefault()
       let users = JSON.parse(localStorage.getItem('user')) || []
       let alreadyuser = users.find((e)=>{
        return e.email == form.email
       })
       if(!checked){
        alert('please accept the terms and condition')
        return 
       }
       if(!alreadyuser){
        alert("please signup first")
        return 
       }
       if(alreadyuser.pass != form.pass){
          alert("Invalid Password")
       }
       if(alreadyuser.pass == form.pass ){
        alert("login successfully")
       }

       Navigate('/home')


    }
    return (
        <>
        
         <div  className="h-screen bg-cover bg-center "
                 style={{backgroundImage: `url(${bgImage})`}}>

                    <div id="formcss" className="mr-15 mb-6 rounded-2xl fixed top-0 right-0 mt-17   "   >
                         <h1 className="font-bold text-2xl pt-8 text-center     ">Welcome Back</h1>
                         <p className='text-center'>Login to continue your account</p>

       <form onSubmit={handleSubmit}>
          
        <input  placeholder=" Email Address  " className="border border-gray-300 p-2 rounded-md w-85 h-10 ml-13 mt-3  " type="text" name="email" value={form.email} onChange={handleChange} /> <br /><br />

         
        <input placeholder="Password" className="border border-gray-300 p-2 rounded-md w-85 h-10 ml-13 " type="text" name="pass" value={form.pass} onChange={handleChange} /> <br /><br />
         
         <input type="checkbox" className='ml-14' onClick={(e)=>setChecked(true)} />
        <label className='ml-3 text-sm text-gray-600'>Remember me   </label>
         <label className='text-sm text-blue-600 ml-25' >Forgot password?</label>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-80 h-10 mt-7 ml-14 ">
          Login
    </button>
        </form>
         <p className='mt-5 text-center'>or</p>

              <div className="h-10 w-85  ml-13 mt-5 bg-white border   rounded-lg  flex justify-center items-center gap-6 ">
                   <div>
                    <FaFacebook className="text-3xl   mt-1" />
                    </div>
                     <div> Continue With Facebook</div>
               </div>
              <div className="h-10 w-85  ml-13 mt-5 bg-white border   rounded-lg  flex justify-center items-center gap-6 ">
                   <div>
                      <div><FcGoogle className="text-3xl  mt-1 " /></div>
                    </div>
                     <div> Continue With Google</div>
               </div>

             <p className='text-center mt-10'>Don't You have account?
              <Link to='/signup'>
                   <span className='   text-blue-600 text-xl ml-2 '>sign up</span>
              </Link>
             </p>
              
                 {/* for some content */} 
        </div>   
       <TextType 
  text={["Book Flights", "Explore the Word","Happy journey"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="_"
  texts={[]}
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/>
          {/* <h1 className='text-[#0A294D] text-5xl font-bold pt-40 pl-35  ' >Books Flights, <br /> Explore the World</h1> */}
          <h1 className='text-[#0A294D]  font-bold pt-5 pl-35 '>search,compare  and book flights <br /> to anywhere in the world.</h1>

          <div className='w-200 h-40  ml-20 mt-38 bg-[#103D65] text-white rounded-3xl p-8 flex justify-center items-center gap-7 '  >

            <div class="login-help">
                <div class="login-help-icons"><MdOutlineFlight /></div>
                 <div class="login-help-content">
                    <h1  className='pl-4 font-bold pt-2 '>Best Prices</h1>
                    <h1 className='pl-4  pt-2'>compare hundreds of <br /> airlines and get the  <br /> best deals</h1>
                 </div>
                </div>
            <div class="login-help">
                <div class="login-help-icons"><RiShieldCheckFill /></div>
                 <div class="login-help-content">
                    <h1  className='pl-4 font-bold pt-2 '>Secure Booking</h1>
                    <h1 className='pl-4  pt-2'>Your personal  <br /> information is safe <br /> with us </h1>
                 </div>
                </div>
            <div class="login-help">
                <div class="login-help-icons"><MdOutlineFlight /></div>
                 <div class="login-help-content">
                    <h1  className='pl-4 font-bold pt-2 '>24/7 Support</h1>
                    <h1 className='pl-4  pt-2'>we're here to hep  <br /> you anytime, <br /> anywhere </h1>
                 </div>
                </div>
            

          </div>
          


         </div>
           
           
        </> 
    )
}

export default Login