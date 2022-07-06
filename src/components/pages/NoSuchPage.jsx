import React from 'react'

const NoSuchPage = () => {
  return (
    <div className='h-[100vh] bg-no-repeat bg-cover flex flex-col items-center justify-center opacity-[0.9]'
    style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_960_720.jpg')` }} >
        <div className='max-w-[17rem] flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-bold text-white'>Error!!</h1>
            <h2 className='text-3xl font-semibold text-white'>No such page exists!</h2>
        </div>
    </div>
  )
}

export default NoSuchPage