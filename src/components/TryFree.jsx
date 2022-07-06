import React from 'react'
import tryFree from '../assets/tryFree.png'

const TryFree = () => {
  return (
    <div className='m-4 md:flex md:flex-row md:items-center md:justify-evenly'>
        <div>
            <h1 className='text-3xl font-semibold lg:text-5xl'>Try out our service for free and take a step closer to your goals</h1>
        </div>
        <div>
            <img src={tryFree} alt="tryFree" />
        </div>
    </div>
  )
}

export default TryFree