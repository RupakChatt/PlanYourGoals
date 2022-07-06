import React from 'react'
import HeroImg from '../assets/Hero.png'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='flex flex-col items-center md:flex md:flex-row md:items-center md:justify-around'>
      <div className='m-4 md:flex md:flex-col md:flex-wrap'>
        <h1 className='text-3xl font-semibold lg:text-5xl'>Have financial goals and worrying how to achieve them?</h1>
        <h3 className='text-xl font-medium text-gray-600 lg:text-2xl'>Worry no further for we got your back. <Link to='/signup'><button className='text-blue-500 hover:text-blue-600 hover:font-semibold'>Sign up</button></Link> to get started!</h3>
      </div>
      <div className='md:max-w-[80rem]'>
        <img src={HeroImg} alt="HeroImage"/>
      </div>
    </div>
  )
}

export default Hero