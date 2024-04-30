
import React from 'react' 
import useWeather from '../Hooks/useWeather'
import Weathercomp from './weathercomp'
import Forecastcomp from './forecastcomp'
import useForecast from '../Hooks/useForcast'


const Main = ({city}) => {
// passing the city value to custom hook to fetch the data
const {weatherloading,weathererror,weatherdata}=useWeather({city})
const { forecastdata, forecastloading, forecasterror}=useForecast({city});
// console.log(forecastdata);
  if(!city){
    return(
      <section style={{height:'70vh'}} className='container text-center py-3'>
       <p className='text-primary fw-bold text-capitalize bg-warning p-3 w-50 mx-auto'>Plz enter a city in search🧐</p>
     </section>
    )
  }


  if(weatherloading && forecastloading){
    return(
      <section style={{height:'70vh'}} className='container text-center py-3'>
       <p className='text-primary fw-bold text-capitalize bg-secondary p-3 w-50 mx-auto'>loading..🛩</p>
     </section>
    )
  }

  if(weathererror || forecasterror){
    return(
      <section style={{height:'70vh'}} className='container text-center py-3'>
       <p className='text-primary fw-bold text-capitalize bg-danger p-3 w-50 mx-auto'>city not found☹</p>
     </section>
    )
  }
 

  return(
    <>
   <section style={{height:'70vh'}}>
     {!weatherloading && !weathererror && (
      <Weathercomp weatherdata={weatherdata}/>
     )}
   </section>

   <section style={{height:'60vh', margin:'20px', padding: '10px'}}>
     {
      !forecastloading && !forecasterror && (
        <Forecastcomp forecastdata={forecastdata}/>
      )
     }

   </section>

 

   </>
  )

}

export default Main
