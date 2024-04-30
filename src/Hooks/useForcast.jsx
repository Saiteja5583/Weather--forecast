// importing the required hooks
import { useState, useEffect } from 'react'
import axios from 'axios';

// creating the custom hook for fetching the forecastapi data
export default function useForecast({ city }) {
    const [forecastloading, setForecastLoading] = useState(true)
    const [forecasterror, setForecasterror] = useState(null)
    const [forecastdata, setForecastdata] = useState(null)

    // api information 
   const apiKey='bd5e378503939ddaee76f12ad7a97608'
   const apiUrl='https://api.openweathermap.org/data/2.5/forecast/daily'

    useEffect(() => { //mounting
        
        const fetchdata = async () => {
            try {
                setForecastLoading(true) // initial loading at time of fetching
                setForecasterror(null) // initially no-error
                const response = await axios.get(apiUrl,{
                    params:{
                        q:city,
                        cnt:7,
                        units:'metric',
                        appid:apiKey
                    }
                })
               
                setForecastdata(response.data) // passing the data from the result obtained
                console.log(response)

            } catch (error) {
                // passing the error if obtained
                setForecasterror(error)

            } finally {
                // stoping the loading once the data is fetched
                setForecastLoading(false)

            }
        }
        //  calling the function
        fetchdata();
        // return () => {}; //unmounting -cleaning

    },[city]) //updation phase

  return { forecastdata,forecastloading,forecasterror}
}
