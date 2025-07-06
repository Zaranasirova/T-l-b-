import React from 'react'
import Home from './pages/Home'
import { Link, Route, Routes } from 'react-router-dom'
import Details from './pages/Details'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<Details/>} />
    </Routes>

    
   
  )
}

export default App