import React from 'react';
import image2 from '../../assets/image (2).png';
import image3 from '../../assets/image (3).png';
import card from '../../assets/card.svg';
import Data from '../../data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Mail, Phone, MessageCircleMore } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView, InView } from 'react-intersection-observer';
import Navbar from '../navigations/NavBar';


const About = () => {
  const { about, rely, work, immig, offer, year , team } = Data;

  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };
  
  

  return (
    <>
      <section className='mt-[3rem] mx-[1.5rem] md:mx-[1rem] justify-center gap-[50px] flex flex-wrap text-[rgba(0,56,101,255)]'>
        
        {/* LEFT: Image Section */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='lg:w-[400px] lg:h-[400px] rounded-[10px] bg-[rgba(239,246,255,255)]'
        >
          <div className='flex justify-center'>
            <img src={image2} alt="" />
          </div>
          <div className="overflow-hidden rounded-t-full md:h-[400px] lg:h-[200px] lg:w-[400px]">
            <img src={image3} alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* RIGHT: Text Content Section */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='lg:w-[48%]'
        >
          <div className='flex items-center gap-2.5'>
            <p className='uppercase md:text-[1.3rem] font-semibold text-[rgba(0,56,101,255)]'>{about}</p>
            <div>
              <p className='border border-[rgba(0,56,101,255)] w-[50px] mb-[7px]'></p>
              <p className='border w-[70px] border-red-600'></p>
            </div>
          </div>
          <h1 className='text-[1.7rem] md:text-[2rem] font-bold'>{rely}</h1>
          <p className='text-[15px] py-[20px] md:py-[10px] text-gray-500'>{work}</p>

          <div className='flex flex-wrap gap-[20px] md:gap-[10px]'>
            {immig.map((item, index) => {
              return (
                <div key={index} className='flex gap-2.5 items-center'>
                  <FontAwesomeIcon icon={item.icon} size='3x' color='red' />
                  <h2 className='text-[1.3rem] leading-[1.8rem] font-semibold md:font-bold capitalize'>{item.name}</h2>
                </div>
              );
            })}
          </div>

          <div className='flex flex-wrap gap-5 mt-[2rem]'>
            <div className='bg-[rgba(239,246,255,255)] rounded-[5px] w-[150px]'>
              <div className='flex justify-center w-full'>
                <img src={card} alt="" className='w-[80px]' />
              </div>
              <h1 className='text-center text-[2rem] font-bold'>34</h1>
              <p className='text-[1.2rem] text-center capitalize text-gray-700'>{year}</p>
            </div>

            <div>
              {offer.map((item, index) => {
                const Check = item.icon;
                return (
                  <div key={index} className='flex pt-2 md:pt-0 gap-[10px] items-center'>
                    <div className='bg-red-600 h-[15px] flex items-center w-[15px] rounded-full'>
                      <Check color='white' size={14} />
                    </div>
                    <p className='capitalize text-[1.1rem] font-semibold'>{item.name}</p>
                  </div>
                );
              })}
              <div className='flex mt-[2.2rem]'>
                <div className='flex relative w-[70px]'>
                  <FontAwesomeIcon icon={faPhone} size='3x' />
                  <MessageCircleMore size={23} color='red' className='absolute top-[4px] right-[13px]' />
                </div>
                <div>
                  <p>Have any questions?</p>
                  <p className='text-red-600 font-semibold text-[1.3rem]'>Free: +0123 456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section>
  <div className='flex flex-wrap gap-[50px]  md:gap-[100px] justify-center md:justify-between md:mx-[7rem] mx-[2rem] mt-[5rem]'>
    {team.map((item, index) => {
      const numericPart = parseFloat(item.num);  // 98
      const suffix = item.num.replace(numericPart.toString(), ''); // %

      return (
        <InView
          key={index}
          threshold={0.5}
          triggerOnce
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className='bg-white shadow-md rounded-[10px] relative text-center  w-[170px]'
            >
              <span className='flex py-[3px] absolute top-[-15px] left-[25%] bg-[rgba(33,81,114,255)] rounded-[7px] justify-center w-[80px]'>
                <p className='flex py-[7px] rounded-[5px] bg-red-500 w-[60px] justify-center'>
                  <FontAwesomeIcon icon={item.icon} color='white' size='1x' />
                </p>
              </span>

              <p className='h-[70px] mx-[10px] rounded-[8px] bg-[rgba(33,81,114,255)]'></p>
              <p className='uppercase text-gray-500 font-semibold py-[10px]'>{item.name}</p>

              <h1 className='text-[2rem] font-bold text-[rgba(33,81,114,255)]'>
                {inView ? (
                  <>
                    <CountUp start={0} end={numericPart} duration={2} />
                    {suffix}
                  </>
                ) : (
                  <>
                    0{suffix}
                  </>
                )}
              </h1>
            </div>
          )}
        </InView>
      );
    })}
  </div>
</section>

    </>
  );
};

export default About;
