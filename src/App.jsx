import { Route, Routes ,Navigate} from 'react-router-dom'
import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Result from './pages/Result'
import History from './pages/History'



function App() {
 

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/'
      element={<Navigate to='home'/>}/>

      <Route path='/home' 
      element={<Home/>}/>
     <Route path='/result' 
      element={<Result/>}/>
  
     <Route path='/history' 
      element={<History/>}/>
     </Routes>
    
     
    </>
    
  )
}

export default App
