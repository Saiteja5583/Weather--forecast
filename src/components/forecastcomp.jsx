// import { useState ,useEffect } from "react"
// import Datalist from "./datalist"

import Forecastitem from "./forecastitem"

const Forecastcomp = ({forecastdata}) => {
  

  console.log(forecastdata)

  


    


  return (
    <>
    <div className="">
      <h1 className="text-center" style={{color:'#0E172C', padding:'20px'}}>7-DAY FORECAST 🌡️</h1>
      <ul className="list-group" style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
        {forecastdata && forecastdata.list.map((item,index)=>(
          <Forecastitem key={index} forecastdata={item}/>
        ))}
      </ul>
      </div>
     
     
      
      
    </>
  )
    
  
}

export default Forecastcomp