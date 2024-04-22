import React from 'react'

function Navbar() {
    return (


        <nav class="bg-black border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div class=" flex flex-wrap items-center max-md:justify-center justify-between mx-auto px-4 py-2">

                <a href="/" class="text-white font-medium font-serif text-[40px] pl-16 max-sm:pl-0 max-sm:text-[25px] ">KHANNA CAR BAZAAR</a>
                <div class="flex max-sm:text-[15px]">
                    {/* <div className='text-black pr-14'>
                        <a href="/" class=" font-medium text-[25px] max-sm:text-[15px] max-sm:px-1 border rounded-md py-[0.5px] px-2 bg-slate-200 text-black">Home</a>
                    </div> */}

                    <div className='text-black pr-14 '>
                        <a href="Buy" class=" font-medium text-[25px] max-sm:text-[15px] max-sm:px-1 border rounded-md py-[0.5px] px-2 bg-slate-200 text-black ">BUY</a>
                    </div>

                    <div className='text-black pr-14'>
                        <a href="Sell" class="  font-medium text-[25px] max-sm:text-[15px] max-sm:px-1 border rounded-md py-[0.5px] px-2 bg-slate-200 text-black">SELL</a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
