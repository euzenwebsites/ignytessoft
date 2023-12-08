import React from 'react'
import Image from 'next/image'

const Service = (props) => {
  return (
    <div className={`w-[100%] flex flex-col  items-${props.direction} max-sm:items-start`}>

    <div className={`w-[50%] max-sm:w-[100%]  flex flex-col items-${props.direction}   max-sm:items-start`} >
    <Image src={props.icon} width={30} className='pb-4' alt={`${props.heading} image`}/>
      <h3 className={`text-[#fff] text-xl font-semibold uppercase pb-4  text-${props.align} max-sm:text-left`}>{props.heading}</h3>
      <p className={`text-[#D1D1DB] font-normal text-lg pb-4  text-${props.align} max-sm:text-left`}>
        {props.description}</p>
        </div>
    </div>
    // 
    // 
  )
}

export default Service
