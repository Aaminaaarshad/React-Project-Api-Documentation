import React from 'react'
import { useState } from 'react'
import {users} from '../../Assets/userData'
import './UserApi.css'
import {TiTick} from "react-icons/ti"
import {RxCross2} from "react-icons/rx"


const UserApi = () => {
    const [value,setValue]=useState(0);
    const [ApiUser,setApiUser]=useState(users)
    const [ClickedApiUser,setClickedApiUser]=useState(users[0])
    const [CaseApiUser,setCaseApiUser]=useState(ClickedApiUser.cases[0])

   


    const clickHandler=(index)=>{
        setValue(index)
        setClickedApiUser(users[index])
        setCaseApiUser(ClickedApiUser.cases[0])

    }
    const caseHandler=(index)=>{ 
        setCaseApiUser(ClickedApiUser.cases[index])

    }


return (
    <section className='userSection'>
            
        <div className='listApi'>
        <h4>Api Name</h4>
            {ApiUser.map((item,index)=>{
            return(
                <div key={index}>
                    <button key={item.id} onClick={()=>clickHandler(index)} className={`button ${index === value}`}>{item.title}</button>
                </div>   
            )})}
        </div>
        
        <div className='info'>
            <div>
                <div className='api_param'>
                    <h4>Request Type</h4>
                <h5 style={{color:ClickedApiUser.Type==='POST'?"red":ClickedApiUser.Type==='PUT'?"orange":ClickedApiUser.Type==='GET'?"green":ClickedApiUser.Type==='PATCH'?"orangde":"black"}}>{ ClickedApiUser.Type}</h5>

                </div>
                <div className='api_param'>
                <h4>Request url</h4>

                <h5 style={{color:'#232933'}}>{ ClickedApiUser.url}</h5>

                </div>
            </div>
            <table >
                <th>Field Name</th>
                <th>Field type</th>
                <th>Field Description</th>
                {CaseApiUser.parameters.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{ item.Field}</td>
                            <td>{ item.Type}</td>
                            <td>{ item.Description}</td>
                        </tr>
                    )
                })}
            </table>
            <div>
                <p style={{color:'#606973'}}>{CaseApiUser.response}</p>
            </div>
        </div>


        <div className='listApi'>
        <h4>All Cases</h4>

        {ClickedApiUser.cases.map((item,index)=>{
            return(
                <div className='case' key={index}>
                    {item.title==="Success"?<TiTick/>:<RxCross2/>}
                    <button key={item.id} onClick={()=>caseHandler(index)} className={`button ${index === value}`}>{item.title}</button>
                </div>
            )
        })}
         <div className='ptag'>
                    <h4>Example</h4>
                    <h5>{"{"}</h5>
                    <div className='example'><h5>{"firstName:String,"}</h5>
                        <h5>{"email:String,"}</h5>
                        <h5>{"password:String,"}</h5>
                    </div>
                    <h5>{"}"}</h5>
                </div>
        </div>



    </section>
  )
}

export default UserApi

