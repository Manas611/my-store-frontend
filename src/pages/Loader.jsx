import React from 'react'
import { FallingLines } from 'react-loader-spinner'

function Loader() {
  return (
    <div className='mr-auto ml-[40%]'>
    <FallingLines
        color="#000000"
        width="150"
        visible={true}
        ariaLabel="falling-circles-loading"
        />
      </div>
  )
}

export default Loader
