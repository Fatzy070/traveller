import React from 'react';
import Info from '../../data/Info';
import Client from '../services/Client'
import { Link } from 'react-router-dom'
import Slick from './Slick';


const Visa = () => {
    const { visa , immig , guide , job , } = Info


    return (
        <>
        <section className=' text-[rgba(0,56,101,255)] px-[10px] md:px-[2rem] lg:px-[15rem]'>
            <div className='flex items-center justify-center mt-[2rem]  gap-[20px]'>
            <div className=' relative'>
                <p className='border relative right-[-20px] w-[40px] border-[rgba(0,56,101,255)] mb-[7px]'></p>
                <p className='border w-[65px] border-red-500'></p>
            </div>
            <h1 className='font-bold text-[1.2rem] md:text-[1.4rem]'>{visa}</h1>
            <div>
                <p className='border w-[40px] border-[rgba(0,56,101,255)] mb-[7px]'></p>
                <p className='border w-[65px] border-red-500'></p>
            </div>
        </div>
        <div className='text-center'>
            <h2 className='  text-[2rem] lg:text-[2.5rem] font-semibold leading-[2.5rem]'>{immig}</h2>
            <p className='text-gray-600 pt-[1.2rem] px-[1rem]'>{guide}</p>
        </div>
        </section>
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mx-[1rem] md:mx-[2rem] lg:mx-[1rem]'>
            {job.map((item , index ) => {
                return (
                    <div key={index} className=' mt-[2rem] bg-[rgba(0,56,101,255)] md:w-[340px] max-w-full h-[400px] lg:w-[380px] overflow-hidden rounded-[20px] '>
                        <img src={item.image} alt="" className='w-full h-[75%]' />
                        <div className='text-center py-[10px] capitalize text-white'>
                            <h1 className='font-semibold text-[1.5rem]'>{item.name}</h1>
                       <div className='flex justify-center py-[5px]'>
                            <Link 
                            to='/categories'
                              className="block text-center border w-[120px] py-[5px] font-bold bg-white text-[rgba(0,56,101,255)] rounded-[6px]"
                            >
                                {item.more}
                            </Link>
                       </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <Client />
        <Slick />
        </>
    );
};

export default Visa;

//  <p className='border w-[120px] py-[5px] font-bold bg-white text-[rgba(0,56,101,255)] rounded-[6px]'><a href="">{item.more}</a></p>