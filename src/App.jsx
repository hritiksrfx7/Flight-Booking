import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup'
const App = ()=>{
    return (
        <>
       <Routes>
         <Route index element={ <Signup/> }/>
         <Route path='/login' element={ <Login/> } />
         <Route path='/signup' element={ <Signup/> }/>

       </Routes>
        </>
    )
}
export default App;