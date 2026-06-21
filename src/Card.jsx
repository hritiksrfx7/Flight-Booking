import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Tailwind.css'


const Card = () => {

  const [data,setData] = useState([])
 
  useEffect( ()=>{
       axios.get('http://localhost:3000/CardData')
       .then((res)=>setData(res.data) )
    } ,[])
     
      
  
  return (
    <>
    
      <div className='h-[150vh] w-full  pl-26 pt-35 bg-linear-to-b from-[#000814] via-[#00061A] to-[rgb(0,3,15)]  '>
        <div className='h-60 w-150   '>
          <div className='h-10 w-45 border rounded-2xl   bg-[#22326D] text-[#1A5FFF] text-center pt-2 '> 
            EXPLORE THE WORLD
          </div>
          <div className='h-15 w-100  text-4xl font-extrabold mt-8 text-[#070D25] '>
            Popular Destinations
          </div>
          <p className='pt-5 text-white'>From ancient wonders to modern skylines — discover where to go next </p>
        </div>
        <div className='h-150 w-200  '>
      { <div className='h-150 w-300   rounded-2xl grid  grid-cols-3  '>
                
        {
          data.map( (e)=>{
            return (
              <div key={e.id} className='h-60 rounded-1xl overflow-hidden group '>
              <div className='h-60 w-90 rounded-2xl bg-cover bg-center transition-transform duration-500 group-hover:scale-110 ' 
               style={{
                backgroundImage:`url(${e.image})`
              }}>
                 <div className='h-8 w-28 text-white font-bold rounded-2xl  text-center pt-1  ml-55 bg-blue-500 '> 
                 {e.title}  </div>
                 <div className='font-extrabold  text-2xl pt-30 pl-12  text-white '> {e.city} </div>
                  <div className='pl-8 text-white'> {e.country} </div>
              </div>
              </div>
            )
          } )
        }

      </div> }
      </div>
       </div>

    </>
  )
}

export default Card
