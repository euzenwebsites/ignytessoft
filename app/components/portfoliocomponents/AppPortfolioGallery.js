import React from 'react'
import Image from 'next/image'
import AppPort1 from "../../../public/appport1.jpg"
import AppPort2 from "../../../public/appport2.jpg"
import AppPort3 from "../../../public/appport3.jpg"
import { RevealWrapper } from 'next-reveal'


const AppPortfolioGallery = () => {
  return (
    <RevealWrapper interval={60} delay={400} origin='right'  duration={1500}>
    <div >
            <div className='relative pl-10'>
                <div className='absolute z-30 top-0 left-0 max-sm:static max-sm:mt-8'> <Image src={AppPort1} width={300} alt='App portfolio Image 1' /></div>
                <div className='absolute z-20 top-32 left-60 max-sm:static max-sm:mt-8'><Image src={AppPort2} width={300} alt='App portfolio Image 2'/></div>
                <div className='absolute z-10 top-72 left-0 max-sm:static max-sm:mt-8'><Image src={AppPort3} width={300} alt='App portfolio Image 3'/></div>
            </div>
            
        </div>
    </RevealWrapper>
  )
}

export default AppPortfolioGallery
