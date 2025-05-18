import React from 'react';
import villa from '../asset/villa.jpg'

function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={villa} />
      </div>

      <div className='flex flex-col justify-center'>
        <form className='max-w-[400px] rounded-lg w-full mx-auto bg-slate-200 p-4'>
          <h2 className='text-3xl font-semibold text-center py-6'>LATENG.</h2>
            <div className='flex flex-col py-2'>
              <label>Username</label>
              <input className='border p-1 rounded-sm' type="text"/>
            </div>
            <div className='flex flex-col py-2 '>
              <label>Password</label>
              <input className='border p-1 rounded-sm' type="password"/>
            </div>
            <button className='border w-full my-2 py-2 bg-blue-600 rounded-xl font-bold hover:bg-blue-400 text-white'>Sign In</button>
            <div className='justify-items-end'>
              <p >Create an Account</p>
            </div>
        </form>
      </div>

    </div>
  )
}

export default Login;