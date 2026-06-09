import { useState } from "react"
import './Tailwind.css'
import  './Signup.css'
import bgImage from './assets/signup-bg.png'
 import { FcGoogle } from "react-icons/fc";
 import { FaFacebook } from "react-icons/fa6";
 import { IoPricetagOutline } from "react-icons/io5";
 import { SlCalender } from "react-icons/sl";
 import { IoMdContacts } from "react-icons/io";







const Signup = ()=>{
   const [error,seterror] =useState({})
    const [form,setForm ] = useState({
        name:"",
        email:"",
        pass:"",
        
        num:""
    })

    const handleChange = (e)=>{
           setForm({
        ...form,[e.target.name]:e.target.value
      })
    }
    const handleSubmit = (e)=>{
      const showerror = {}
      e.preventDefault()
      let valid = true
       if(form.name.trim() == ""){
             showerror.name ='plese enter name'
             valid = false
       }
       if(form.num.length != 10){
        showerror.num = ' please enter number'
        valid = false
       }
       if(form.email===""){
        showerror.email = 'please enter email'
        valid = false
       }
      //  if(form.pass.match(/[0-9]/) &&
      //                     /[!@#$%^&*()]/ &&
      //                      /[A-Z]/ &&
      //                       /[a-z]/ ){
      //                         showerror.pass= 'please enter Strong pass'
      //                         valid = false
      //                       }
      if(form.pass == ""){
        showerror.pass = 'please enter pass'
        valid = false
      }

       
       if(valid){
        let users = JSON.parse(localStorage.getItem('user')) || []
        if(!Array.isArray(users)){
          users = []
        }
        let alreadyuser = users.find((e)=>{
          return e.email == form.email
        })
        if(alreadyuser){
          alert('You are already a user')
          return
        }
       
       users.push(form)
       localStorage.setItem("user",JSON.stringify(users))
      }
      seterror(showerror)
      if(Object.keys(showerror).length > 0){
        return
      }
     
       alert("Form submitted succesfully")
       setForm( {
         name:"",
        email:"",
        pass:"",
        
        num:""
       })
       
      
     
    }
    return(
        <>
        <div  className="h-screen bg-cover bg-center "
         style={{backgroundImage: `url(${bgImage})`}}>

          {/* div for some content */}
          <div className=" h-150 w-130  ml-25 pl-10 overflow-hidden ">
              
              <div className="h-20 w-50  text-3xl  mt-30 font-semibold">
                Your Journey Start here
              </div>
              

              <div className="h-30 w-70  mt-10  flex justify-center items-center gap-5   ">
                   <div className="h-12 w-12 text-3xl mb-5  border  rounded-full flex items-center justify-center">
                    <IoPricetagOutline />
                   </div>
                   <div className="h-28 w-40  pl-3  ">
                          <div className="h-9 w-38  font-semibold  ">
                            Best price Guarentee
                          </div>
                          <div className="h-18 w-70 ">
                            Get the best price on <br /> domastic and international flights
                          </div>

                   </div>
                   
              </div>

               <div className="h-30 w-70 flex justify-center items-center gap-5   ">
                   <div className="h-12 w-12 text-3xl mb-5  border  rounded-full flex items-center justify-center">
                    <SlCalender />

                   </div>
                   <div className="h-28 w-40  pl-3  ">
                          <div className="h-9 w-38 font-semibold  ">
                          Easy Booking
                          </div>
                          <div className="h-18 w-70 ">
                            Book Your flight in just <br /> a few simple step
                          </div>

                   </div>
                   
              </div>

               <div className="h-30 w-70    flex justify-center items-center gap-5   ">
                   <div className="h-12 w-12 text-3xl mb-5  border  rounded-full flex items-center justify-center">
                   <IoMdContacts />

                   </div>
                   <div className="h-28 w-40  pl-3  ">
                          <div className="h-9 w-38 font-semibold  ">
                            24/7 Support
                          </div>
                          <div className="h-18 w-70 ">
                           We're here to help  you anytime, <br /> anywhere
                          </div>

                   </div>
                   
              </div>
              
          </div>




          {/* div for form */}
          <div id="formcss" className="mr-15 mb-6 rounded-2xl fixed top-0 right-0 mt-17   "   >
              <h1 className="font-bold text-2xl pl-8 pt-8">Create Your Account</h1>
              <h1 className="font-semibold pl-10">start your journey</h1>

             
              <div className="h-10 w-85  ml-13 mt-5 bg-white border   rounded-lg  flex justify-center items-center gap-6 ">
              <div><FcGoogle className="text-3xl   mt-1" /></div>
              <div> Continue With Google</div>
              </div>
               
                <div className="h-10 w-85  ml-13 mt-5 bg-white border   rounded-lg  flex justify-center items-center gap-6 ">
              <div><FaFacebook className="text-3xl   mt-1" /></div>
              <div> Continue With Facebook</div>
              </div>
 
            
              
            
                <p className="ml-50 mt-5">or</p>

             <form onSubmit={handleSubmit}>
          <p className=" w-50 ml-60  text-red-600">{error.name}</p>
        <input placeholder=" Full Name" className="border border-gray-300 p-2 rounded-md w-85 h-10 ml-13 mt-3" type="text" name="name" value={form.name} onChange={handleChange} /> <br /><br />

         <p className=" w-50 ml-60  text-red-600">{error.email} </p>
        <input placeholder="Email" className="border border-gray-300 p-2 rounded-md w-85 h-10 ml-13 " type="text" name="email" value={form.email} onChange={handleChange} /> <br /><br />

         

         <p className=" w-50 ml-60  text-red-600">{error.num}  </p>
        <input placeholder="Number" className="border border-gray-300 p-2 rounded-md w-85 h-10 ml-13 " type="text" name="num"value={form.num} onChange={handleChange} /> <br /><br />

         <p className=" w-50 ml-60  text-red-600">{error.pass}  </p>
        <input placeholder="Password" className="border border-gray-300 p-2 rounded-md w-85 h-10 ml-13 " type="text" name="pass" value={form.pass} onChange={handleChange} /> <br /><br />

        
       
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ml-32">
          Create Your account
    </button>
                    
        </form>
          </div>
        
        </div>
        </>
    )
}
export default Signup