import {useState,useEffect} from 'react'
import Datalist from './datalist'



const Weathercomp = ({weatherdata}) => {
  
  const[currentdatetime,setCurrentdatatime]=useState(new Date())

  useEffect(()=>{
   const interval=setInterval(() => {
     setCurrentdatatime(new Date())
   }, 1000);
    return ()=>clearInterval(interval)

  },[])

  const{
    name:city ,
    sys:{country},
    weather:[{description,icon}],
    wind:{speed},
    main:{humidity,temp}
  }=weatherdata


 


  // flag 
  const flag=`fi fi-${country.toLowerCase()} mx-3 rounded fs-1`

  const items=[
    {
      src:'https://classroomclipart.com/image/content7/50871/thumb.gif',
      primary:`${temp.toFixed()}°C`, // alt+0176 -for degrees symbol 
    },
    {
      src:'https://lordicon.com/icons/wired/flat/447-water-drop.gif',
      primary:`${humidity}%`,
    },
    {
      src:'https://lordicon.com/icons/wired/gradient/812-wind.gif',
      primary:`${speed.toFixed()}m/s`,
    },
  ]

  return (
    <>
    <h1 className='text-center' style={{color:'#0E172C'}}>Current Weather🌦️</h1>
   <section className='container border border-primary mt-4 rounded-3' id='g1'>
      
      <div className="row">
      <span className='text-center my-3 p-3 fw-bold'>📌Today {currentdatetime.toLocaleString()}</span>
      </div>
     <div className="row">
      <div className="col-sm-12 col-md-4 col-lg-4 col-12">
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        <p>{description}</p>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-4 col-12 my-auto">
        <span className={flag}></span>
        <span className='fw-bold'>{city}</span>
      </div>
      <div className="col-sm-12 col-md-4 col-lg-4 col-12">
        <Datalist items={items}/>
      </div>
     </div>
   </section>
   </>
  )
}


export default  Weathercomp
