import React from 'react';
import travel from '../assets/travel.jpeg'
import travel1 from '../assets/travel-1.jpeg'
import travel2 from '../assets/travel-2.jpeg'
import travel3 from '../assets/travel-3.jpeg'
import { Contact, Goal } from 'lucide-react';
import { MdGroups2 } from "react-icons/md";
import { FaArrowRight, FaCcVisa, FaDollarSign, FaGlobe , FaFacebookF  , FaTwitter ,  FaInstagram  } from "react-icons/fa";
import { GiAccordion } from 'react-icons/gi';
import { FaLinkedinIn } from "react-icons/fa6";



const Info = {
    visa: 'VISA CATEGORIES',
    immig:'Enabling Your Immigration Successfully' ,
    guide:'From consultation to visa approval, we guide you every step of the way — ensuring a smooth, stress-free immigration experience.',
    job:[
        {id: 1 , name:'job visa ' , more: 'explore more' , image: travel},
        {id: 1 , name:'business visa ' , more: 'explore more' , image: travel1},
        {id: 1 , name:'student visa ' , more: 'explore more' , image: travel2},
        {id: 1 , name:'diplomatic visa ' , more: 'explore more' , image: travel3},
        {id: 1 , name:'Residence visa ' , more: 'explore more' , image: travel},        
        {id: 1 , name:'Tourist  visa ' , more: 'explore more' , image: travel2},        

    ],
    cat:[
        {id: 1 ,   name:'job visa ' , more: 'read more' , image: travel , text:' Brief text about getting a visa for employment purposes.'} ,
        {id: 1 ,  name:'business visa ' , more: 'read more' , image: travel1  , text:'For entrepreneurs and professionals attending meetings or conferences.'},
        {id: 1 ,  name:'student visa ' , more: 'read more' , image: travel2 , text:'Brief text about getting a visa for employment purposes.' },
        {id: 1 ,  name:'diplomatic visa ' , more: 'read more' , image: travel3 , text: 'For entrepreneurs and professionals attending meetings or conferences.' },
        {id: 1 ,  name:'Residence visa ' , more: 'read more' , image: travel , text:'Brief text about getting a visa for employment purposes.'} ,        
        {id: 1 ,  name:'Tourist  visa ' , more: 'read more' , image: travel2 , text:'For entrepreneurs and professionals attending meetings or conferences.' },  
    ],
    bus:'Business Visa',
    help:'Business Visas are for individuals traveling for business-related purposes such as meetings, negotiations, or conferences. This visa does not typically permit direct employment. We help you prepare the necessary invitation letters, proof of business activities, and financial statements to ensure a smooth application.', 
    why: 'WHY CHOOSE US',
    offer:`Offer Tailor Made Services That Our Client Requires`,
    goal:'We customize every immigration service to suit your personal goals — offering expert support, clear communication, and solutions that align with your unique needs.',
    direct:[
        {id: 1 , icon: FaDollarSign , name:'Cost-Effective' , text:'Get high-quality immigration services without breaking the bank — transparent pricing with no hidden fees.'},
        {id: 1 , icon: FaCcVisa , name:'Visa Assistance' , text:'Personalized support to help you choose the right visa and complete your application with ease. '},
        {id: 1 , icon: FaGlobe , name:'Faster Processing' , text:'We streamline your paperwork to reduce wait times and get your visa approved quicker.'},
        {id: 1 , icon: MdGroups2 , name:'Direct Interviews' , text:'We connect you directly with embassy representatives and prepare you for interview success.'},
    ],
    our:'OUR CLIENTS RIVIEWS',
    our2:'What Our Clients Say',
    journey:`Hear from the people we've helped — real stories from satisfied clients who trusted us with their immigration journey.`,
    ask:'frequently asked question',
    apply:'apply now',
    text:`Don't let the complex visa process hold you back. Our expert team is here to guide you every step of the way. Let's make your travel dreams a reality.`,
    ready:'Ready to Start Your Journey?',


    Accordion: [
        {id: 1 , apply:'How do I apply for a visa?' , text: 'The application process varies by country and visa type. Generally, you will need to fill out an application form, provide supporting documents like your passport and photos, and pay a fee. Our team can guide you through the exact steps for your specific situation.'},
        {id:2 , apply: 'What documents are required?' , text:'Commonly required documents include a valid passport, recent photographs, proof of financial means, flight itineraries, and invitation letters if applicable. The exact list depends on the visa you are applying for.'},
        {id:3 , apply:'How long does the visa process take?' , text:`Processing times can range from a few days to several months. It depends on the embassy's workload, the type of visa, and the completeness of your application. We always aim for the fastest and most reliable execution.`},
        {id: 4 , apply:'Can you guarantee my visa will be approved?' , text:'While we offer 100% genuine assistance and have a high success rate due to our expertise, no one can guarantee visa approval. The final decision rests with the embassy or consulate of the respective country. We ensure your application is perfectly prepared to maximize your chances.'}
    ] ,
    contact:[
        {id:1 , name: '123 Street, New York, USA'},
        {id:2 , name: '+012 345 67890'},
        {id:3 , name: 'info@example.com'},
    ],
    open:[
        {id: 1 , name: 'Mon - Friday: 09.00 am to 07.00 pm'},
        {id: 3 , name: 'Satday: 10.00 am to 05.00 pm'},
        {id: 2 , name: 'All Sunday is our vacation'},
    ],
    service:[
        {id: 1 , name:'business' },
        {id: 2 , name:'evaluation' },
        {id: 3 , name:'migrate ' },
        {id: 4 , name:'study' },
        {id: 5 , name:'counselling' },
        {id: 6 , name:'work / career' },
    ],
    icons: [
        {id:1 , icon: FaTwitter},
        {id:1 , icon: FaFacebookF},
        {id:1 , icon: FaInstagram},
        {id:1 , icon: FaLinkedinIn},
    ]
};

export default Info;