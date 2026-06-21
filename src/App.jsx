import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup'
import Navbar from './Navbar'
import Layout from './Layout';
import Home from './Home';
import About from './About';

const App = ()=>{

   
    return (

        <>
       
       <Routes>
        <Route path='/' element={ <Layout/> }>
         <Route index element={ <Home/> }/>
          <Route path='/home' element={ <Home/> }/> 
          <Route path='/about' element={ <About/> }/>
        </Route>
        
         <Route path='/login' element={ <Login/> } />
         <Route path='/signup' element={ <Signup/> }/>
       </Routes>
        </>
    )
}
export default App;