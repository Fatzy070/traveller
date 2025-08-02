import Data from "../../data/Data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aero from'../../assets/image (1).png'
import Menu from './Menu'
import Slider from '../home/Slider'
import About from '../about/About'
import Visa from '../services/Visa'
import Navbar from "../navigations/NavBar";
import Faq from "../FAQs/Faq";
const Home = () => {
    const { smail , con , icons , home } = Data
    return (
       <>   
       <Slider/>
       <About />
       <Visa />
       <Faq />
       </>
    );
};

export default Home;