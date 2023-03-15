import React from 'react'
import { useState } from 'react'
import {users} from '../../Assets/userData'
import '../../Components/TestComp/Test.css'


const UserTest = () => {
    const [ApiUser,setApiUser]=useState(users)
    const [ClickedApiUser,setClickedApiUser]=useState(users[0])
    const [CaseApiUser,setCaseApiUser]=useState(ClickedApiUser.cases[0])

   


    const clickHandler=(index)=>{
        setClickedApiUser(users[index])
    }
    const caseHandler=(index)=>{ 
        setCaseApiUser(ClickedApiUser.cases[index])
    }


return (
    <section className='user'>
        <div className='listApi'>
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
                            <h5>{ item.Field}</h5>
                            <h5>{ item.Type}</h5>
                            <h5>{ item.Description}</h5>
                        </div>
                    )
                })}
            </div>
            <div>
                <p>{CaseApiUser.response}</p>
            </div>
        </div>

        </div>
    </section>
  )
}

export default UserTest

