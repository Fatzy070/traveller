import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Info from '../../data/Info';
const Faq = () => {
    
    const { Accordion } = Info
 
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className='mx-[1rem] md:mx-[13rem] mt-[2rem] text-[rgba(0,56,101,255)]'>
      <h1 className='text-center text-[2rem] capitalize font-bold mb-6'>Frequently Asked Questions</h1>

      {Accordion.map((item) => (
        <div key={item.id} className='border-b-[1px] border-gray-400 p-4 mb-4'>
          <div
            className='flex justify-between items-center cursor-pointer'
            onClick={() => toggleAccordion(item.id)}
          >
            <h2 className='font-semibold text-[1.2rem]'>{item.apply}</h2>
            <div className='rounded-full text-red-500 p-[5px] bg-[rgba(252,206,232,255)]'>
                {openIndex === item.id ? (
              <FaMinus  />
            ) : (
              <FaPlus />
            )}
            </div>
          </div>

          {openIndex === item.id && (
            <p className='text-gray-500 mt-3 transition-all duration-300'>{item.text}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
