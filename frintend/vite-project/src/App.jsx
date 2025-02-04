import { useState } from 'react'

import './App.css'
import { Routes,Route } from 'react-router-dom'
import { loginpage } from './router/routes'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/Login' element={<loginpage/>}></Route>
      </Routes>
    </>
  )
}

export default App
