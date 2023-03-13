import React from 'react'
import {users} from '../../Assets/testData'
import { useState } from 'react'
import '../APi/Api.css'

const Test = () => {
  const [apiList, setApiList] = useState(users)
  const [SelectedApi,SetSelectedApi] = useState(users[0])
  const [SelectedCase,SetSelectedCase] = useState(SelectedApi.Cases[0])
  const [active, setActive]  = useState(0)
    
  const clickHandler =(index)=>{
    SetSelectedApi(users[index])
    setActive(index)
    SetSelectedCase(SelectedApi.Cases[0])

  }
const ApiCaseHandler =(index)=>{
  console.log(index)
  SetSelectedCase(SelectedApi.Cases[index])
}
  return (
    <div>
    <div className=''>
            {apiList.map((obj,index)=>{
              return(
                <button key={obj.id} onClick={()=>clickHandler(index)} className={active===index?"active":"deactive"}>
                  {obj.title}
                </button>
              )
            })}
    </div>
    

    <div>
    <h3>{SelectedApi.title}</h3>
    <p>{SelectedApi.Type}</p>
    {

      SelectedApi.Cases.map((item,index)=>{
        return(
          <button onClick={()=>ApiCaseHandler(index)}>{item.title}</button>
        )
      })
    }
    <div>
     <p>{SelectedCase.title}</p>
     {SelectedCase.parameters.map((item)=>{
      return(
        <>
        <p>{item.Field}</p>
        <p>{item.Type}</p>
        <p>{item.Description}</p>
        </>
      )
     })}
    </div>
    </div>

    </div>
  )
}

export default Test