import { Mail , Phone , Facebook , Twitter , Linkedin , Instagram , Youtube  , Check} from 'lucide-react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faEnvelope , faGlobe, faHandshake , faCircleCheck , faUsers , faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Data = {
    smail:[
        {id: 1 , name:'smoothflight@gmail.com' , icon: faEnvelope },
        {id: 2 , name:'+01234567890' , icon: faPhone },
    ],
    icons:[
        {id: 1 , icon: Twitter },
        {id: 1 , icon: Facebook },
        {id: 1 , icon: Linkedin},
        {id: 1 , icon: Instagram },
        {id: 1 , icon: Youtube },
    ],
    con:[
        {id:1 , name: 'help ', slash: '/'},
        {id:2 , name: 'support', slash: '/'},
        {id:3 , name: 'contact', },
    ],
    home: [
        {id:1 , name: 'Home' , path:'/'},
        {id:2 , name: 'About' , path:'/about'},
        {id:3 , name: 'Service' , path:'/services' },
        {id:4 , name: 'FAQS' , path: '/faqs'},
        {id:5 , name: 'Contact' , path:'/contact'},
    ],
    visa: 'solution for all types of visas' , 
    best:'visa immigrations services',
    expert:'We provide expert visa guidance and smooth travel planning  to help you explore new opportunities abroad with ease and confidence',
    about: 'about the company' , 
    rely:'We\'re a  Trusted Immigration Consultancy You Can Rely On. ',
    work:'With years of experience and a global network, we simplify the visa process and provide personalized support to help you relocate, work, or study abroad with confidence.',
    immig:[
        {id:1 , name: 'best immigration resources' , icon:faMapLocationDot },
        {id:2 , name: 'return visas available' , icon:faGlobe },
    ],
    offer: [
        {id: 1 , icon: Check , name: 'offer 100% genuine assistance '},
        {id: 2 , icon: Check , name: 'it\s faster & reliable execution '},
        {id: 3 , icon: Check , name: 'accurate & expert advice '},
    ],
    year: 'years of expirence',
    team: [
        {id: 1 , icon: faGlobe , name:'visa categories' , num:'31+' },
        {id: 2 , icon: faUsers , name:'team members' , num: '377+'},
        {id: 3 , icon: faCircleCheck , name:'visa process' , num:'5k'},
        {id: 4 , icon: faHandshake , name:'success rates' , num:'98%'},
    ]
    
}
    

export default Data;