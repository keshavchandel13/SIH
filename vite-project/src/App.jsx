import React from 'react'
import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/Approutes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login/> */}
{/* 
    <Signup/> */}

    {/* <Signup/> */}
    {/* <Dietian/> */}
    <AppRoutes/>
  
    </>

  )
}

export default App
