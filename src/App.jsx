import React from 'react'
import Home from './pages/Home'
import { Link, Route, Routes } from 'react-router-dom'
import Details from './pages/Details'
import Payment from './pages/Payment'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<Details/>} />
      <Route path='/payment' element={<Payment/>}></Route>
    </Routes>

    
   
  )
}

export default App