import React from 'react';
import About from '../../component/about/About';
import Slick from '../../component/services/Slick';
import Header from '../../ui/Header';

const Aboutpage = () => {
    return (
        <>
         <Header title='about us' name='about' />
          <About />
          <Slick />
        </>
    );
};

export default Aboutpage;