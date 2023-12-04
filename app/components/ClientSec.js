"use client"
import React from 'react'
import Client01 from "../../public/client01.png"
import Client02 from "../../public/client02.png"
import Client03 from "../../public/client03.png"
import Client04 from "../../public/client04.png"
import { RevealWrapper } from 'next-reveal'
import Image from 'next/image'

const ClientSec = () => {
  return (
    <section className='bg-[#fff] h-full w-[100%] flex justify-center mt-32 '>
        <div className='w-[80%]'>
        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-12'>
            {/* ------ column # 01 --------- */}
            <RevealWrapper interval={60} delay={500}  duration={1500}>
        <div >
            <p className='font-base text-[#000] text-base font-normal '>Partnering for Success</p>
            <h2 className='text-[#000] text-4xl font-bold' >Explore Our Diverse And Successful Client Partnerships.</h2>
            <div className='text-[#000] '>________________________</div>
            <p className='text-[#2D2D2D] font-normal text-lg pt-4'>Highlights from our diverse client collaborations
             will take you on a journey to success. Each collaboration, from energetic startups to established enterprises,
             shows our dedication to quality and client success.</p>
        </div>
        </RevealWrapper>
        

    <div>
    <RevealWrapper interval={60} delay={500}  duration={1500}>
        <div className='grid grid-cols-2 gap-2'>
            <div><Image src={Client01} width={400} alt='client 01' /></div>
            <div><Image src={Client02} width={400} alt='client 02'/></div>
            <div><Image src={Client03} width={400} alt='client 03'/></div>
            <div><Image src={Client04} width={400} alt='client 04'/></div>
        </div>
    </RevealWrapper>
    </div>
    </div>
        </div>
    </section>
  )
}

export default ClientSec
