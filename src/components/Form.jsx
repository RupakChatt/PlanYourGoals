import React, { useState } from 'react'
import { formFields } from '../formFields'
import PersonalInfo from './PersonalInfo'
import IncomeExpense from './IncomeExpense'
import AssetsLiabilities from './AssetsLiabilites'
import Goals from './Goals'
import { updateDoc, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase-config'
import { UserAuth } from '../AuthContext'
import Plan from './Plan'


const Form = () => {

  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState(formFields)
  const [userData, setUserData] = useState({})
  const { user } = UserAuth()

  const FormTitles = ['Personal Information', 'Income & Expense', 'Assets & Liabilities', 'Goals', 'Plan']

  const dataID = doc(db, 'users', `${user?.email}`)

  const handleSubmit = async () => {

    if (user?.email) {
      await updateDoc(dataID, {
        userInfo: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          age: formData.age,
          occupation: formData.occupation,
          income: formData.income,
          expense: formData.expense,
          insuranceAndInvestment: formData.insuranceAndInvestment,
          fixedAssets: formData.fixedAssets,
          equity: formData.equity,
          debt: formData.debt,
          cash: formData.cash,
          otherAssets: formData.otherAssets,
          homeLoan: formData.homeLoan,
          vehicleLoan: formData.vehicleLoan,
          otherLoan: formData.otherLoan,
          goal: formData.goal,
          goal1: formData.goal1,
          goal2: formData.goal2,
          goal3: formData.goal3,
          goal4: formData.goal4,
          currentGoalValue: formData.currentGoalValue,
          currentGoalValue1: formData.currentGoalValue1,
          currentGoalValue2: formData.currentGoalValue2,
          currentGoalValue3: formData.currentGoalValue3,
          currentGoalValue4: formData.currentGoalValue4,
          yearsToGoalFulfillment: formData.yearsToGoalFulfillment,
          yearsToGoalFulfillment1: formData.yearsToGoalFulfillment1,
          yearsToGoalFulfillment2: formData.yearsToGoalFulfillment2,
          yearsToGoalFulfillment3: formData.yearsToGoalFulfillment3,
          yearsToGoalFulfillment4: formData.yearsToGoalFulfillment4,
          currentInvestmentForGoal: formData.currentInvestmentForGoal,
          currentInvestmentForGoal1: formData.currentInvestmentForGoal1,
          currentInvestmentForGoal2: formData.currentInvestmentForGoal2,
          currentInvestmentForGoal3: formData.currentInvestmentForGoal3,
          currentInvestmentForGoal4: formData.currentInvestmentForGoal4,
          currentInvestmentRate: formData.currentInvestmentRate,
          currentInvestmentRate1: formData.currentInvestmentRate1,
          currentInvestmentRate2: formData.currentInvestmentRate2,
          currentInvestmentRate3: formData.currentInvestmentRate3,
          currentInvestmentRate4: formData.currentInvestmentRate4,
        }
      })

      alert('Form has been submitted!')
      setPage((currPage) => currPage + 1)
    }
    else {
      alert('Something went wrong. Try again.')
    }
  }

  const getUserInfo = async () => {
    const data = await getDoc(dataID)
    setUserData(data.data())
    console.log(data.data())
  }


  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />
    } else if (page === 1) {
      return <IncomeExpense formData={formData} setFormData={setFormData} />
    } else if (page === 2) {
      return <AssetsLiabilities formData={formData} setFormData={setFormData} />
    } else if (page === 3) {
      return <Goals formData={formData} setFormData={setFormData} />
    }
    else {
      return <Plan userData={userData} />
    }
  }

  const toPlan=()=>{
    return setPage(FormTitles.length-1)
  }

  const toForm=()=>{
    return setPage(FormTitles.length-5)
  }

  return (
    <div>
      <div className='flex flex-row items-center justify-center'>
        <button className='outline-none pt-1 pb-1 pl-2 pr-2 mr-4 text-lg text-white bg-blue-600 rounded-md hover:bg-gradient-to-t hover:from-blue-600 hover:to-blue-400' onClick={toForm}>Form</button>
        <button className='outline-none pt-1 pb-1 pl-2 pr-2 ml-4 text-lg text-white bg-blue-600 rounded-md hover:bg-gradient-to-t hover:from-blue-600 hover:to-blue-400' onClick={()=> {
          toPlan()
          getUserInfo()
        }}>Plan</button>
      </div>
    <div className='flex flex-col items-center md:flex md:flex-col md:items-center'>
      <div>
        <h1 className='mt-4 text-4xl font-bold'>{FormTitles[page]}</h1>
      </div>
      <div>
        {PageDisplay()}
      </div>
      <div className='flex flex-row items-center justify-center'>
        <button disabled={page === 0}
        hidden={page === FormTitles.length - 1}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }} className='pt-1 pb-1 pl-2 pr-2 mr-5 text-white bg-blue-600 rounded-lg hover:bg-gradient-to-t hover:from-blue-600 hover:to-blue-400 disabled:bg-gray-500'>Back</button>
        <button
          hidden={page === FormTitles.length - 1}
          onClick={(e) => {
            e.preventDefault()
            if (page === FormTitles.length - 2) {
              handleSubmit()
              getUserInfo()
            } else {
              setPage((currPage) => currPage + 1)
            }
          }} className='pt-1 pb-1 pl-2 pr-2 text-white bg-blue-600 rounded-lg hover:bg-gradient-to-t hover:from-blue-600 hover:to-blue-400 disabled:bg-gray-500'>{page === FormTitles.length - 2 ? "Submit" : "Next"}</button>
      </div>
    </div>
    </div>
  )
}

export default Form