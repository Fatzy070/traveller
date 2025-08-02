import Data from "../../data/Data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aero from'../../assets/image (1).png'
import Menu from '../home/Menu'
import { Link , useLocation , NavLink } from 'react-router-dom'
import { i } from "framer-motion/client";
import Loading from "../../ui/Loading";
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const Navbar = () => {
    const { smail , con , icons , home } = Data
    const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

   const handleNavClick = (path) => {
    setIsLoading(true);

    // simulate small delay or wait for next render
    setTimeout(() => {
      navigate(path);
      setIsLoading(false);
    }, 800); // small delay for effect
  };
  
    return (
       <>
       {isLoading && <Loading />}
       <section className=" hidden md:flex px-[55px] items-center bg-[rgba(0,58,102,255)] justify-between border py-2">
             <div className="flex gap-2.5">
      {smail.map((item) => {
        return (
          <div key={item.id} className="flex text-[16px] text-gray-400 items-center gap-2">

            <FontAwesomeIcon icon={item.icon}  color="red" />
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
            <div className="flex gap-[15px]">
                {icons.map((item , index) => {
                    const Icon = item.icon
                    return (
                        <div key={index} className="border border-white h-[30px] w-[30px] flex justify-center items-center rounded-[50%] text-red-600"> 
                           <a href=""> <Icon size={18} /></a>
                        </div>
                    )
                })}
            </div>
            <div className="flex gap-1.5">
                {con.map((item , index ) => {
                    return (
                        <div key={index} className="text-gray-400 text-[16px] font-serif flex gap-1 capitalize"> 
                            <p>{item.name}</p>  
                            <p>{item.slash}</p>
                        </div>
                    )
                })}
            </div>
       </section>
       <section className="flex bg-[rgba(245,245,245,255)] md:bg-white items- h-[70px] md:h-[85px] justify-between  py-[1.2rem] px-[10px] md:px-[10px] lg:px-[3.5rem] md:py-[1rem]">
            <div className="flex items-center md:items-start">
                <img src={Aero} alt="" className=" w-[65px] h-[47px]"/>
                <h1 className="relative text-[1.7rem]   md:text-[2.3rem] md:top-[-11px] smooth">Smoothflight</h1>
            </div>
            <div className="hidden md:flex   md:gap-[10px] lg:gap-[2rem]">
                <div className="flex md:gap-[11px] lg:gap-[30px]">
      {home.map((item, index) => (
  <NavLink
    key={index}
    to={item.path}
    onClick={() => handleNavClick(item.path)}
    className={({ isActive }) =>
      `home h-full flex items-center text-[1.1rem] ${
        isActive ? 'text-red-500' : 'text-[rgba(39,62,101,255)]'
      }`
    }
  >
    {item.name}
  </NavLink>
))}
    </div>
            <div className=" w-[140px] mt-2 h-[48px] text-[16.5px]  text-white flex justify-center items-center capitalize font-bold rounded-[40px] bg-red-600 ">
                <p><a href="#">get a quote</a></p>
            </div>
            </div>
            <div className="border-[3px] z-50 border-blue-800 h-[30px] px-[1px] rounded-[5px] md:hidden">
                <Menu />
            </div>
            
       </section>
       
       </>
    );
};

export default Navbar;