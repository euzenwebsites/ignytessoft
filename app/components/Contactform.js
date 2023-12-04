// "use client"

import mailIcon from "../public/mailus.png" 
import mapIcon  from "../public/mapvec.png"
import Link from "next/link"
import Image from "next/image"

import Form from "../src/app/Form"
const Contactform = () => {
 
    return (
    <section className=" flex justify-center h-full pt-20 pb-20 ">
        <div className="w-[80%] flex flex-row max-sm:flex-col gap-8 ">
    <div className="w-1/2 max-sm:w-full max-sm:text-center">
    <div className="text-[#C1C1D1]">
        <div>
        <h5 className="text-sm font-normal pb-2"
        style={{paddingBottom:"20px"}}
        >Satisfied Customer</h5>
        <div className='bg-[#FFF] h-[1px] w-56 mt-8'></div>
        
        </div>
     

        <h2 className="text-4xl pb-2"
        style={{paddingBottom:"20px"}}
        >Have Question ? Contact Us</h2>
        
        {/* <p className="text-sm font-normal pb-2"
        style={{paddingBottom:"25px"}}
        // >Volutpat odio facilisis mauris sit amet massa vitae.</p> */}
    </div>
    <div className="text-[#DEE1E6] text-sm">
        <Link href="/"><p><span className="inline-flex pr-2"><Image src={mapIcon} alt="map icon"/></span>18601 FM 1431 Ste 104 #2053 Jonestown, TX 78645</p></Link>
        <Link href="mailto:contact@ignytestech.com"> <p><span className="inline-flex pr-2"><Image src={mailIcon} alt="email icon"/></span>contact@ignytestech.com</p></Link>

        
        
       
    </div>
    </div>
    <Form/>
    
   
    </div>
   
    </section>
    

  )
}

export default Contactform
