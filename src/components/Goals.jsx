import React from 'react'


const Goals = ({formData, setFormData}) => {

  return (
    <div className='lg:flex lg:flex-col lg:itmes-center ml-7'>

      <div className='lg:flex lg:flex-wrap'>
        <h3 className='text-center text-blue-400'>Please fill at least one goal to get proper results</h3>
      <form className='md:flex md:flex-row md:items-center md:justify-center'>
        <div className='flex flex-col m-5 md:flex lg:flex-col'>
          <label htmlFor="goal" className='font-semibold'>Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.goal} onChange={(e) => setFormData({ ...formData, goal: e.target.value })} required/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentGoalValue " className='font-semibold'>Current value of Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.currentGoalValue} onChange={(e) => setFormData({ ...formData, currentGoalValue: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="yearsToFulfillment" className='font-semibold'>Years to Goal fulfillment</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.yearsToGoalFulfillment} onChange={(e) => setFormData({ ...formData, yearsToGoalFulfillment: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentInvestmentForGoal" className='font-semibold'>Current Investment for Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.currentInvestmentForGoal} onChange={(e) => setFormData({ ...formData, currentInvestmentForGoal: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentInvestmentForGoal" className='font-semibold'>Rate of Investment(%)</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600  max-w-[10rem]' value={formData.currentInvestmentRate} onChange={(e) => setFormData({ ...formData, currentInvestmentRate: e.target.value })}/>
        </div>
      </form>

        <hr />

      <form className='md:flex md:flex-row md:items-center md:justify-center'>
        <div className='flex flex-col m-5'>
          <label htmlFor="goal" className='font-semibold'>Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.goal1} onChange={(e) => setFormData({ ...formData, goal1: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentGoalValue " className='font-semibold'>Current value of Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.currentGoalValue1} onChange={(e) => setFormData({ ...formData, currentGoalValue1: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="yearsToFulfillment" className='font-semibold'>Years to Goal fulfillment</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.yearsToGoalFulfillment1} onChange={(e) => setFormData({ ...formData, yearsToGoalFulfillment1: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentInvestmentForGoal" className='font-semibold'>Current Investment for Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.currentInvestmentForGoal1} onChange={(e) => setFormData({ ...formData, currentInvestmentForGoal1: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentInvestmentForGoal" className='font-semibold'>Rate of Investment(%)</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.currentInvestmentRate1} onChange={(e) => setFormData({ ...formData, currentInvestmentRate1: e.target.value })}/>
        </div>
      </form>

      <hr />

      <form className='md:flex md:flex-row md:items-center md:justify-center'>
        <div className='flex flex-col m-5'>
          <label htmlFor="goal" className='font-semibold'>Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.goal2} onChange={(e) => setFormData({ ...formData, goal2: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentGoalValue " className='font-semibold'>Current value of Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.currentGoalValue2} onChange={(e) => setFormData({ ...formData, currentGoalValue2: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="yearsToFulfillment" className='font-semibold'>Years to Goal fulfillment</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.yearsToGoalFulfillment2} onChange={(e) => setFormData({ ...formData, yearsToGoalFulfillment2: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentInvestmentForGoal" className='font-semibold'>Current Investment for Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.currentInvestmentForGoal2} onChange={(e) => setFormData({ ...formData, currentInvestmentForGoal2: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentInvestmentForGoal" className='font-semibold'>Rate of Investment(%)</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.currentInvestmentRate2} onChange={(e) => setFormData({ ...formData, currentInvestmentRate2: e.target.value })}/>
        </div>
      </form>
      
      <hr />

      <form className='md:flex md:flex-row md:items-center md:justify-center'>
        <div className='flex flex-col m-5'>
          <label htmlFor="goal" className='font-semibold'>Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.goal3} onChange={(e) => setFormData({ ...formData, goal3: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentGoalValue " className='font-semibold'>Current value of Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.currentGoalValue3} onChange={(e) => setFormData({ ...formData, currentGoalValue3: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="yearsToFulfillment" className='font-semibold'>Years to Goal fulfillment</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.yearsToGoalFulfillment3} onChange={(e) => setFormData({ ...formData, yearsToGoalFulfillment3: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentInvestmentForGoal" className='font-semibold'>Current Investment for Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.currentInvestmentForGoal3} onChange={(e) => setFormData({ ...formData, currentInvestmentForGoal3: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentInvestmentForGoal" className='font-semibold'>Rate of Investment(%)</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.currentInvestmentRate3} onChange={(e) => setFormData({ ...formData, currentInvestmentRate3: e.target.value })}/>
        </div>
      </form>

      <hr />

      <form className='md:flex md:flex-row md:items-center md:justify-center'>
        <div className='flex flex-col m-5'>
          <label htmlFor="goal" className='font-semibold'>Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.goal4} onChange={(e) => setFormData({ ...formData, goal4: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentGoalValue " className='font-semibold'>Current value of Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.currentGoalValue4} onChange={(e) => setFormData({ ...formData, currentGoalValue4: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="yearsToFulfillment" className='font-semibold'>Years to Goal fulfillment</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.yearsToGoalFulfillment4} onChange={(e) => setFormData({ ...formData, yearsToGoalFulfillment4: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentInvestmentForGoal" className='font-semibold'>Current Investment for Goal</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.currentInvestmentForGoal4} onChange={(e) => setFormData({ ...formData, currentInvestmentForGoal4: e.target.value })}/>
        </div>
        <div className='flex flex-col m-5'>
          <label htmlFor="currentInvestmentForGoal" className='font-semibold'>Rate of Investment(%)</label>
          <input type="text" className='p-1 border rounded-lg outline-none border-slate-600 max-w-[10rem]' value={formData.currentInvestmentRate4} onChange={(e) => setFormData({ ...formData, currentInvestmentRate4: e.target.value })}/>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Goals