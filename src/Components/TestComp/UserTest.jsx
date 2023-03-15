import React from 'react'
import { useState } from 'react'
import {users} from '../../Assets/userData'
import '../../Components/TestComp/Test.css'


const UserTest = () => {
    const [showInfo,setShowInfo]=useState(false)
    const [ApiUser,setApiUser]=useState(users)
    const [ClickedApiUser,setClickedApiUser]=useState(users[0])
    console.log(ClickedApiUser)
    const [CaseApiUser,setCaseApiUser]=useState(ClickedApiUser.cases[0])
    console.log(CaseApiUser)



    const clickHandler=(index)=>{
        setClickedApiUser(users[index])
    }
    const caseHandler=(index)=>{
        setShowInfo(!showInfo)
        setCaseApiUser(ClickedApiUser.cases[index])
    }


return (
    <section className='user'>
        <div>
            <h4>Users Api</h4>
            {ApiUser.map((item,index)=>{
            return(
                <div>
                    <button className='btn' key={item.id} onClick={()=>clickHandler(index)}>{item.title}</button>
                </div>   
            )})}
        </div>

        <div className='showData'>

        <div className='type'>
            <div className='typeUrl'>
                <h4>Hit this Api</h4>
                <h5>{ ClickedApiUser.Type}</h5>
                <h5>{ ClickedApiUser.url}</h5>
            </div>
            <div className='cases-btn'>
            <h4>All Cases</h4>

            {ClickedApiUser.cases.map((item,index)=>{
                return(
                    <div className='case'>
                        <button className='btn' key={item.id} onClick={()=>caseHandler(index)}>{ item.title}</button>
                    </div>
                )
            })}
            </div>
        </div>
        
        <div className='info'>
            <div className='parameters'>
                {CaseApiUser.parameters.map((item,index)=>{
                    return(
                        <div >
                            <h5>{showInfo && item.Field}</h5>
                            <h5>{showInfo && item.Type}</h5>
                            <h5>{showInfo && item.Description}</h5>
                        </div>
                    )
                })}
            </div>
            <div>
                <p>{showInfo && CaseApiUser.response}</p>
            </div>
        </div>

        </div>
    </section>
  )
}

export default UserTest

