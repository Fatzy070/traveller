import React from 'react';
import Back from '../../data/back';
import { FaMapMarkedAlt } from "react-icons/fa";
import Form from './Form';

const Page = () => {
  const { quick, con, text, locate, text1, open, hes , send , connect , text2} = Back;

  return (
    <>
    <div className='flex flex-wrap gap-10 mt-10 justify-center mx-[1rem]'>
      <section className='w-full md:w-[43%]  rounded-2xl  bg-white text-[rgba(0,56,101,255)]'>
      {/* Header */}
      <div className='flex  gap-4 '>
        <h1 className='font-semibold text-[1.2rem]'>{quick}</h1>
        <div className='pt-[11px]'>
          <div className='w-[50px] h-[2px] bg-[rgba(0,56,101,255)] rounded'></div>
          <div className='w-[70px] h-[2px] bg-red-500 mt-[7px] rounded'></div>
        </div>
      </div>


      <div className='py-3'>
        <h2 className='text-3xl font-bold'>{con}</h2>
        <h2 className='text-3xl font-bold'>{hes}</h2>
      </div>

      <p className='text-gray-600 text-base leading-relaxed mb-6'>{text}</p>

 
      <div className='flex items-start gap-4 bg-gray-100 p-4 rounded-lg mb-6'>
        <div className=''>
          <FaMapMarkedAlt size={50} />
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-1'>{locate}</h3>
          <p className='text-gray-600 text-sm'>{text1}</p>
        </div>
      </div>

      <div className='border-t flex flex-wrap gap-4.5 pt-6 space-y-6'>
        {open.map((item, index) => {
          const Icons = item.icon;
          return (
            <div key={index} className='flex gap-4 items-start'>
              <Icons size={35} className='mt-1' />
              <div className='text-sm'>
                <h4 className='font-semibold text-[1.5rem] capitalize'>{item.head}</h4>
                {item.para && <p className='text-gray-600'>{item.para}</p>}
                {item.num && <p className='text-gray-600'>{item.num}</p>}
                {item.mail && <p className='text-gray-600'>{item.mail}</p>}
                {item.email && <p className='text-gray-600'>{item.email}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
    
     <section className='text-[rgba(0,56,101,255)] w-full md:w-[43%]'>
           <div className='flex  gap-4 '>
        <h1 className='font-semibold text-[1.2rem]'>{connect}</h1>
        <div className='pt-[11px]'>
          <div className='w-[50px] h-[2px] bg-[rgba(0,56,101,255)] rounded'></div>
          <div className='w-[70px] h-[2px] bg-red-500 mt-[7px] rounded'></div>
        </div>
      </div>
       <div className=''>
        <h2 className='text-[1.8rem] md:text-[2.5rem]  font-bold'>{send}</h2>
        
      </div>

      <p className='text-gray-600 text-base leading-relaxed mb-6'>{text2}</p>
        <Form />
    </section>
    </div>
      
    </>
  );
};

export default Page;
