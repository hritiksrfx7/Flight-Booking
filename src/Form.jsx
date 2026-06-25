import React, { useState } from 'react'
import { MdOutlineFlight, MdFlightTakeoff,MdFlightLand } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { MdOutlineGroups } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const cities = [
  "Delhi",
  "Mumbai",
  "Bhopal",
  "Indore",
  "Jaipur",
  "Pune",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Ahmedabad",
  "Lucknow",
  "Patna",
  "Nagpur",
  "Goa"
];

     const navigate = useNavigate()


    const [form,setForm ] =  useState({
        "from":"",
        "to":"",
        "departure":"",
        "return":"",
        "Passanger":""
    });

   
       

// const cities = [
//   "Delhi","Mumbai","Bhopal","Indore","Jaipur",
//   "Pune","Bangalore","Chennai","Kolkata","Hyderabad",
//   "Ahmedabad","Lucknow","Patna","Nagpur","Goa"
// ];


    
    const handleChange = (e)=>{
       setForm({
        ...form,[e.target.name]:e.target.value
       })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
          
          

          navigate("/showflights", {
            state:form
          })
          
    }
  return (
    <div>
       <div className='  py-5 px-5 border  bg-linear-to-b from-[#000814] via-[#00061A] to-[#00030F]  '>
            <div className='h-48  w-300 ml-30 mt-3 bg-white rounded-3xl '>
               <div className='h-10 w-full border-b flex items-center pl-5 gap-2 font-bold text-blue-700 '>
                <div> <MdOutlineFlight /></div> 
                <div> Flights</div>
               </div>
   

                          <form onSubmit={handleSubmit}> 
                   <div className='flex items-start  justify-center gap-4 '>
               <div className='pl-5 pt-3 '>

                <label  >FROM</label>
                <div className="h-10 w-50 border rounded-2xl mt-1 ml-1 flex items-center bg-[#E8ECF8] px-2 overflow-hidden">
                   <div> <MdFlightTakeoff  className='text-1xl text-blue-800' /></div>
                    <input type="text" name='from' value={form.from} list='fromCities' onChange={handleChange} id='search-input' placeholder='City to Airport'  className="w-full bg-transparent outline-none px-2"  />
                    <datalist id="fromCities">
                    {cities.map((city) => (
                        <option key={city} value={city} />
                    ))}
                    </datalist>
                </div>

               </div>
                <div className='pl-5 pt-3 '>

                <label  >To</label>
                <div  className="h-10 w-50 border rounded-2xl mt-1 ml-1 flex items-center bg-[#E8ECF8] px-2 overflow-hidden">
                   <div> <MdFlightLand  className='text-1xl text-blue-800' /></div>
                    <input type="text" name='to' value={form.to} onChange={handleChange}  id='search-input' placeholder='City to Airport' list='fromCities' className="w-full bg-transparent outline-none px-2"  />
                </div>

               </div>
                <div className='pl-5 pt-3 '>

                <label  >DEPARTURE</label>
                <div  className="h-10 w-50 border rounded-2xl mt-1 ml-1 flex items-center bg-[#E8ECF8] px-2 overflow-hidden">
                   <div> <SlCalender   className='text-1xl text-blue-800' /></div>
                    <input type="date" name='departure' value={form.departure} onChange={handleChange}  id='search-input' placeholder='Select date' className="w-full bg-transparent outline-none px-2"  />
                </div>

               </div>
                <div className='pl-5 pt-3 '>

                <label  >RETURNS </label>
                <div  className="h-10 w-50 border rounded-2xl mt-1 ml-1 flex items-center bg-[#E8ECF8] px-2 overflow-hidden">
                   <div> <SlCalender   className='text-1xl text-blue-800' /></div>
                    <input type="date"  name='return' value={form.return} onChange={handleChange}   id='search-input' placeholder='Select date' className="w-full bg-transparent outline-none px-2"  />
                </div>

               </div>
                <div className='pl-5 pt-3 '>

                <label  >PASSENGERS</label>
                <div  className="h-10 w-50 border rounded-2xl mt-1 ml-1 flex items-center bg-[#E8ECF8] px-2 overflow-hidden">
                   <div> <MdOutlineGroups  className='text-2xl text-blue-800' /></div>
                    <input type="number"  name='Passanger' value={form.Passanger} onChange={handleChange}  id='search-input' placeholder='1 Adult' className="w-full bg-transparent outline-none px-2"  />
                </div>

               </div>

               
               </div>
                      <button className="bg-blue-600 text-white px-10  py-2 rounded-lg hover:bg-blue-700 mt-5 ml-135">Search</button>

                      </form>
                      
    </div>
    </div>
    </div>
  )
}

export default Form
