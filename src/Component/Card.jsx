import React from 'react'

function Card(car) {
  return (
    <div className='border border-black rounded-md  h-[100%]'>
      <div style={{ maxHeight: 300, maxWidth: 300 }}>
        <img src={car.Image} alt="IMAGE" style={{aspectRatio:16/9}}/>
      </div>


      <div className='text text-center'>
        <div className='text-[20px] pb-1 font-semibold'>
          {car.title}
        </div>

        <div className='text font-semibold pb-2 text-[20px] text-slate-400'>
          <ul>
            <li>{car.km} km</li>
              <li>{car.Fuel}</li>
              <li>{car.Transmision}</li>
          </ul>
        </div>

        <div className='text font-extrabold text-[25px] w-[100%]'>
          Rs {car.Price}
        </div>
      </div>
    </div>
  )
}

export default Card
