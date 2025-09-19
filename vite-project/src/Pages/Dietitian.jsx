import React from 'react'
import Sidebar from '../Components/Common/sidebar'
import Navbar from '../Components/Common/Navbar'
import DietitianDash from '../Components/Dietian/DietitianDash'

export default function Home() {
  return (
    <div><Sidebar/>
    
    <Navbar/>
    <DietitianDash/>
    </div>
  )
}
