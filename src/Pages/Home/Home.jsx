import Api from '../../Components/APi/Api'
import React from 'react'
import UserTest from '../../Components/TestComp/UserTest'
import DashboardTest from '../../Components/TestComp/DashboardTest'
import '../../Components/TestComp/Test.css'



const Home = () => {
  return (
    <div className='Home'>
      <div className='menubar'>
        <h1>Fori Analytics</h1>
      </div>
      <h4 className='tag'>Api Documentation</h4>
      {/* <Api/> */}
      <UserTest/>
      {/* <h5>Dashboard Api</h5>
      <DashboardTest/> */}
    </div>
  )
}

export default Home
