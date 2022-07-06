import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { UserAuth } from '../AuthContext'



const Header = () => {
    const [menu, setMenu] = useState(false)
    const [icon, setIcon] = useState(false)
    const { user, logout } = UserAuth()
    const navigate = useNavigate()

    const handleToggle = () => {
        menu ? setMenu(false) : setMenu(true)
        icon ? setIcon(false) : setIcon(true)
    }

    const signout = async () => {
        await logout();
        navigate('/')
    };



    return (
        <div className='bg-slate-800 text-white md:h-[70px] p-1 md:p-0 md:flex md:flex-row md:justify-between md:items-center sticky top-0'>
            <div className='flex flex-row items-center justify-between mt-1 ml-4 md:m-4 md:block'>
                <Link to='/'>
                <h1 className='text-3xl font-semibold text-white'><span className='text-blue-500'>P</span>lan<span className='text-blue-500'>Y</span>our<span className='text-blue-500'>G</span>oals</h1>
                </Link>
                {icon ? <AiOutlineClose onClick={handleToggle} size={22} className='mr-4 text-white md:hidden' /> : <GiHamburgerMenu onClick={handleToggle} size={20} className='mr-4 md:hidden' />}
            </div>

            {menu ? <><div>
                <ul className='ml-4 md:flex md:flex-row'>
                    <NavLink to='/'>
                        <li className='m-3 font-medium text-white cursor-pointer md:m-6'>Home</li>
                    </NavLink>
                    <NavLink to='/calculators'>
                        <li className='m-3 font-medium text-white cursor-pointer md:m-6'>Calculators</li>
                    </NavLink>
                </ul>
            </div>
                {user?.email ? <div className='flex flex-row items-center m-3 md:flex md:flex-row md:items-center'>
                    <h3 className='m-2 text-lg font-medium text-white' onClick={()=>{navigate('/account')}}>{user?.email}</h3>
                    <FiLogOut size={20} className='text-white cursor-pointer' onClick={signout} />
                </div> : <div className='m-3 md:flex md:flex-row md:items-center'>
                    <Link to='/login'>
                        <button className='text-center md:m-2 m-1 rounded-md pl-3 pt-[3px] pr-3 pb-[3px] active:bg-gradient-to-t active:from-blue-600 active:to-blue-400 active:text-white text-white'>Log in</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='text-center md:m-2 m-1 rounded-md pl-3 pt-[3px] pr-3 pb-[3px] bg-blue-600  active:bg-gradient-to-t active:from-blue-600 active:to-blue-400 text-white'>Sign up</button>
                    </Link>
                </div>}
            </> : <><div>
                <ul className='hidden ml-4 md:flex md:flex-row'>
                    <NavLink to='/' style={({ isActive }) =>
                        isActive ? {
                            color: 'white',
                            background: 'linear-gradient(0deg, #F0F0F0 4%, #262838  0%)'
                        } : undefined
                    } className='md:p-[7px]'>
                        <li className='font-medium cursor-pointer md:m-4'>Home</li>
                    </NavLink>
                    <NavLink to='/calculators' style={({ isActive }) =>
                        isActive ? {
                            color: 'white',
                            background: 'linear-gradient(0deg, #F0F0F0 4%, #262838  0%)'
                        } : undefined
                    } className='md:p-[7px]'>
                        <li className='font-medium cursor-pointer md:m-4'>Calculators</li>
                    </NavLink>
                </ul>
            </div>
            {user?.email ? <div className='hidden md:mr-[2rem] md:flex md:flex-row md:items-center md:justify-evenly items-center justify-evenly mb-[2rem] mt-[1rem]'>
                    <h3 className='m-2 text-xl font-medium text-white cursor-pointer' onClick={()=>{navigate('/account')}}>{user?.email}</h3>
                    <FiLogOut size={25} className='cursor-pointer' onClick={signout} />
                </div>: <div className='hidden m-3 md:flex md:flex-row md:items-center'>
                    <Link to='/login'>
                        <button className='text-center md:m-2 m-1 rounded-md pl-3 pt-[3px] pr-3 pb-[3px] hover:bg-gradient-to-t hover:from-blue-600 hover:to-blue-400 hover:text-white hover:border-none'>Log in</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='text-center md:m-2 m-1 rounded-md pl-3 pt-[3px] pr-3 pb-[3px] bg-blue-600 hover:bg-gradient-to-t hover:from-blue-600 hover:to-blue-400 text-white'>Sign up</button>
                    </Link>
                </div>}
                </>}
        </div>
    )
}

export default Header