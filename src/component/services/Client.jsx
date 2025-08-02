import React from 'react';
import Info from '../../data/Info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Client = () => {
    const {why , offer , goal , direct } = Info

    return (
        <section className='mt-[5rem] pt-[10px] pb-[50px] bg-[rgba(249,250,251,255)]'>
         <section className=' text-[rgba(0,56,101,255)] px-[10px] md:px-[2rem] lg:px-[15rem]'>
         <div className='flex items-center justify-center mt-[2rem]  gap-[20px]'>
            <div className=' relative'>
                <p className='border relative right-[-20px] w-[40px] border-[rgba(0,56,101,255)] mb-[7px]'></p>
                <p className='border w-[65px] border-red-500'></p>
            </div>
            <h1 className='font-bold text-[1.2rem] md:text-[1.4rem]'>{why}</h1>
            <div>
                <p className='border w-[40px] border-[rgba(0,56,101,255)] mb-[7px]'></p>
                <p className='border w-[65px] border-red-500'></p>
            </div>
        </div>
        <div className='text-center'>
            <h2 className='  text-[2rem] lg:text-[2.5rem] font-semibold leading-[2.5rem]'>{offer}</h2>
            <p className='text-gray-600 pt-[1.2rem] px-[1rem]'>{goal}</p>
        </div>
        </section>
   
                <div className='flex flex-wrap  gap-[30px] justify-center mt-[3rem]'>
                    
                    {direct.map((item , index ) => {
                        const Icon = item.icon
                        return (
                            <div key={index} className='w-[80%] md:w-[40%] bg-white shadow-md card rounded-[20px] lg:w-[270px] h-[300px] flex flex-col justify-center items-center p-4'>
                            <div className='empty'></div>
            <div className='relative z-[10]'>
                 <div className='flex justify-center'>
                   <span className='fast '>
                   <Icon className="icons" />
                </span>
              </div>
      <div className='text-center mt-4'>
        <h3 className='text-[1.2rem] font-semibold'>{item.name}</h3>
        <p className='text-gray-600 md:text-[1.1rem] lg:text-[1rem] pt-[10px] leading-[2rem] md:leading-[1.7rem]'>{item.text}</p>
      </div>
    </div>
            </div>
                        )
                    })}
                    
                </div>
        </section>
    );
};

export default Client;
