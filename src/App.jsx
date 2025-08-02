import { useState } from 'react'
import { BrowserRouter , Router , Route, Routes } from 'react-router-dom'
import Home from './component/home/Home';
import Slider from './component/home/Slider'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Client from './component/services/Client';
import Catergories from './component/services/Catergories';
import Layout from './component/layout';
import Faq from './component/FAQs/Faq';
import Aboutpage from './pages/about.jsx/Aboutpage';
import Faqpage from './pages/faqs/Faqpage';
import Page from './pages/services/Page';
import Contactpage from './pages/contact/Contactpage';



function App() {
 

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home /> } />
          <Route path='/about' element={<Aboutpage /> } />
          <Route path='/services' element={<Page /> } />
          <Route path='/categories' element={<Catergories /> } />
          <Route path='/faqs' element={<Faqpage /> } />
          <Route path='/contact' element={<Contactpage /> } />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

//  <Home />
//       <Slider />
//       <About />
//       <Visa />
//       <Client />
//       {/* <Catergories /> */}
//       <Lord />