import React from 'react'
import villa from '../asset/villa.jpg'

function register() {
  return (
    <div className='relative w-full h-screen bg-zinc-900/80'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={villa} />
        <div className='flex justify-center items-center h-full w-full'>
          
          <form className='max-w-[400px] w-full mx-auto bg-slate-100 p-6 rounded-3xl'>
            <h1 className='text-4xl font-semibold text-center py-6'>LATENG.</h1>
            <div className='flex flex-col py-2'>
              <label>Email</label>
              <input className='border rounded-xl' type='text'/>
            </div>
            <div className='flex flex-col py-2'>
              <label>Full Name</label>
              <input className='border rounded-xl' type='text'/>
            </div>
            <div className='flex flex-col py-2'>
              <label>Phone number</label>
              <input className='border rounded-xl' type='number'/>
            </div>
            <div className='flex flex-col py-2'>
              <label>Username</label>
              <input className='border rounded-xl' type='text'/>
            </div>
            <div className='flex flex-col py-2'>
              <label>Password</label>
              <input className='border rounded-xl' type='password'/>
            </div>
          </form>
        </div>

    </div>
  )
}

export default register