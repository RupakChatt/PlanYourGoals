import React from 'react'
import analysis from '../assets/analysis.png'
import courseOfAction from '../assets/courseOfAction.png'
import currentFinSituation from '../assets/currentFinSituation.png'
import FinGoals from '../assets/FinGoals.png'
import plan from '../assets/plan.PNG'

const HowItWorks = () => {
  return (
    <div className='flex flex-col items-center mt-[5rem]'>
        <div>
            <h1 className='lg:text-5xl text-3xl font-semibold'>How It Works</h1>
        </div>
        <div className='md:flex md:flex-row md:flex-wrap md:items-center md:justify-evenly m-7'>
                <div className='max-w-[15rem]  flex flex-col items-center md:m-[3rem] m-[2rem]'>
                    <img src={currentFinSituation} alt="finance situation" />
                    <h3 className='text-medium text-xl'>Determining your current financial situation</h3>
                </div>
                <div className='max-w-[15rem] flex flex-col items-center md:m-[3rem] m-[2rem]'>
                <img src={FinGoals} alt="finance goals" />
                    <h3 className='text-medium text-xl'>Establishing your goals</h3>
                </div>
                <div className='max-w-[15rem] flex flex-col items-center md:m-[3rem] m-[2rem]'>
                <img src={analysis} alt="analysis" />
                    <h3 className='text-medium text-xl'>Analysing factors like risk apetite, etc.</h3>
                </div>
                <div className='max-w-[15rem] flex flex-col items-center md:m-[3rem] m-[2rem]'>
                <img src={courseOfAction} alt="action" />
                    <h3 className='text-medium text-xl'>Determining a course of action</h3>
                </div>
                <div className='max-w-[15rem] flex flex-col items-center md:m-[3rem] m-[2rem]'>
                <img src={plan} alt="plan" />
                    <h3 className='text-medium text-xl'>Formulating the plan</h3>
                </div>
        </div>
    </div>
  )
}

export default HowItWorks