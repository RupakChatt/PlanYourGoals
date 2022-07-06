import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { login } = UserAuth()

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
      navigate('/account', { replace: true })
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };

  return (
    <div className='h-[100vh] bg-no-repeat bg-cover flex flex-col items-center justify-center'
      style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2016/10/29/09/54/blue-1780281_960_720.png')` }} >
      <div className='w-[17rem] rounded-lg bg-white mb-2'>
        <ul className='flex flex-row items-center justify-center p-1'>
          <Link to='/'>
            <li className='p-1  m-1 rounded-md cursor-pointer hover:bg-gradient-to-t hover:from-blue-600 hover:to-blue-400 hover:text-white'>Home</li>
          </Link>
          <Link to='/calculators'>
            <li className='p-1 m-1 rounded-md cursor-pointer hover:bg-gradient-to-t hover:from-blue-600 hover:to-blue-400 hover:text-white '>Calculators</li>
          </Link>
        </ul>
      </div>
      <div className='flex flex-col justify-center item-start bg-white max-w-[17rem] p-[3rem] rounded-lg'>
        <h2 className='text-3xl font-semibold text-blue-600'>Log in</h2>
        {error ? <h5 className='mt-4 text-center text-red-600'>{error}</h5> : null}
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col mt-[20px] mb-[1rem]'>
            <label htmlFor="email" className='font-semibold text-blue-600'>Enter your email</label>
            <input className='p-1 border rounded-lg outline-none border-slate-700 ' type="email" placeholder='example@example.com' autoComplete='username' required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='font-semibold text-blue-600'>Enter your password</label>
            <input className='p-1 border rounded-lg outline-none border-slate-700 ' type="password" minLength={8} maxLength={20} required autoComplete='new-password' placeholder='8 to 20 characters' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className='w-[11rem] mt-2 text-white p-1 bg-blue-600 rounded-lg hover:bg-gradient-to-t hover:from-blue-600 hover:to-blue-400'>Log in</button>
        </form>
        <h5 className='mt-5'>Not Registered? <Link to='/signup' className='text-blue-600'>Sign up</Link></h5>
      </div>
    </div>
  )
}

export default Login