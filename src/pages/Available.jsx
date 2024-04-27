import React, { useEffect, useState } from 'react'
import Card from '../Component/Card'
import Loader from './Loader'
import axios from 'axios'


function Available() {

  const [data, setData] = useState([])
  const [Loading,setLoading] = useState(false);
  const apiHost = process.env.REACT_APP_API_HOST  

  const dataSend =  ()=>{
const val =  axios.get(`${apiHost}buy`)
// setData(val)
    .then(val => setData(val.data))
    .catch(err => console.log(err))

    return val;
  }

  useEffect(() =>  {
    setLoading(true)
    dataSend()
    .then((res)=>setLoading(false))
    .catch((e)=>console.log(e))
  }, [apiHost])

  return (
    <>
    {
      Loading && <Loader/>
    }
    <div id='Buy' className='pl-[5%] pr-[4%] pt-10 flex flex-wrap content-between gap-11 justify-center'>

      {/* {console.log(data)} */}

      {data.map(car => {
        return <Card key={car.id} {...car} />
      })}
    </div>
    </>
  )
}

export default Available
