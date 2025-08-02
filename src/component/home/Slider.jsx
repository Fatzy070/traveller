import React from 'react';
import Slider from 'react-slick';
import Hero from '../../assets/HeroImage.png';
import Hero2 from '../../assets/HeroImage2.png';
import Data from '../../data/Data';

const HeroSlider = () => {
  const { visa, best, expert } = Data;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {/* SLIDE 1 */}
      <section className='relative text-white'>
        <div className='relative'>
          <img
            src={Hero}
            alt=""
            className='w-full object-cover object-center h-[75vh] md:h-[90vh]'
          />
          <div className='absolute top-0 left-0 z-20 w-full h-full bg-black/60'></div>
        </div>
        <div className='absolute z-30 text-center top-[20%] left-1/2 transform -translate-x-1/2 px-4 w-[90%] md:w-[600px]'>
          <p className='uppercase font-semibold text-sm md:text-base'>{visa}</p>
          <h1 className='font-serif font-black capitalize text-[2.2rem] md:text-[3.7rem]'>Best Visa Help</h1>
          <h1 className='font-serif leading-tight font-black capitalize text-[2.2rem] md:text-[3.7rem]'>{best}</h1>
          <p className='pt-4 text-sm md:text-base'>{expert}</p>
        </div>
      </section>

      {/* SLIDE 2 */}
      <section className='relative text-white'>
        <div className='relative'>
          <img
            src={Hero2}
            alt=""
            className='w-full object-cover object-center h-[75vh] md:h-[90vh]'
          />
          <div className='absolute top-0 left-0 z-20 w-full h-full bg-black/60'></div>
        </div>
        <div className='absolute z-30 text-center top-[20%] left-1/2 transform -translate-x-1/2 px-4 w-[90%] md:w-[600px]'>
          <p className='uppercase font-semibold text-sm md:text-base'>Travel Made Easy</p>
          <h1 className='font-serif font-black capitalize text-[2.2rem] md:text-[3.7rem]'>Explore New Places</h1>
          <h1 className='font-serif leading-tight font-black capitalize text-[2.2rem] md:text-[3.7rem]'>With Confidence</h1>
          <p className='pt-4 text-sm md:text-base'>We guide you through the journey from start to finish.</p>
        </div>
      </section>

      {/* SLIDE 3 */}
      <section className='relative text-white'>
        <div className='relative'>
          <img
            src={Hero}
            alt=""
            className='w-full object-cover object-center h-[75vh] md:h-[90vh]'
          />
          <div className='absolute top-0 left-0 z-20 w-full h-full bg-black/60'></div>
        </div>
        <div className='absolute z-30 text-center top-[20%] left-1/2 transform -translate-x-1/2 px-4 w-[90%] md:w-[600px]'>
          <p className='uppercase font-semibold text-sm md:text-base'>Trusted Experts</p>
          <h1 className='font-serif font-black capitalize text-[2.2rem] md:text-[3.7rem]'>Reliable Immigration</h1>
          <h1 className='font-serif leading-tight font-black capitalize text-[2.2rem] md:text-[3.7rem]'>Support</h1>
          <p className='pt-4 text-sm md:text-base'>10+ years experience helping travelers globally.</p>
        </div>
      </section>
    </Slider>
  );
};

export default HeroSlider;
