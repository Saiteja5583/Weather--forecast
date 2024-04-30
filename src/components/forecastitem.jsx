import React from 'react'
import Datalist from './datalist';

const Forecastitem = ({forecastdata}) => {
    console.log(forecastdata);

const{
  dt,
  temp,
  humidity,
  speed,
  weather:{icon,description}
}=forecastdata

 const day=new Date(dt*1000).toLocaleDateString("en-US",{weekday:"long"});


 const items=[
  {
    src:'https://classroomclipart.com/image/content7/50871/thumb.gif',
    primary:`${temp.min.toFixed()}°-`,
    secondary:`${temp.max.toFixed()}°`,  // alt+0176 -for degrees symbol 
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
     
      <div  className="card" style={{width: "20rem",display:"flex",}} id='g1'>
          <span className='text-center fw-bold'>{day}</span>
          <Datalist items={items}/> 
      </div>
      </>
  )
}

export default Forecastitem
