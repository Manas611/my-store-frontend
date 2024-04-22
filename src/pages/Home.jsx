import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import image from '../Images/CAR.jpg'
import { Typewriter } from 'react-simple-typewriter'


import { useNavigate } from "react-router-dom";

const myStyle = {
  backgroundImage:`url(${image})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: 'center',

};


function Home() {

 
  useEffect(() => {
    axios.get('http://localhost:4000/')
      .then(response => {
        console.log('1111111', response);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const navigate = useNavigate();

  return (
    <div id='Home'  style={myStyle} className='min-h-screen m-auto'>
      <div className='text-white text-wrap text-[75px] max-sm:text-[40px] font-semibold text-center'
      style={{fontFamily:'Roboto'}}
      >

      Drive Your{' '}

        <Typewriter
            words={['Joy, Limitless Every Day', 'Dreams, No Limits Allowed', 'Journey, Limits Left Behind', 'Destiny, Break Free Now','Passion, Limits Disappear']}
            loop={0}
            cursor
            cursorStyle='..'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />

       
      </div>

      

      {/* <div className='text-white flex justify-between mt-[50px] text-[75px] max-sm:text-[40px] max-sm:justify-around font-semibold'>
        <div className='text pl-[150px] max-sm:pl-[30px]'>
          FOR
        </div>
        <div className='text pr-[200px] max-sm:pr-[30px]'>
          YOU
        </div>
      </div> */}




      <div className='text-white pt-[80px] text-center'>
        <button className='border border-black bg-red-600 text-[25px] text-center pb-1 rounded h-[50px] w-[150px] ' onClick={() => navigate('/buy')}>BUY Now</button>
      </div>

      {/* <div className='text-white'>
        <button onClick={() => navigate('/sell')}>SELL</button>

      </div>
      <div className='text-white'>
        <button onClick={() => navigate('/buy')}>See Available Stock</button>

      </div> */}
    </div>
  )
}

export default Home
