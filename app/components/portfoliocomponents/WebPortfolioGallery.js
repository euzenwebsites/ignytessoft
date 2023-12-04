import React from 'react'
import Image from 'next/image'
import webPort1 from "../../../public/webport1.jpg"
import webPort2 from "../../../public/webport2.jpg"
import webPort3 from "../../../public/webport3.jpg"
import { RevealWrapper } from 'next-reveal'

const WebPortfolioGallery = () => {
  return (
    <RevealWrapper interval={60} delay={400} origin='right'  duration={1500}>
    <div >
            <div className='relative pl-10'>
                <div className='absolute z-30 top-0 left-0 max-sm:static max-sm:mt-8 '> <Image src={webPort1} width={350} alt='Website portfolio Image 1' /></div>
                <div className='absolute z-20 top-32 left-32 max-sm:static max-sm:mt-8'><Image src={webPort2} width={350} alt='Website portfolio Image 1'/></div>
                <div className='absolute z-10 top-60 left-0 max-sm:static max-sm:mt-8'><Image src={webPort3} width={350} alt='Website portfolio Image 1'/></div>
            </div>
            
        </div>
        </RevealWrapper>
  )
}

export default WebPortfolioGallery
