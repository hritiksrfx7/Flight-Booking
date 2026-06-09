import { useState } from "react"
import './Tailwind.css'
import  './Signup.css'
import bgImage from './assets/signup-bg.png'

const Signup = ()=>{
   const [error,seterror] =useState({})
    const [form,setForm ] = useState({
        name:"",
        email:"",
        pass:"",
        Cpass:"",
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

       if(form.Cpass !== form.pass){
           showerror.Cpass = 'pass do not match'
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
       
      
     
    }
    return(
        <>
        <div  className="h-screen bg-cover bg-center flex justify-end items-baseline-last"
         style={{backgroundImage: `url(${bgImage})`}}>
          <div id="formcss" className="mr-15 mb-6 rounded-2xl"   >
              <h1 className="font-bold text-2xl pl-8 pt-8">Create Your Account</h1>
              <h1 className="font-semibold pl-10">start your journey</h1>
              <div className="h-10 w-85  ml-13 mt-5 bg-white border   rounded-lg "></div>
              <div className="h-10 w-85  ml-13 mt-2 bg-white border   rounded-lg "></div>
            
                <p className="ml-50 mt-5">or</p>

             <form onSubmit={handleSubmit}>
          <p className=" w-50 ml-60  text-red-600">{error.name}</p>
        <input placeholder="Name" className="border border-gray-300 p-2 rounded-md w-85 h-10 ml-13 mt-3" type="text" name="name" value={form.name} onChange={handleChange} /> <br /><br />

         <p className=" w-50 ml-60  text-red-600">{error.email} </p>
        <input placeholder="Email" className="border border-gray-300 p-2 rounded-md w-85 h-10 ml-13 " type="text" name="email" value={form.email} onChange={handleChange} /> <br /><br />

         

         <p className=" w-50 ml-60  text-red-600">{error.num}  </p>
        <input placeholder="Number" className="border border-gray-300 p-2 rounded-md w-85 h-10 ml-13 " type="text" name="num"value={form.num} onChange={handleChange} /> <br /><br />

         <p className=" w-50 ml-60  text-red-600">{error.pass}  </p>
        <input placeholder="Password" className="border border-gray-300 p-2 rounded-md w-85 h-10 ml-13 " type="text" name="pass" value={form.pass} onChange={handleChange} /> <br /><br />

         <p className=" w-50 ml-60  text-red-600">{error.Cpass}  </p>
        <input placeholder="Confirm Password" className="border border-gray-300 p-2 rounded-md w-85 h-10 ml-13 " type="text" name="Cpass" value={form.Cpass} onChange={handleChange} /> <br /><br />
       
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