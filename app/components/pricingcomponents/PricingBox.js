import React from 'react';

const PricingBox = (props) => {
  const items =[...Array(20)]
  return (
    <div className='max-sm:mt-8'>
      <h4 className='text-[#000] text-2xl font-normal mb-4'>{props.name}</h4>
      <ul className='text-[#2D2D2D] text-lg font-normal p-2' style={{maxHeight:"300px", overflowY:"scroll" }}>
      
         <li className='m-0 p-2'>{props.item1}</li>
        <li className='m-0 p-2'>{props.item2}</li>
        <li className='m-0 p-2'>{props.item3}</li>
        <li className='m-0 p-2'>{props.item4}</li>
        <li className='m-0 p-2'>{props.item5}</li>
        <li className='m-0 p-2'>{props.item6}</li>
        <li className='m-0 p-2'>{props.item7}</li>
        <li className='m-0 p-2'>{props.item8}</li>
        <li className='m-0 p-2'>{props.item9}</li>
        <li className='m-0 p-2'>{props.item10}</li>
        <li className='m-0 p-2'>{props.item11}</li>
        <li className='m-0 p-2'>{props.item12}</li>
        <li className='m-0 p-2'>{props.item13}</li>
        <li className='m-0 p-2'>{props.item14}</li>
        <li className='m-0 p-2'>{props.item15}</li>
        <li className='m-0 p-2'>{props.item16}</li>
        <li className='m-0 p-2'>{props.item17}</li>
        <li className='m-0 p-2'>{props.item18}</li>
        <li className='m-0 p-2'>{props.item19}</li>
        <li className='m-0 p-2'>{props.item20}</li> 
        <li className='m-0 p-2'>{props.item21}</li> 
        <li className='m-0 p-2'>{props.item22}</li> 
        <li className='m-0 p-2'>{props.item23}</li> 
        <li className='m-0 p-2'>{props.item24}</li> 
        <li className='m-0 p-2'>{props.item25}</li> 
        <li className='m-0 p-2'>{props.item26}</li> 
        <li className='m-0 p-2'>{props.item27}</li> 
       
      </ul>
      <p className='mt-10'>______________________</p>
        <p className='m-0'>Price $ {props.price}</p>
    </div>
  );
}

export default PricingBox