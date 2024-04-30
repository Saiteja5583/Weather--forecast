// importing the required hooks
import { useState, useEffect } from 'react'
import axios from 'axios';

// creating the custom hook for fetching the weatherapi data
export default function useWeather({ city }) {
    console.log(city)
    const [weatherloading, setWeatherLoading] = useState(true)
    const [weathererror, setWeathererror] = useState(null)
    const [weatherdata, setWeatherdata] = useState(null)

    // api information 
   const apiKey='5695129bbf1192f2fbd7f6c9f84e572f'
   const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric'

    useEffect(() => { //mounting
        
        const fetchdata = async () => {
            try {
                setWeatherLoading(true) // initial loading at time of fetching
                setWeathererror(null) // initially no-error
                const response = await axios.get(apiUrl,{
                    params:{
                       q:city,
                       appid:apiKey,
                    }
                });
               
                setWeatherdata(response.data) // passing the data from the result obtained
                console.log(response)

            } catch (error) {
                // passing the error if obtained
                setWeathererror(error)

            } finally {
                // stoping the loading once the data is fetched
                setWeatherLoading(false)

            }
        }
        //  calling the function
        fetchdata();
        // return () => {}; //unmounting -cleaning

    },[city]) //updation phase

  return { weatherdata,weatherloading,weathererror}
}
