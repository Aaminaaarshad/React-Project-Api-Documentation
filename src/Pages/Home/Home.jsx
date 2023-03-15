import React from 'react'
import DashboardApi from '../../Components/DashbaordApi/DashboardApi'
import UserApi from '../../Components/UserApi/UserApi'
import './Home.css'


const Home = () => {
  return (
    <div className='Home'>
        <h1>Fori Analytics</h1>
      <h4 className='tag'>Api Documentation</h4>

      <div className="Containerdiv">
        <h3>User Apis</h3>
      <UserApi/>
      </div>

      <div className="Containerdiv">
      <h3>Dashboard Apis</h3>

      {/* <DashboardApi/> */}

      </div>

    </div>
  )
}

export default Home
