import React from 'react'
import Link from 'next/link'
const Home = () => {
  return (
    <div className='flex h-screen flex-col text-center bg-black justify-center items-center gap-6'>
        <p className='max-sm:text-3xl text-5xl text-orange-600'>
        Welcome To My New Website
        </p>
        <p className='text-2xl text-gray-300'>I just Removed the Login and SignUp </p>
        <p className='text-green-600 text-lg '>I will add the Authentication and Authorization soon</p>
        <div>
           <Link href={'/user'}>
           <button className='p-2 text-gray-700 text-xl bg-gray-400 rounded-md hover:bg-white border-none outline-none'>Go to the Event Page</button>
           </Link>
           
        </div>
    </div>
  )
}

export default Home