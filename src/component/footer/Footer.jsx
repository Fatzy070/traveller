import React from 'react';
import office from '../../assets/office-4.jpeg'
import Info from '../../data/Info';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
    const { ready , apply , text , contact , service , open , icons} =Info

        const footerSections = [
  {
    title: "Contact Info",
    items: contact.map((item) => item.name),
    icons: icons, // Optional
  },
  {
    title: "Opening Time",
    items: open.map((item) => item.name),
  },
  {
    title: "Our Services",
    items: service.map((item) => item.name),
  },
  {
    title: "Newsletter",
    isNewsletter: true,
  },
];

    return (
        <>
          <div className='h-[20rem] text-white relative mt-[5rem] '>
                <img src={office} alt="" className='w-full h-full object-cover' />
                <div className='bg-blue-800/60 w-full h-full absolute top-0'></div>
                <div className='text-center  md:w-[53%] px-2.5  absolute md:left-[25%] top-[15%] md:top-[25%]'>
                    <h1 className='font-semibold text-[1.6rem]'>{ready}</h1>
                    <p className='py-[20px]'>{text}</p>
                    <Link 
                    to='/contact'
                    className='flex justify-center'
                    >
                        <div className=' flex items-center justify-between px-[20px] w-[180px] text-[1.3rem] rounded-[10px] py-[8px] bg-red-500 text-white font-semibold capitalize'>
                        <p>{apply}</p>
                        <FaArrowRight />
                    </div>
                    </Link>
                </div>
            </div>  
            <section className='flex justify-between border-t text-white bg-[rgba(0,58,102,255)]  py-[50px] px-[1rem] flex-wrap gap-4'>
  {footerSections.map((section, index) => (
    <div key={index}>
      <h1 className='text-red-500 font-bold text-[1.6rem] pb-2 capitalize'>{section.title}</h1>

      {/* If it's a newsletter */}
      {section.isNewsletter ? (
        <div className='w-[280px]'>
          <p>Please enter your email to submit for our Newsletter</p>
          <div className='mt-[1rem] relative  h-[50px] w-[270px] rounded-[10px] overflow-hidden'>
            <input type='text' placeholder='Enter your email' className='w-[200px] bg-white outline-none h-full px-2.5' />
            <input type='button' value='signup' className='right-0 absolute h-full w-[90px] capitalize bg-red-500 text-white' />
          </div>
        </div>
      ) : (
        <>
          {section.items?.map((item, i) => (
            <p key={i} className=' pt-1.5'>{item}</p>
          ))}

          {section.icons && (
            <div className='flex pt-2 gap-[10px]'>
              {section.icons.map((iconItem, i) => {
                const Icon = iconItem.icon;
                return (
                  <div key={i}>
                    <Icon />
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  ))}
</section>
<footer className='bg-[#e6274e] text-white text-center py-4'>
  <p className='text-[0.95rem]'>© 2025 Smoothflight Travels, All right reserved</p>
</footer>

        </>
    );
};

export default Footer;