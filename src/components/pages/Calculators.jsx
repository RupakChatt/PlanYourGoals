import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import LumpsumImg from '../../assets/lumpsum.jpg'
import SIP from '../../assets/SIP.png'
import goalPlanning from '../../assets/goalPlanning.jpg'
import EMI from '../../assets/Emi.jpg'
import PPF from '../../assets/PPF.png'
import CAGR from '../../assets/CAGR.jpg'
// import Lumpsum from '../Lumpsum'

const Calculators = () => {
  return (
    <div>
      <Header/>
        <div className='flex flex-col bg-gradient-to-b from-blue-50 to-white'>
          <div className='m-5'>
            <h1 className='text-3xl font-semibold text-center'>Financial Calculators</h1>
          </div>
          <div className='m-2 md:flex md:flex-row md:flex-wrap md:itmes-center md:justify-center'>
            <Link to='/lumpsumCalculator'>
            <div className='max-w-[20rem] max-h-[20rem] shadow-lg rounded-md flex flex-col items-center m-[2rem] cursor-pointer hover:shadow-xl'>
                <img src={LumpsumImg} alt='lumpsum img' className='p-4 h-[16rem] w-[20rem]'/>
                <h3 className='m-4 text-xl font-semibold'>Lumpsum Calculator</h3>
            </div>
            </Link>
            <Link to='/SIPCalculator'>
            <div className='max-w-[20rem] max-h-[20rem] shadow-lg rounded-md flex flex-col items-center m-[2rem] cursor-pointer hover:shadow-xl'>
              <img src={SIP} alt="SIP img" className='p-4 h-[20rem] w-[20rem]'/>
              <h1 className='m-4 text-xl font-semibold'>SIP Calculator</h1>
            </div>
            </Link>
            <Link to='/GoalPlanning'>
            <div className='max-w-[20rem] max-h-[20rem] shadow-lg rounded-md flex flex-col items-center m-[2rem] cursor-pointer hover:shadow-xl'>
              <img src={goalPlanning} alt="Goal Planning img" className='p-4 h-[15rem] w-[20rem]'/>
              <h1 className='m-8 text-xl font-semibold'>Goal Calculator</h1>
            </div>
            </Link>
            <Link to='/EMICalculator'>
            <div className='max-w-[20rem] max-h-[20rem] shadow-lg rounded-md flex flex-col items-center m-[2rem] cursor-pointer hover:shadow-xl'>
              <img src={EMI} alt="EMI img" className='p-4 h-[16rem] w-[20rem]'/>
              <h1 className='m-4 text-xl font-semibold'>EMI Calculator</h1>
            </div>
            </Link>
            <Link to='/PPFCalculator'>
            <div className='max-w-[20rem] max-h-[20rem] shadow-lg rounded-md flex flex-col items-center m-[2rem] cursor-pointer hover:shadow-xl'>
              <img src={PPF} alt="PPF img" className='p-4 h-[17rem] w-[20rem]'/>
              <h1 className='m-4 text-xl font-semibold'>PPF Calculator</h1>
            </div>
            </Link>
            <Link to='/CAGRCalculator'>
            <div className='max-w-[20rem] max-h-[20rem] shadow-lg rounded-md flex flex-col items-center m-[2rem] cursor-pointer hover:shadow-xl'>
              <img src={CAGR} alt="CAGR img" className='p-4 h-[17rem] w-[20rem]'/>
              <h1 className='m-4 text-xl font-semibold'>CAGR Calculator</h1>
            </div>
            </Link>
          </div>
        </div>
    <Footer/>
    </div>
  )
}

export default Calculators