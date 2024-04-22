import React, { useEffect, useState } from 'react'
import Card from '../Component/Card'
import axios from 'axios'


function Available() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/buy')
      .then(val => setData(val.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div id='Buy' className='pl-[5%] pr-[4%] pt-10 flex flex-wrap content-between gap-11 justify-center'>

      {/* {console.log(data)} */}

    {data.map(car=>{
      return <Card key={car.id} {...car} />
    })}
    </div>
  )
}

export default Available
