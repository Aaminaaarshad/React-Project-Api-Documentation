import React from 'react'
import { useState } from 'react'
import {dashboard} from '../../Assets/dashboardData'
import '../../Components/TestComp/Test.css'

const DashboardTest = () => {
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
    <section className='dashboard'>

        <div>
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

            <div>
                <h3>{ClickedDashboardUser.Type}</h3>
                <h3>{ ClickedDashboardUser.url}</h3>
            </div>

            <div>

                {ClickedDashboardUser.cases.map((item,index)=>{
                return(
                    <div>
                        <button className='btn' key={item.id} onClick={()=>caseHandler(index)}>{ item.title}</button>
                    </div>
                )
                })}

                <div>
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
    </section>
  )
}

export default DashboardTest