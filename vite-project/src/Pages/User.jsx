import React from 'react'
import UserDash from '../Components/User/UserDash'
import DashboardLayout from '../Components/User/DashboardLayout'
export default function User() {
  return (
    <div>
      <DashboardLayout>
        <UserDash/>

      </DashboardLayout>
      
    </div>
  )
}
