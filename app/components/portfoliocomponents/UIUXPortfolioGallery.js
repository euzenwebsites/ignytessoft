import React from 'react'
import Image from 'next/image'
import WebDesPort1 from "../../../public/webdesport1.jpg"
import WebDesPort2 from "../../../public/webdesport2.jpg"
import WebDesPort3 from "../../../public/webdesport3.jpg"
import { RevealWrapper } from 'next-reveal'
const UIUXPortfolioGallery = () => {
  return (
    <RevealWrapper interval={60} delay={400} origin='right'  duration={1500}>
    <div >
            <div className='relative pl-10'>
                <div className='absolute z-20 top-0 left-0 max-sm:static max-sm:mt-8'> <Image src={WebDesPort1} width={300} /></div>
                <div className='absolute z-30 top-32 left-56 max-sm:static max-sm:mt-8'><Image src={WebDesPort2} width={300}/></div>
                <div className='absolute z-10 top-64 left-0 max-sm:static max-sm:mt-8'><Image src={WebDesPort3} width={300}/></div>
            </div>
            
        </div>
  </RevealWrapper>
  )
}

export default UIUXPortfolioGallery
