import '../../App.css';
import {useEffect,useState} from 'react'
import users from '../../Assets/data'
import './Api.css'

function Api() {
  const[jobs,setJobs]=useState(users);
  const[value,setValue]=useState(0);
  const [active, setActive]  = useState(0)
  
  const clickHandler =(index)=>{
    setValue(index)
    setActive(index)
  }

const {detail,parameters,response,title,Cases}=jobs[value]

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
            <button key={item.id} onClick={()=>clickHandler(index)} className={active===index?"active":"deactive"}>
              {item.title}
            </button>
          )
        })}
        </div>
       

      <article className='job-info'>
      {detail.map((value,index)=>{
        const {Type,url}=value
        return(
        <div key={index} className='job-desc'>
          <p>{Type}</p>
          <p>{url}</p>
        </div>)
      })}

      <div>
      {parameters.map((val)=>{
        const {Field,Type,Description}=val
        console.log(parameters)
        return(
        <div className='job-desc'>
          <p>{Field}</p>
          <p>{Type}</p>
          <p>{Description}</p>
        </div>)
      })}
      </div>

      </article>

    </div>
    </section>
  );
}

export default Api;






