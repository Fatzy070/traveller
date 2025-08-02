import React from 'react';
import Data from '../../data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { AlignJustify , } from 'lucide-react';
import { useState } from 'react';
import { Link }  from 'react-router-dom'
const Menu = () => {
    const { home  } = Data
    const [showBar , setShowBar ] = useState(false)

    const toggleBar = () => {
        setShowBar(!showBar)
    }

    return (
        <>
        <div onClick={toggleBar}>
            <AlignJustify size="25px" color='blue' />
        </div>
    
         { showBar && (
        <>
        <div
            onClick={toggleBar}
            className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-40"
          ></div>
         <div className=' z-50 bg-white h-[100dvh] w-[70%] text-[rgba(9,57,100,255)] absolute right-0 top-0'>
               <div className='border-gray-300 px-[20px] pb-2 border-b-2 border-t-2 h-[70px] flex items-center justify-between'>
                 <h3 className=' menu text-[1.3rem]  '>Menu</h3>
                <div onClick={toggleBar} className='text-[20px] '>
                    <FontAwesomeIcon icon={faXmark}  />
                </div>
               </div>
             <div>
            <ul className="px-[20px] mt-[10px]">
              {home.map((item, index) => (
                <li key={index} className="py-[10px] home">
                  <Link to={item.path} onClick={toggleBar}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
             <div className=" mt-[30px] w-[85%] mx-[20px] h-[45px] text-[1rem] text-white flex justify-center items-center capitalize font-bold rounded-[40px] bg-red-600 ">
                <p><a href="#">get a quote</a></p>
            </div>
            <p className='flex absolute bottom-0 home pb-[10px] px-[20px] items-end '>Version: 1.0 </p>
        </div>
        </>
       )}
 
        </>
    );
};

export default Menu;