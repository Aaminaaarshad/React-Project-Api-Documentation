import React from 'react'
import { useState } from 'react'
import {dashboard} from '../../Assets/dashboardData'
import './DashboardApi.css'
import {TiTick} from "react-icons/ti"
import {RxCross2} from "react-icons/rx"

const DashboardApi = () => {
    const [value,setValue]=useState(0);
    const [ApiDashboard,setApiDashboard]=useState(dashboard)
    const [ClickedApiDashboard,setClickedApiDashboard]=useState(dashboard[0])
    const [CaseApiDashboard,setCaseApiDashboard]=useState(ClickedApiDashboard.cases[0])
    

    const clickHandler=(index)=>{
        setValue(index)
        setClickedApiDashboard(dashboard[index])
        // setCaseApiDashboard(ClickedApiDashboard.cases[0]) 
    }
    const caseHandler=(index)=>{
        setCaseApiDashboard(ClickedApiDashboard.cases[index])
    }

return (
    <section className='Dashboard'>
        <div className='left'>
            <h4>Api Name</h4>
            <div className='apiName'>
            {ApiDashboard.map((item,index)=>{
            return(
                <div key={index}>
                    <button key={item.id} onClick={()=>clickHandler(index)} className={`button ${index === value}`}>{item.title}</button>
                </div> 
            )})}
            </div>
        </div>

        <div className='middle'>
            <div className='typeANDurl'>
                <div className='typee'>
                    <h4>Request Type</h4>
                    <h5 style={{color:ClickedApiDashboard.Type==='POST'?"red":ClickedApiDashboard.Type==='PUT'?"orange":ClickedApiDashboard.Type==='GET'?"green":ClickedApiDashboard.Type==='PATCH'?"orangde":"black"}}>{ClickedApiDashboard.Type}</h5>
                </div>
                <div className='typee'>
                    <h4>Request Url</h4>
                    <h5 style={{color:'#232933'}}>{ClickedApiDashboard.url}</h5>
                </div> 
            </div>
            <table className='table'>
                {/* //// there should be no div involve in the table html/////*/}
                    <th>Field Name</th>
                    <th>Type Name</th>
                    <th>Description Name</th>
                    {CaseApiDashboard.parameters.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.Field}</td>
                            <td>{item.Type}</td>
                            <td>{item.Description}</td>
                        </tr>
                    )
                    })}
            </table>
            <div>
                <p style={{color:'#606973'}}>{CaseApiDashboard.response}</p>
            </div>
        </div>

        <div className='right'>
            <h4>All Cases</h4>
            {ClickedApiDashboard.cases.map((item,index)=>{
                return(
                    <div key={index} className='case'>
                        {item.title==="Success"?<TiTick/>:<RxCross2/>}
                        <button key={item.id} onClick={()=>caseHandler(index)} className={`button ${index === value}`}>{ item.title}</button>
                    </div>
                )
                })}
                <div className='ptag'>
                    <h4>Example</h4>
                    <h5>{"{"}</h5>
                    <div className='example'><h5>{"url:String,"}</h5>
                        <h5>{"curency:String,"}</h5>
                        <h5>{"secretKey:String,"}</h5>
                        <h5>{"DashboardName:String,"}</h5>
                        <h5>{"DashboardColor:String"}</h5>
                    </div>
                    <h5>{"}"}</h5>
                </div>
            
        </div>   
    </section>
)
}

export default DashboardApi