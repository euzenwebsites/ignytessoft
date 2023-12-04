import React from 'react'
import Team from "../../public/team02.png"
import Link from 'next/link'
import Form from '../components/ui/Form'
import Image from 'next/image'

const ContactSec = () => {
  return (
    <section  className='bg-[#fff] h-full w-[100%] flex justify-center mt-32 '>
        <div className='w-[80%]'>
        <div className='grid grid-cols-2 max-sm:grid-cols-1  gap-12'>
{/* ------ column # 01 --------- */}
       
        <div >
            <Form/>
        </div>

{/* ------ column # 02 --------- */}
        <div >
        <p className='text-[#2D2D2D] font-normal text-lg pt-12'>
        Contact us, and let's start a conversation. We'd love to hear from you if you have any questions,
         ideas, or suggestions for collaboration. Contact us today!</p>
        <div className='text-[#000] mt-10 mb-10 text-right'>________________________</div>
        <div>
        <p className='font-base text-[#000] text-base font-normal '>EMAIL FOR INQUIRIES</p>
            <h2 className='text-[#000] text-4xl font-bold' ><Link href={"mailto:inquiry@ignytessoft.com"}>inquiry@ignytessoft.com</Link></h2>
            <h5 className='mt-4 text-bold'>HEAD OFFICE</h5>
            <p className='font-base text-[#000] text-base font-normal '>18601 FM 1431 Ste 104 #2053 Jonestown, TX 78645 USA</p>
          
        </div>
            
            
            
        </div>

   
   
    </div>
        </div>
    </section>
  )
}

export default ContactSec
