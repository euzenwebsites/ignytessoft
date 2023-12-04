import React from 'react'

const Footer = () => {
  return (
   <footer className='bg-[#fff] h-full w-[100%] flex justify-center mt-10 border-t-2 border-current '>
        <div className='w-[80%]'>
        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-12'>

            <div className='pt-2 pb-2'>
            <p className='font-base text-[#000] text-base font-normal '>Copyrights Ignytessoft</p>
            <p className='font-base text-[#000] text-base font-normal '>All Rights Reserved</p>
            </div>
            <div></div>
        </div>
        </div>
   </footer>
  )
}

export default Footer
