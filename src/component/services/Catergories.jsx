import React, { useState } from 'react';
import Info from '../../data/Info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark , faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


const Catergories = () => {
    const { cat, bus, help } = Info;
    const [showDetail, setShowDetail] = useState(false);

    const handleReadMore = () => {
        setShowDetail(true);
    };

    const handleClose = () => {
        setShowDetail(false);
    };

    return (
        <>
            <div className='relative'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-[2rem] mx-[1rem] lg:mx-[1rem]'>
                    {cat.map((item, index) => {
                        return (
                            <div key={index} className='shadow-md mt-[2rem] max-w-full md:w-[340px] lg:h-[350px] lg:w-[380px] overflow-hidden lg:rounded-[15px]'>
                                <img src={item.image} alt="" className='w-full h-[55%]' />
                                <div className='px-[20px] py-[10px]'>
                                    <h1 className='font-bold capitalize text-[1.5rem]'>{item.name}</h1>
                                    <p className='py-[8px] text-gray-500 font-semibold'>{item.text}</p>
                                    <div className='flex items-center gap-[10px] cursor-pointer' onClick={handleReadMore}>
                                        <p className='capitalize text-red-500 font-bold'>{item.more}</p>
                                        <FontAwesomeIcon icon={faArrowRight} color='red' />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {showDetail && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center z-50">
                        <div className='shadow-lg bg-white rounded-[10px] py-[1.5rem] px-[1rem] md:w-[50%] max-h-[90vh] overflow-auto'>
                            <div className='border-b pb-[10px] flex justify-between items-center'>
                                <h1 className='font-bold text-[2rem]'>{bus}</h1>
                                <div onClick={handleClose} className="cursor-pointer">
                                    <FontAwesomeIcon icon={faXmark} color='gray' />
                                </div>
                            </div>
                            <p className='text-gray-500 py-[10px]'>{help}</p>
                            <div
                                onClick={handleClose}
                                className='text-[1.2rem] py-[3px] font-bold rounded-[3px] w-[100px] text-center capitalize bg-red-500 text-white cursor-pointer'
                            >
                                close
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Catergories;
