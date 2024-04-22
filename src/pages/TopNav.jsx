import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";



function TopNav() {
  return (
    <div className='flex justify-around bg-white py-2 mt-[20px] border-t-2 border-black' >
      <div className='pl-14 max-sm:pl-0'>

        <a href="http://www.facebook.com/profile.php?id=100008925992667&mibextid=ZbWKwL" target='/'>
          <FaFacebook className='text h-[20px] w-[20px]' />
        </a>

      </div>

      <div className='flex max-sm:flex-col'>

        <a href="tel:+91-9896240223" className='flex'>
          <FaPhone className='text-red-600 mt-2' />
          <div className='pl-3 text-[20px] max-sm:text-[16px]' >9896240223</div>
        </a>

        <a href="tel:+91-7988623942" className='flex'>
          <div className='pl-[30px] text-[20px] max-sm:text-[16px]' >7988623942</div>
        </a>

      </div>
      <div className='flex pr-14 max-sm:pr-0'>
        <IoLocation className='text-red-600 mt-2' />
        <div className='pl-3 text-[20px] max-sm:text-[16px]'>
          Kamani Chownk, Yamuna Nagar, Haryana

        </div>
      </div>
    </div>
  )
}

export default TopNav
