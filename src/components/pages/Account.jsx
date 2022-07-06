import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import Form from '../Form';
import { UserAuth } from '../../AuthContext'



const Account = () => {
  const navigate = useNavigate()
  const { user, logout } = UserAuth()

  const signout = async () => {
    await logout();
    navigate('/', { replace: true })
  };

  return (
    <div className='md:flex md:flex-col bg-cover opacity-[0.9] bg-scroll' style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2016/10/29/09/32/abstract-1780182_960_720.png')` }} >
      <div className=' md:min-h-[60px] md:flex md:flex-row md:justify-between md:items-center top-0 text-slate-200 flex flex-col items-center justify-center'>
        <div className='md:ml-[2rem] text-3xl font-semibold'>
          <h1>Account Dasboard</h1>
        </div>
        <div className='flex flex-col items-center justify-center md:flex md:flex-row md:items-center md:justify-center'>
          <Link to='/'>
            <h3 className='m-2 cursor-pointer md:m-4 hover:font-semibold'>Home</h3>
            </Link>
            <Link to='/calculators'>
            <h3 className='m-2 cursor-pointer md:m-4 hover:font-semibold'>Calculators</h3>
            </Link>
          </div>
        <div className='md:mr-[2rem] md:flex md:flex-row md:items-center md:justify-evenly flex flex-row items-center justify-evenly mb-[2rem] mt-[1rem]'>
          <h3 className='m-2 text-xl font-medium text-slate-200'>{user?.email}</h3>
          <FiLogOut size={25} className='cursor-pointer' onClick={signout} />
        </div>
      </div>
      <div className='min-h-[100vh] flex flex-col items-center justify-center'>
        <div className='md:max-w-[77rem] bg-white p-6 rounded-lg'>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Account