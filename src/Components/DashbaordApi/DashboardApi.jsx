import React from 'react'
import { useState } from 'react'
import {dashboard} from '../../Assets/dashboardData'
import '../../Components/DashbaordApi/DashboardApi.css'

const DashboardApi = () => {
    const[showInfo,setShowInfo]=useState(false)
    const [DashboardUser,setDashboardUser]=useState(dashboard)
    const [ClickedDashboardUser,setClickedDashboardUser]=useState(dashboard[0])
    const [CaseDashboardUser,setCaseDashboardUser]=useState(ClickedDashboardUser.cases[0])



    const clickHandler=(index)=>{
        setShowInfo(!showInfo)
        setClickedDashboardUser(dashboard[index])
        setCaseDashboardUser(ClickedDashboardUser.cases[index])
    }
    const caseHandler=(index)=>{
        setCaseDashboardUser(ClickedDashboardUser.cases[index])
    }


  return (
    <section className='user'>

        <div className='listApi'>
            <h4>Dashboard Api</h4>
            {DashboardUser.map((item,index)=>{
            return(
            <>
                <div>
                    <button className='btn' key={item.id} onClick={()=>clickHandler(index)}>{item.title}</button>
                </div> 
            </> 
            )})}
        </div>

        <div className='showData'>
            <div className='type'>
            <div className='typeUrl'>
                <h5>{ClickedDashboardUser.Type}</h5>
                <h5>{ ClickedDashboardUser.url}</h5>
            </div>

            <div className='cases-btn'>
            <h4>All Cases</h4>

                {ClickedDashboardUser.cases.map((item,index)=>{
                return(
                    <div>
                        <button className='btn' key={item.id} onClick={()=>caseHandler(index)}>{ item.title}</button>
                    </div>
                )
                })}
                </div>

                <div className='info'>
                <div className='parameters'>
                {CaseDashboardUser.parameters.map((item,index)=>{
                    return(
                        <div>
                            <h5>{showInfo && item.Field}</h5>
                            <h5>{showInfo && item.Type}</h5>
                            <h5>{showInfo && item.Description}</h5>
                        </div>
                    )
                })}
                </div>

                <div>
                <p>{showInfo && CaseDashboardUser.response}</p>
                </div>
                </div>

    

            </div>
        </div>
    </section>
  )
}

export default DashboardApi