"use client"
import React from 'react'
import Service from './ui/Service'

import serviceIcon1 from "../../public/_1 (1).svg"
import webIcon from "../../public/web-icon.svg"
import mobileIcon from "../../public/mobileapp.svg"
import serviceIcon4 from "../../public/_1 (4).svg"
import serviceIcon5 from "../../public/_1.svg"
import serviceIcon6 from "../../public/Isolation_Mode.svg"


import { RevealWrapper } from 'next-reveal';

import "../globals.css";

const ServicesSec = () => {

  return (
    < >

     
<section id='service' className='bg-[#2C2C2C] h-full w-[100%] flex justify-center pt-20 pb-20 relative'>
  <div className='w-[1px] h-[100%] absolute top-0 left-[50%] bg-[#fff] max-sm:hidden '></div>
    <div className='w-[80%]'>
{/* ---------------first container-------------- */}
<div>
    <div className='pt-10 pb-20 text-[#fff]'>
        <p className='font-base text-[#fff] text-base font-normal '>Your Solutions Hub.</p>
      <h2 className='text-[#fff] text-4xl font-bold' >Showcasing Our Expertise</h2>
      <div className='text-[#fff] '>________________________</div>
    </div>
</div>



{/* --------------------second conatiner---------- */}
<div className='grid grid-cols-2 max-sm:grid-cols-1 gap-12'>
      
        <RevealWrapper interval={60} delay={400}  duration={1500} >
        <Service 
        direction= 'end' 
        heading="UI/UX DESIGN" align="right" icon={serviceIcon1}
        description="Our UI/UX expertise connects users with amazing journeys through seamless functionality."/>
        </RevealWrapper>
     
        <RevealWrapper interval={60} delay={400}  duration={1500}>
        <Service direction='start' heading="WEB DESIGN & DEVELOPEMENT" align="left" icon={webIcon}
        description="We develop remarkable websites via smooth design and creative development."/>
        </RevealWrapper>

        <RevealWrapper interval={60} delay={400}  duration={1500}>
        <Service direction='end' heading="MOBILE APP" align="right" icon={mobileIcon}
        description="With our exceptional app development services, increase your online visibility."/>
        </RevealWrapper>

        <RevealWrapper interval={60} delay={400}  duration={1500}>
        <Service direction='start' heading="BRANDING" align="left" icon={serviceIcon6}
        description="Build a notable brand. Our experts create ideas into unique identities for businesses"/>
        </RevealWrapper>

        <RevealWrapper interval={60} delay={400}  duration={1500}>
        <Service direction='end' heading="SOCIAL MEDIA MARKETING" align="right" icon={serviceIcon5}
        description="Use the power of social media with our Strategic marketing that speaks for itself."/>
        </RevealWrapper>

        <RevealWrapper interval={60} delay={400}  duration={1500}>
        <Service direction='start' heading="SEO" align="left" icon={serviceIcon4}
        description="Utilise the full potential of your website, as organic growth is driven by our SEO expertise."/>
        </RevealWrapper>

</div>

    

    </div>
    </section>
    </>

  )
}

export default ServicesSec
