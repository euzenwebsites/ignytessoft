import React from 'react'
import Image from 'next/image'
import Logo from "../public/logo.svg"
const loading = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-[#fff]'>
       <Image src={Logo}/>
      <h1>The Website Is loading....</h1>
    </div>
  )
}

export default loading
