import React from 'react';
import Bread from '../assets/breadcrumb.png';

const Header = ({ title , name }) => {
  return (
    <div className='h-[22rem] relative flex items-center justify-center text-white'>
      <img src={Bread} alt="" className='h-full object-cover w-full' />
      <div className='h-full w-full bg-blue-600/40 absolute top-0'></div>

      <div className='absolute text-center'>
        <h1 className='text-5xl font-bold capitalize'>{title}</h1>
        <div className='flex gap-[10px] capitalize text-[1.2rem] pt-3'>
            <p>Home /</p>
            <p>Pages /</p>
            <p className='text-red-500'>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
