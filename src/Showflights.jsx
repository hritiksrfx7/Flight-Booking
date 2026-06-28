        import axios from "axios";
        import { useEffect, useState } from "react";
        import { useLocation, useNavigate } from "react-router-dom";
        import bgImage from './assets/showflightsbg.png'

        const Showflights = ()=>{
            const location = useLocation()
            const navigate = useNavigate()
            
            
            const from = location.state?.from;
            const to = location.state?.to;
            const passanger = location.state?.Passanger;
            const Return = location.state?.return;
            const departure = location.state?.departure;

            const[data,setData] = useState([])
           const [froom, setFroom] = useState(location.state?.from || "");
           const [too, setToo] = useState(location.state?.to || "");

            const swapper  = ()=>{
                let temp = froom
                setFroom(too)
                setToo(temp)
            }

            

            const Bookflight = (e)=>{
                e.preventDefault()
            
            }
            const editflight = (e)=>{
                e.preventDefault()
                navigate("/home")
                
            }
            
            useEffect(() => {
            axios.get("http://localhost:3000/flights")
            .then((res) => {

            const filtered = res.data.filter((flight) =>
                flight.from.trim().toLowerCase() === from?.trim().toLowerCase() &&
                flight.to.trim().toLowerCase() === to?.trim().toLowerCase()
            );

            setData(filtered);
            
            
            });

           }, [from, to]);

            return(
                <>
                
                
            <div   className="h-screen w-full bg-cover   bg-black/40 "
                    style={{backgroundImage: `url(${bgImage})`}}>
                            

            
        <div className="min-h-screen bg-black/40">
                {/* this for user search */}
                <div className="pt-30 w-360 pl-20">
                <div className="bg-white rounded-3xl shadow-xl p-4  flex flex-wrap lg:flex-nowrap items-end gap-4">

        
        <div className="flex-1 min-w-55">
            <label className="block text-sm text-gray-500 mb-2">From</label>
            <div className="border rounded-2xl px-4 py-3 flex items-center justify-between hover:border-blue-500 transition">
            <div>
                <input value={froom} className="font-semibold text-lg text-gray-900"
                onChange={(e)=>setFroom(e.target.value)} />
            
            </div>
            
            
            </div>
        </div>


        <div className="flex items-center justify-center">
            <button onClick={swapper}
            className="w-12 h-12 rounded-full border bg-white shadow-sm hover:bg-gray-50 flex items-center justify-center text-xl">
            ⇄
            </button>
        </div>

        <div className="flex-1 min-w-55">
            <label className="block text-sm text-gray-500 mb-2">TO</label>
            <div className="border rounded-2xl px-4 py-3 flex items-center justify-between hover:border-blue-500 transition">
            <div>
           <input value={too} className="font-semibold text-lg text-gray-900" 
              onChange={(e)=>setToo(e.target.value)} />

                
            </div>
            
            </div>
        </div>

        
        <div className="flex-1 min-w-45">
            <label className="block text-sm text-gray-500 mb-2">Departure</label>
            <div className="border rounded-2xl px-4 py-3 flex items-center justify-between hover:border-blue-500 transition">
            <div>
                <h3 className="font-semibold text-lg text-gray-900">
                {departure}
                </h3>
            </div>
            
            </div>
        </div>

        
        <div className="flex-1 min-w-45">
            <label className="block text-sm text-gray-500 mb-2">Return</label>
            <div className="border rounded-2xl px-4 py-3 flex items-center justify-between hover:border-blue-500 transition">
            <div>
                <h3 className="font-semibold text-lg text-gray-900">
                {Return}
                </h3>
            
            </div>
            
            </div>
        </div>

        
        <div className="flex-1 min-w-45">
            <label className="block text-sm text-gray-500 mb-2">Passengers</label>
            <div className="border rounded-2xl px-4 py-3 flex items-center justify-between hover:border-blue-500 transition">
            <div>
                <h3 className="font-semibold text-lg text-gray-900">
                {passanger}
                </h3>
                
            </div>
            
            </div>
        </div>

        
        <button
            className="h-13 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 whitespace-nowrap" onClick={editflight}>
        
            Edit Flights
        </button>

        </div>
        </div>
                    {/* end for user search */}
                    
            
            <h1 className="text-2xl font-bold  ml-70 pt-10 ">
            Available Flights
            </h1>

        { 
            data.map((e)=>{
                return(
                    <div key={e.id}  className="max-w-5xl mx-auto mt-4 space-y-4 ">
            
            <div className="bg-white rounded-2xl p-5 shadow-lg flex justify-between items-center">
                <div>
                <h2 className="text-xl font-bold text-blue-700">{e.airline}</h2>
                <p>{e.from} → {e.to}</p>
                <p>{e.arrivalTime}- {e.departureTime}</p>
                </div>


                <div>
                <p className="text-2xl font-bold text-green-600"> ₹{e.price} </p>
                <button className="mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg"
                onClick={Bookflight}  >
                    Book Now
                </button>
                </div>
            </div>

            </div> 
                )
            })
            }

            

        </div>
        {/* </div> */}
                    
                    </div>

                
                
                </>
            )
        }

        export default Showflights