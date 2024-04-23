import React from 'react'

function Navbar() {
    return (


        <nav className="bg-black border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className=" flex flex-wrap items-center max-md:justify-center justify-between mx-auto px-4 py-2">

                <a href="/" className="text-white font-medium font-serif text-[40px] pl-16 max-sm:pl-0 max-sm:text-[25px] ">KHANNA CAR BAZAAR</a>
                <div className="flex max-sm:text-[15px]">
                    {/* <div classNameName='text-black pr-14'>
                        <a href="/" className=" font-medium text-[25px] max-sm:text-[15px] max-sm:px-1 border rounded-md py-[0.5px] px-2 bg-slate-200 text-black">Home</a>
                    </div> */}

                    <div className='text-black pr-14 '>
                        <a href="Buy" className=" font-medium text-[25px] max-sm:text-[15px] max-sm:px-1 border rounded-md py-[0.5px] px-2 bg-slate-200 text-black ">BUY</a>
                    </div>

                    <div className='text-black pr-14'>
                        <a href="Sell" className="  font-medium text-[25px] max-sm:text-[15px] max-sm:px-1 border rounded-md py-[0.5px] px-2 bg-slate-200 text-black">SELL</a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
