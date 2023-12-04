import React from 'react'
import Image from 'next/image'
import LogoPort1 from "../../../public/logoport1.jpg"
import LogoPort2 from "../../../public/logoport2.jpg"
import LogoPort3 from "../../../public/logoport3.jpg"
import { RevealWrapper } from 'next-reveal'
const LogoPortfolioGallery = () => {
  return (
    <RevealWrapper interval={60} delay={400} origin='right'  duration={1500}>
    <div >
            <div className='relative pl-10'>
                <div className='absolute z-20 top-0 left-0 max-sm:static max-sm:mt-8'> <Image src={LogoPort1} width={300} /></div>
                <div className='absolute z-30 top-32 left-40 max-sm:static max-sm:mt-8'><Image src={LogoPort2} width={300}/></div>
                <div className='absolute z-10 top-64 left-0 max-sm:static max-sm:mt-8'><Image src={LogoPort3} width={300}/></div>
            </div>
            
        </div>
  </RevealWrapper>
  )
}

export default LogoPortfolioGallery
