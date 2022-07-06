import React from 'react'



const Plan = ({ userData }) => {

  const income = parseInt(userData?.userInfo?.income)
  const expense = parseInt(userData?.userInfo?.expense)
  const insuranceAndInvestment = parseInt(userData?.userInfo?.insuranceAndInvestment)
  const totalExpense = parseInt(expense + insuranceAndInvestment)
  const savings = parseInt(income - totalExpense)

  const fixedAssets = parseInt(userData?.userInfo?.fixedAssets)
  const equity = parseInt(userData?.userInfo?.equity)
  const debt = parseInt(userData?.userInfo?.debt)
  const cash = parseInt(userData?.userInfo?.cash)
  const otherAssets = parseInt(userData?.userInfo?.otherAssets)
  const homeLoan = parseInt(userData?.userInfo?.homeLoan)
  const vehicleLoan = parseInt(userData?.userInfo?.vehicleLoan)
  const otherLoan = parseInt(userData?.userInfo?.otherLoan)
  const totalAssets = Math.floor(fixedAssets + equity + debt + cash + otherAssets)
  const totalLiabilities = Math.floor(homeLoan + vehicleLoan + otherLoan)
  const netWorth = Math.floor(totalAssets - totalLiabilities)

  const goal = userData?.userInfo?.goal
  const goal1 = userData?.userInfo?.goal1
  const goal2 = userData?.userInfo?.goal2
  const goal3 = userData?.userInfo?.goal3
  const goal4 = userData?.userInfo?.goal4
  const currentGoalValue = parseInt(userData?.userInfo?.currentGoalValue)
  const currentGoalValue1 = parseInt(userData?.userInfo?.currentGoalValue1)
  const currentGoalValue2 = parseInt(userData?.userInfo?.currentGoalValue2)
  const currentGoalValue3 = parseInt(userData?.userInfo?.currentGoalValue3)
  const currentGoalValue4 = parseInt(userData?.userInfo?.currentGoalValue4)
  const yearsToGoalFulfillment = parseInt(userData?.userInfo?.yearsToGoalFulfillment)
  const yearsToGoalFulfillment1 = parseInt(userData?.userInfo?.yearsToGoalFulfillment1)
  const yearsToGoalFulfillment2 = parseInt(userData?.userInfo?.yearsToGoalFulfillment2)
  const yearsToGoalFulfillment3 = parseInt(userData?.userInfo?.yearsToGoalFulfillment3)
  const yearsToGoalFulfillment4 = parseInt(userData?.userInfo?.yearsToGoalFulfillment4)

  const currentInvestmentForGoal = parseInt(userData?.userInfo?.currentInvestmentForGoal)
  const currentInvestmentForGoal1 = parseInt(userData?.userInfo?.currentInvestmentForGoal1)
  const currentInvestmentForGoal2 = parseInt(userData?.userInfo?.currentInvestmentForGoal2)
  const currentInvestmentForGoal3 = parseInt(userData?.userInfo?.currentInvestmentForGoal3)
  const currentInvestmentForGoal4 = parseInt(userData?.userInfo?.currentInvestmentForGoal4)

  const currentInvestmentRate = parseInt(userData?.userInfo?.currentInvestmentRate)
  const currentInvestmentRate1 = parseInt(userData?.userInfo?.currentInvestmentRate1)
  const currentInvestmentRate2 = parseInt(userData?.userInfo?.currentInvestmentRate2)
  const currentInvestmentRate3 = parseInt(userData?.userInfo?.currentInvestmentRate3)
  const currentInvestmentRate4 = parseInt(userData?.userInfo?.currentInvestmentRate4)

  const currInvRate = currentInvestmentRate / 100
  const currInvRate1 = currentInvestmentRate1 / 100
  const currInvRate2 = currentInvestmentRate2 / 100
  const currInvRate3 = currentInvestmentRate3 / 100
  const currInvRate4 = currentInvestmentRate4 / 100

  const fvOfCurrentInv = Math.floor(currentInvestmentForGoal * [Math.pow(1 + currInvRate, yearsToGoalFulfillment)])
  const fvOfCurrentInv1 = Math.floor(currentInvestmentForGoal1 * [Math.pow(1 + currInvRate1, yearsToGoalFulfillment)])
  const fvOfCurrentInv2 = Math.floor(currentInvestmentForGoal2 * [Math.pow(1 + currInvRate2, yearsToGoalFulfillment)])
  const fvOfCurrentInv3 = Math.floor(currentInvestmentForGoal3 * [Math.pow(1 + currInvRate3, yearsToGoalFulfillment)])
  const fvOfCurrentInv4 = Math.floor(currentInvestmentForGoal4 * [Math.pow(1 + currInvRate4, yearsToGoalFulfillment)])

  const ratePow = Math.pow(1 + 0.08, yearsToGoalFulfillment)
  const ratePow1 = Math.pow(1 + 0.08, yearsToGoalFulfillment1)
  const ratePow2 = Math.pow(1 + 0.08, yearsToGoalFulfillment2)
  const ratePow3 = Math.pow(1 + 0.08, yearsToGoalFulfillment3)
  const ratePow4 = Math.pow(1 + 0.08, yearsToGoalFulfillment4)

  const futureValue = Math.floor(currentGoalValue * ratePow)
  const futureValue1 = Math.floor(currentGoalValue1 * ratePow1)
  const futureValue2 = Math.floor(currentGoalValue2 * ratePow2)
  const futureValue3 = Math.floor(currentGoalValue3 * ratePow3)
  const futureValue4 = Math.floor(currentGoalValue4 * ratePow4)

  const balance = Math.floor(futureValue - fvOfCurrentInv)
  const balance1 = Math.floor(futureValue1 - fvOfCurrentInv1)
  const balance2 = Math.floor(futureValue2 - fvOfCurrentInv2)
  const balance3 = Math.floor(futureValue3 - fvOfCurrentInv3)
  const balance4 = Math.floor(futureValue4 - fvOfCurrentInv4)



  return (
    <div className='mt-6'>
      {userData?.userInfo?.firstName && (
        <>
      <h1 className='text-center text-red-600'>* Plan suggested here is only indicative. To get your proper financial planning done contact a professional planner</h1>
      <div className='p-3 mt-4 border border-blue-600 rounded-md shadow-lg shadow-blue-200 md:flex md:flex-row md:items-center md:justify-between'>
        <h3 className='text-xl font-medium'><b>Name:</b> {userData?.userInfo?.firstName}</h3>
        <h3 className='text-xl font-medium'><b>Surname: </b>{userData?.userInfo?.lastName}</h3>
        <h3 className='text-xl font-medium'><b>Age:</b> {userData?.userInfo?.age}</h3>
        <h3 className='text-xl font-medium'><b>Occupation:</b> {userData?.userInfo?.occupation}</h3>
      </div>
      {/* Income-Expense*/}
      <div className='flex flex-col items-center mt-6 lg:flex lg:flex-col lg:items-center lg:justify-center'>
        <h2 className='text-3xl font-semibold text-center'>Income-Expense Analysis</h2>
        <div className='text-center text-white bg-blue-600 shadow-blue-400 shadow-lg rounded-md flex flex-col items-center justify-center md:flex md:flex-row md:items-center md:justify-between max-w-[60rem]'>
          <div className='mt-4 mb-4 md:ml-[4rem] md:mr-[3rem]'>
            <div><h2 className='text-lg font-semibold'>Income</h2></div>
            <div>
              <h3>Monthly: {income ? income.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h3>
              <h3>Yearly: {income * 12 ? (income * 12).toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h3>
            </div>
          </div>
          <hr />
          <div className='mt-4 mb-4 md:ml-[3rem] md:mr-[4rem]'>
            <div><h2 className='text-lg font-semibold'>Expense</h2></div>
            <div>
              <h3>Monthly: {expense ? expense.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h3>
              <h3>Yearly: {expense * 12 ? (expense * 12).toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h3>
            </div>
          </div>
          <hr />
          <div className='mt-4 mb-4 md:ml-[4rem] md:mr-[3rem] p-3'>
            <div><h2 className='text-lg font-semibold'>Insurance & Investments</h2></div>
            <div>
              <h3>Monthly: {insuranceAndInvestment ? insuranceAndInvestment.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h3>
              <h3>Yearly: {insuranceAndInvestment * 12 ? (insuranceAndInvestment * 12).toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h3>
            </div>
          </div>
          <hr />
          <div className='mt-4 mb-4 md:ml-[4rem] md:mr-[3rem]'>
            <div><h2 className='text-lg font-semibold'>Savings</h2></div>
            <div>
              <h3>Monthly: {savings ? savings.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h3>
              <h3>Yearly: {savings * 12 ? (savings * 12).toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h3>
            </div>
          </div>
        </div>       
      </div>
      {/* Net Worth */}
      <div className='mt-[4rem] lg:flex lg:flex-col lg:items-center lg:justify-center flex flex-col items-center'>
        <h2 className='text-3xl font-semibold text-center'>Net Worth</h2>
        <div className='md:flex md:flex-row md:flex-wrap md:items-start md:justify-center bg-blue-600 shadow-lg shadow-blue-500 rounded-md  max-w-[70rem]'>
          <div className='m-4 lg:mr-[7rem] lg:ml-[7rem] lg:mb-3 lg:mt-3  text-white'>
            <h2 className='mb-4 text-lg'><b>Assets</b></h2>
            <h4><b>Fixed Assets:</b> {fixedAssets ? fixedAssets.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
            <h4><b>Equity:</b> {equity ? equity.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
            <h4><b>Debt:</b> {debt ? debt.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
            <h4><b>Cash:</b> {cash ? cash.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
            <h4><b>Other Assets:</b> {otherAssets ? otherAssets.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
          </div>
          <div className='m-4 md:mr-[7rem] md:ml-[7rem] md:mb-3 md:mt-3 text-white'>
            <h2 className='mb-4 text-lg'><b>Liabilites(Outstanding Amt.)</b></h2>
            <h4><b>Home Loan:</b> {homeLoan ? homeLoan.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
            <h4><b>Vehicle Loan:</b> {vehicleLoan ? vehicleLoan.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
            <h4><b>Other Loan:</b> {otherLoan ? otherLoan.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
          </div>
        </div>
          <div className='m-4 p-2 text-white text-center flex flex-col md:flex md:flex-row bg-blue-600 shadow-lg shadow-blue-500 rounded-md md:pl-[4rem] md:pr-[4rem]'>
            <h2 className='text-lg'><b>Net Worth(Assets - Liabilites):</b> {netWorth ? netWorth.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h2>
          </div>
      </div>
      {/* Goals */}
      <div className='flex flex-col items-center justify-center w-full mt-6'>
        <h2 className='text-3xl font-semibold text-center'>Goals</h2>
        <div className='m-4 md:flex md:flex-row md:flex-wrap md:items-center md:justify-evenly'>

          <div className='m-4 p-4 md:flex md:flex-col md:flex-wrap md:justify-between bg-blue-600 shadow-lg shadow-blue-500 text-white rounded-md max-w-[30rem]'>
            <div className='mb-4'><h2 className='text-3xl font-semibold text-center'>{goal ? goal : <p className='text-center'>-</p>}</h2></div>
            <div className='md:flex md:flex-col md:flex-wrap md:items-left md:justify-evenly'>
              <h4 className='m-1 text-lg'><b>Current Goal Value:</b> {currentGoalValue ? currentGoalValue.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Years to Fulfillment:</b> {yearsToGoalFulfillment ? yearsToGoalFulfillment.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Current Inv. for Goal:</b> {currentInvestmentForGoal ? currentInvestmentForGoal.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Current Inv. @:</b> {currentInvestmentRate ? currentInvestmentRate.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}%</h4>
              <h4 className='m-1 text-lg'><b>F.V of Current Inv.:</b> {fvOfCurrentInv ? fvOfCurrentInv.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>F.V of Goal:</b> {futureValue ? futureValue.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Balance:</b> {balance ? balance.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
            </div>
          </div>

          {goal1 ? <div className='m-4 md:flex md:flex-col md:flex-wrap md:justify-between bg-blue-600 shadow-lg shadow-blue-500 text-white p-4 rounded-md max-w-[30rem]'>
            <div className='mb-4'><h2 className='text-3xl font-semibold text-center'>{goal1 ? goal1 : <p className='text-center'>-</p>}</h2></div>
            <div className='md:flex md:flex-col md:flex-wrap md:items-left md:justify-evenly'>
              <h4 className='m-1 text-lg'><b>Current Goal Value:</b> {currentGoalValue1 ? currentGoalValue1.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Years to Fulfillment:</b> {yearsToGoalFulfillment1 ? yearsToGoalFulfillment1.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Current Inv. for Goal:</b> {currentInvestmentForGoal1 ? currentInvestmentForGoal1.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Current Inv. @:</b> {currentInvestmentRate1 ? currentInvestmentRate1.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}%</h4>
              <h4 className='m-1 text-lg'><b>F.V of Current Inv.:</b> {fvOfCurrentInv1 ? fvOfCurrentInv1.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>F.V of Goal:</b> {futureValue1 ? futureValue1.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Balance:</b> {balance1 ? balance1.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
            </div>
          </div> : null}

          {goal2 ? <div className='m-4 md:flex md:flex-col md:flex-wrap md:justify-between bg-blue-600 shadow-lg shadow-blue-500 text-white p-4 rounded-md max-w-[30rem]'>
            <div className='mb-4'><h2 className='text-3xl font-semibold text-center'>{goal2 ? goal2 : <p className='text-center'>-</p>}</h2></div>
            <div className='md:flex md:flex-col md:flex-wrap md:items-left md:justify-evenly'>
              <h4 className='m-1 text-lg'><b>Current Goal Value:</b> {currentGoalValue2 ? currentGoalValue2.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Years to Fulfillment:</b> {yearsToGoalFulfillment2 ? yearsToGoalFulfillment2.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Current Inv. for Goal:</b> {currentInvestmentForGoal2 ? currentInvestmentForGoal2.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Current Inv. @:</b> {currentInvestmentRate2 ? currentInvestmentRate2.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}%</h4>
              <h4 className='m-1 text-lg'><b>F.V of Current Inv.:</b> {fvOfCurrentInv2 ? fvOfCurrentInv2.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>F.V of Goal:</b> {futureValue2 ? futureValue2.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Balance:</b> {balance2 ? balance2.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
            </div>
          </div> : null}

          {goal3 ? <div className='m-4 md:flex md:flex-col md:flex-wrap md:justify-between bg-blue-600 shadow-lg shadow-blue-500 text-white p-4 rounded-md max-w-[30rem]'>
            <div className='mb-4'><h2 className='text-3xl font-semibold text-center'>{goal3 ? goal3 : <p className='text-center'>-</p>}</h2></div>
            <div className='md:flex md:flex-col md:flex-wrap md:items-left md:justify-evenly'>
              <h4 className='m-1 text-lg'><b>Current Goal Value:</b> {currentGoalValue3 ? currentGoalValue3.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Years to Fulfillment:</b> {yearsToGoalFulfillment3 ? yearsToGoalFulfillment3.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Current Inv. for Goal:</b> {currentInvestmentForGoal3 ? currentInvestmentForGoal3.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Current Inv. @:</b> {currentInvestmentRate3 ? currentInvestmentRate3.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}%</h4>
              <h4 className='m-1 text-lg'><b>F.V of Current Inv.:</b> {fvOfCurrentInv3 ? fvOfCurrentInv3.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>F.V of Goal:</b> {futureValue3 ? futureValue3.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Balance:</b> {balance3 ? balance3.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
            </div>
          </div> : null}

          {goal4 ? <div className='m-4 md:flex md:flex-col md:flex-wrap md:justify-between bg-blue-600 shadow-lg shadow-blue-500 text-white p-4 rounded-md max-w-[30rem]'>
            <div className='mb-4'><h2 className='text-3xl font-semibold text-center'>{goal4 ? goal4 : <p className='text-center'>-</p>}</h2></div>
            <div className='md:flex md:flex-col md:flex-wrap md:items-left md:justify-evenly'>
              <h4 className='m-1 text-lg'><b>Current Goal Value:</b> {currentGoalValue4 ? currentGoalValue4.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Years to Fulfillment:</b> {yearsToGoalFulfillment4 ? yearsToGoalFulfillment4.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Current Inv. for Goal:</b> {currentInvestmentForGoal4 ? currentInvestmentForGoal4.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Current Inv. @:</b> {currentInvestmentRate4 ? currentInvestmentRate4.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}%</h4>
              <h4 className='m-1 text-lg'><b>F.V of Current Inv.:</b> {fvOfCurrentInv4 ? fvOfCurrentInv4.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>F.V of Goal:</b> {futureValue4 ? futureValue4.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
              <h4 className='m-1 text-lg'><b>Balance:</b> {balance4 ? balance4.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</h4>
            </div>
          </div> : null}
        </div>
      </div>
      {/* Action Plan */}
      <div className='max-w-full mt-7'>
        <h2 className='text-3xl font-semibold text-center'>Action Plan</h2>
        {/* For Goal */}
        <div className='text-white bg-blue-600 rounded-md shadow-lg shadow-blue-500'>
          {goal !== '' && currentGoalValue !== 0 ?
            <div className='p-4'>
              {currentInvestmentForGoal !== 0 ?
                <div>
                  <h2 className='text-xl font-semibold text-center'>For Goal: {goal}</h2>
                  <p>You have a current investment of <b>{currentInvestmentForGoal.toLocaleString(undefined, {maximumFractionDigits:2})} @ {userData?.userInfo?.currentInvestmentRate}%</b> which will become <b>{fvOfCurrentInv.toLocaleString(undefined, {maximumFractionDigits:2})}</b> after <b>{yearsToGoalFulfillment} years</b>. Therefore you need to achieve <b>{balance.toLocaleString(undefined, {maximumFractionDigits:2})}</b> to achieve your goal.</p>
                  <p>
                    {yearsToGoalFulfillment <= 5 ? <p>Since your time horizon for the goal is <b>{yearsToGoalFulfillment} years</b> we recommend <b>not</b> to invest in Equity alone, but rather in a <em>portfolio</em> of Equity and Debt Instruments which will be actively managed according to market conditions.</p> : <p>Since your time horizon is <b>{yearsToGoalFulfillment} years</b> you can invest a major portion in Equity and rest in Debt</p>}
                  </p>
                  <p>It is advised to invest in SIP(Systematic Investment Plan) to even out market fluctuations.</p>
                </div> : <div>
                  <h2 className='text-xl font-semibold text-center'>For Goal: {goal}</h2>
                  <p>As you do not have any current investment for this goal, you need to achieve {futureValue.toLocaleString(undefined, {maximumFractionDigits:2})} to achieve your goal.</p>
                  <p>
                    {yearsToGoalFulfillment <= 5 ? <p>Since your time horizon for the goal is <b>{yearsToGoalFulfillment} years</b> we recommend <b>not</b> to invest in Equity alone, but rather in a <em>portfolio</em> of Equity and Debt Instruments which will be actively managed according to market conditions.</p> : <p>Since your time horizon is <b>{yearsToGoalFulfillment} years</b> you can invest a major portion in Equity and rest in Debt</p>}
                  </p>
                  <p>It is advised to invest in SIP(Systematic Investment Plan) to even out market fluctuations.</p>
                </div>}
            </div>
            : <p className='text-2xl font-semibold text-center'>Nothing to show</p>}
        </div>

        {/* For Goal 1 */}
        <div className='mt-4 text-white bg-blue-600 rounded-md shadow-lg shadow-blue-500'>
          {goal1 !== '' && currentGoalValue1 !== 0 ?
            <div className='p-4'>
              {currentInvestmentForGoal1 !== 0 ?
                <div>
                  <h2 className='text-xl font-semibold text-center'>For Goal: {goal1}</h2>
                  <p>You have a current investment of <b>{currentInvestmentForGoal1.toLocaleString(undefined, {maximumFractionDigits:2})} @ {userData?.userInfo?.currentInvestmentRate1}%</b> which will become <b>{fvOfCurrentInv1.toLocaleString(undefined, {maximumFractionDigits:2})}</b> after <b>{yearsToGoalFulfillment1} years</b>. Therefore you need to achieve <b>{balance1.toLocaleString(undefined, {maximumFractionDigits:2})}</b> to achieve your goal.</p>
                  <p>
                    {yearsToGoalFulfillment1 <= 5 ? <p>Since your time horizon for the goal is <b>{yearsToGoalFulfillment1} years</b> we recommend <b>not</b> to invest in Equity alone, but rather in a <em>portfolio</em> of Equity and Debt Instruments which will be actively managed according to market conditions.</p> : <p>Since your time horizon is <b>{yearsToGoalFulfillment1}</b> years you can invest a major portion in Equity and rest in Debt</p>}
                  </p>
                  <p>It is advised to invest in SIP(Systematic Investment Plan) to even out market fluctuations.</p>
                </div> : <div>
                  <h2 className='text-xl font-semibold text-center'>For Goal: {goal1}</h2>
                  <p>As you do not have any current investment for this goal, you need to achieve <b>{futureValue1.toLocaleString(undefined, {maximumFractionDigits:2})}</b> to achieve your goal.</p>
                  <p>
                    {yearsToGoalFulfillment1 <= 5 ? <p>Since your time horizon for the goal is <b>{yearsToGoalFulfillment1} years</b> we recommend <b>not</b> to invest in Equity alone, but rather in a <em>portfolio</em> of Equity and Debt Instruments which will be actively managed according to market conditions.</p> : <p>Since your time horizon is <b>{yearsToGoalFulfillment1} years</b> you can invest a major portion in Equity and rest in Debt</p>}
                  </p>
                  <p>It is advised to invest in SIP(Systematic Investment Plan) to even out market fluctuations.</p>
                </div>}
            </div>
            : null}
        </div>

        {/* For Goal 2 */}
        <div className='mt-5 text-white bg-blue-600 rounded-md shadow-lg shadow-blue-500'>
          {goal2 !== '' && currentGoalValue2 !== 0 ?
            <div className='p-4'>
              {currentInvestmentForGoal2 !== 0 ?
                <div>
                  <h2 className='text-xl font-semibold text-center'>For Goal: {goal2}</h2>
                  <p>You have a current investment of <b>{currentInvestmentForGoal2.toLocaleString(undefined, {maximumFractionDigits:2})} @ {userData?.userInfo?.currentInvestmentRate2}%</b> which will become <b>{fvOfCurrentInv2.toLocaleString(undefined, {maximumFractionDigits:2})}</b> after <b>{yearsToGoalFulfillment2} years</b>. Therefore you need to achieve <b>{balance2.toLocaleString(undefined, {maximumFractionDigits:2})}</b> to achieve your goal.</p>
                  <p>
                    {yearsToGoalFulfillment2 <= 5 ? <p>Since your time horizon for the goal is <b>{yearsToGoalFulfillment2} years</b> we recommend <b>not</b> to invest in Equity alone, but rather in a <em>portfolio</em> of Equity and Debt Instruments which will be actively managed according to market conditions.</p> : <p>Since your time horizon is <b>{yearsToGoalFulfillment2} years</b> you can invest a major portion in Equity and rest in Debt</p>}
                  </p>
                  <p>It is advised to invest in SIP(Systematic Investment Plan) to even out market fluctuations.</p>
                </div> : <div>
                  <h2 className='text-xl font-semibold text-center'>For Goal: {goal2}</h2>
                  <p>As you do not have any current investment for this goal, you need to achieve <b>{futureValue2.toLocaleString(undefined, {maximumFractionDigits:2})}</b> to achieve your goal.</p>
                  <p>
                    {yearsToGoalFulfillment2 <= 5 ? <p>Since your time horizon for the goal is <b>{yearsToGoalFulfillment2} years</b> we recommend <b>not</b> to invest in Equity alone, but rather in a <em>portfolio</em> of Equity and Debt Instruments which will be actively managed according to market conditions.</p> : <p>Since your time horizon is <b>{yearsToGoalFulfillment2} years</b> you can invest a major portion in Equity and rest in Debt</p>}
                  </p>
                  <p>It is advised to invest in SIP(Systematic Investment Plan) to even out market fluctuations.</p>
                </div>}
            </div>
            : null}
        </div>

        {/* For Goal 3 */}
        <div className='mt-5 text-white bg-blue-600 rounded-md shadow-lg shadow-blue-500'>
          {goal3 !== '' && currentGoalValue3 !== 0 ?
            <div className='p-4'>
              {currentInvestmentForGoal3 !== 0 ?
                <div>
                  <h2 className='text-xl font-semibold text-center'>For Goal: {goal3}</h2>
                  <p>You have a current investment of <b>{currentInvestmentForGoal3.toLocaleString(undefined, {maximumFractionDigits:2})} @ {userData?.userInfo?.currentInvestmentRate3}%</b> which will become <b>{fvOfCurrentInv3.toLocaleString(undefined, {maximumFractionDigits:2})}</b> after <b>{yearsToGoalFulfillment3} years</b>. Therefore you need to achieve <b>{balance3.toLocaleString(undefined, {maximumFractionDigits:2})}</b> to achieve your goal.</p>
                  <p>
                    {yearsToGoalFulfillment3 <= 5 ? <p>Since your time horizon for the goal is <b>{yearsToGoalFulfillment3} years</b> we recommend <b>not</b> to invest in Equity alone, but rather in a <em>portfolio</em> of Equity and Debt Instruments which will be actively managed according to market conditions.</p> : <p>Since your time horizon is <b>{yearsToGoalFulfillment3} years</b> you can invest a major portion in Equity and rest in Debt</p>}
                  </p>
                  <p>It is advised to invest in SIP(Systematic Investment Plan) to even out market fluctuations.</p>
                </div> : <div>
                  <h2 className='text-xl font-semibold text-center'>For Goal: {goal3}</h2>
                  <p>As you do not have any current investment for this goal, you need to achieve <b>{futureValue3.toLocaleString(undefined, {maximumFractionDigits:2})}</b> to achieve your goal.</p>
                  <p>
                    {yearsToGoalFulfillment3 <= 5 ? <p>Since your time horizon for the goal is <b>{yearsToGoalFulfillment3} years</b> we recommend <b>not</b> to invest in Equity alone, but rather in a <em>portfolio</em> of Equity and Debt Instruments which will be actively managed according to market conditions.</p> : <p>Since your time horizon is <b>{yearsToGoalFulfillment3} years</b> you can invest a major portion in Equity and rest in Debt</p>}
                  </p>
                  <p>It is advised to invest in SIP(Systematic Investment Plan) to even out market fluctuations.</p>
                </div>}
            </div>
            : null}
        </div>

        {/* For Goal 4 */}
        <div className='mt-5 text-white bg-blue-600 rounded-md shadow-lg shadow-blue-500'>
          {goal4 !== '' && currentGoalValue4 !== 0 ?
            <div className='p-4'>
              {currentInvestmentForGoal4 !== 0 ?
                <div>
                  <h2 className='text-xl font-semibold text-center'>For Goal: {goal4}</h2>
                  <p>You have a current investment of <b>{currentInvestmentForGoal4.toLocaleString(undefined, {maximumFractionDigits:2})} @ {userData?.userInfo?.currentInvestmentRate4}%</b> which will become <b>{fvOfCurrentInv4.toLocaleString(undefined, {maximumFractionDigits:2})}</b> after <b>{yearsToGoalFulfillment4} years</b>. Therefore you need to achieve <b>{balance4.toLocaleString(undefined, {maximumFractionDigits:2})}</b> to achieve your goal.</p>
                  <p>
                    {yearsToGoalFulfillment4 <= 5 ? <p>Since your time horizon for the goal is <b>{yearsToGoalFulfillment4} years</b> we recommend <b>not</b> to invest in Equity alone, but rather in a <em>portfolio</em> of Equity and Debt Instruments which will be actively managed according to market conditions.</p> : <p>Since your time horizon is <b>{yearsToGoalFulfillment4} years</b> you can invest a major portion in Equity and rest in Debt</p>}
                  </p>
                  <p>It is advised to invest in SIP(Systematic Investment Plan) to even out market fluctuations.</p>
                </div> : <div>
                  <h2 className='text-xl font-semibold text-center'>For Goal: {goal4}</h2>
                  <p>As you do not have any current investment for this goal, you need to achieve <b>{futureValue4.toLocaleString(undefined, {maximumFractionDigits:2})}</b> to achieve your goal.</p>
                  <p>
                    {yearsToGoalFulfillment4 <= 5 ? <p>Since your time horizon for the goal is <b>{yearsToGoalFulfillment4} years</b> we recommend <b>not</b> to invest in Equity alone, but rather in a <em>portfolio</em> of Equity and Debt Instruments which will be actively managed according to market conditions.</p> : <p>Since your time horizon is <b>{yearsToGoalFulfillment4} years</b> you can invest a major portion in Equity and rest in Debt</p>}
                  </p>
                  <p>It is advised to invest in SIP(Systematic Investment Plan) to even out market fluctuations.</p>
                </div>}
            </div>
            : null}
        </div>
      </div>
      </>)}
    </div>
  )
}

export default Plan