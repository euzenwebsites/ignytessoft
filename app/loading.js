import React from 'react'
import Image from 'next/image'
import Logo from "../public/logo.svg"
const loading = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-[#fff]'>
       <Image src={Logo} alt='Ignytes Soft'/>
      <h1>Website Is loading....</h1>
    </div>
  )
}

export default loading
