"use client"
import { RevealWrapper } from "next-reveal"
import Link from "next/link"
import "../globals.css";
const SocialSec = () => {
  return (
    
    <section id='contact' className='bg-[#fff] h-full w-[100%] flex justify-center mt-32 '>
  
        <div className='w-[80%]'>
        <div className='grid grid-cols-2 gap-12'>
            {/* ------ column # 01 --------- */}
            <RevealWrapper interval={60} delay={400}   duration={1500} >
        <div className="pb-10">
            <p className='font-base text-[#000] text-base font-normal '>Join Our Networks</p>
            <h2 className='text-[#000] text-4xl font-bold' >Connect With Us</h2>
            <div className='text-[#000] '>________________________</div>
        </div>
        </RevealWrapper>
        <div></div>
        </div>

        {/* ------ column # 02 --------- */}
        <div className='grid grid-cols-4 max-sm:grid-cols-1 text-center text-[#000]  gap-12'>
            <Link href="https://www.facebook.com/profile.php?id=61551726248998" target="_blank"
            className="px-3 py-4 social-btn ">FACEBOOK</Link>
            <Link href="https://www.facebook.com/profile.php?id=61551726248998" target="_blank"
            className="px-3 py-4 social-btn ">INSTAGRAM</Link>
            <Link href="https://twitter.com/Ignytessoft1" target="_blank"
            className="px-3 py-4 social-btn ">TWITTER</Link>
            <Link href="https://www.linkedin.com/company/ignytes-soft" target="_blank"
            className="px-3 py-4 social-btn ">LINKEDIN</Link>
          
        </div>

   
        </div>
      
    </section>
  
  )
}

export default SocialSec
