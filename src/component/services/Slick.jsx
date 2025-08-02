import React from 'react';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import human from '../../assets/human.jpeg'
import human1 from '../../assets/human1.jpeg'
import human2 from '../../assets/human2.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slick = () => {
  const reviews = [
    {
      text: "They helped me through every step of the visa process. I’m now studying in Canada!",
      name: "Fatima Yusuf",
      profession: "Student",
      image: human1
    },
    {
      text: "Thanks to their guidance, I got my UK visa approved smoothly.",
      name: "John Obi",
      profession: "Engineer",
      image: human2
    },
    {
      text: "Their support was amazing! Now I'm in Australia chasing my dream.",
      name: "Mary James",
      profession: "Designer",
      image: human
    }
  ];

 const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // default for mobile
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024, // tablets and below
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 3000, // desktop
      settings: {
        slidesToShow: 2,
      }
    }
  ]
};

  return (
    <>
      <section className='text-[rgba(0,56,101,255)] px-[10px] md:px-[2rem] lg:px-[15rem]'>
        <div className='flex items-center justify-center mt-[2rem] gap-[20px]'>
          <div className='relative'>
            <p className='border relative right-[-20px] w-[40px] border-[rgba(0,56,101,255)] mb-[7px]'></p>
            <p className='border w-[65px] border-red-500'></p>
          </div>
          <h1 className='font-bold text-[1.2rem] md:text-[1.4rem]'>Our Students</h1>
          <div>
            <p className='border w-[40px] border-[rgba(0,56,101,255)] mb-[7px]'></p>
            <p className='border w-[65px] border-red-500'></p>
          </div>
        </div>
        <div className='text-center'>
          <h2 className='text-[2rem] lg:text-[2.5rem] font-semibold leading-[2.5rem]'>Their Journey with Us</h2>
          <p className='text-gray-600 pt-[1.2rem] px-[1rem]'>See what others are saying about their experience.</p>
        </div>
      </section>

      <section className='mt-[3rem] px-[2rem] md:px-[2rem]'>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className='px-[15px]'>
              <div className='slic text-gray-500 px-[50px] py-[20px]'>
                <p>{review.text}</p>
                <div className='flex pb-[50px] pt-[15px]'>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color='red' />
                  ))}
                </div>
              </div>
              <div className='flex relative top-[-20px] gap-[10px] items-center'>
                <img src={review.image} alt={review.name} className='rounded-full w-[70px] h-[70px]' />
                <div>
                  <h1 className='font-bold text-[1rem] text-[rgba(0,56,101,255)]'>{review.name}</h1>
                  <p className='text-gray-600'>{review.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Slick;
