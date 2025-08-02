import React from 'react';
import Faq from '../../component/FAQs/Faq';
import Slick from '../../component/services/Slick';
import Header from '../../ui/Header';

const Faqpage = () => {
    return (
        <>
            <Header title='FAQs' name='FAQs' />
           <Faq />
           <div className='border'>
            <Slick />
           </div>
        </>
    );
};

export default Faqpage;