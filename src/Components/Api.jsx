import '../../src/App.css';
import {useEffect,useState} from 'react'
import users from './data'

function Api() {
  const[jobs,setJobs]=useState(users);
  const[value,setValue]=useState(0);
    console.log(jobs)

const {detail,parameters,response,title}=jobs[value]
console.log(parameters)

  return (
    <section className='section'>
    <div className="title">
      <h2>Fori Analytics</h2>
      <div className='underline'></div>
    </div>
      <div className='jobs-center'>
        <div className='btn-container'>
        {jobs.map((item,index)=>{
          return(
            <button key={item.id} onClick={()=>setValue(index)} className={`job-btn ${index === value}`}>
              {item.title}
            </button>
          )
        })}
        </div>
      <article className='job-info'>
      {detail.map((value,index)=>{
        const {type,url}=value
        return(
        <div key={index} className='job-desc'>
          <p>{type}</p>
          <p>{url}</p>
        </div>)
      })}
      <div>
      {parameters.map((val)=>{
        const {field,type,description}=val
        console.log(parameters)
        return(
        <div className='job-desc'>
          <p>{field}</p>
          <p>{type}</p>
          <p>{description}</p>
        </div>)
      })}
      </div>
      </article>

    </div>
    </section>
  );
}

export default Api;






