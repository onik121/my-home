import { Helmet } from 'react-helmet'
import logo1 from '../assets/Logo-1.png'
import logo2 from '../assets/Logo-2.png'
import logo3 from '../assets/Logo-3.png'
import logo4 from '../assets/Logo-4.png'
import logo5 from '../assets/Logo-5.png'
import logo6 from '../assets/Logo-6.png'
import logo7 from '../assets/Logo-7.png'
import logo8 from '../assets/Logo-8.png'
import { Scroll } from '../components/Scroll'

const OurClients = () => {
    return (
        <div className='max-w-[1440px] px-5 mx-auto mt-2 mb-10'>
            <Scroll></Scroll>
            <Helmet>
                <title>Our Clients</title>
            </Helmet>
            <div className='text-center mb-8 max-w-[870px] mx-auto'>
                <h1 className='text-5xl font-semibold text-black title mb-5'>Our Clients</h1>
                <p className='text-lg'>We are committed to delivering projects with the highest level of quality and accuracy. We build strong partnerships with our clients to ensure the success of each project.</p>
            </div>
            <div className='logo-container'>
                <div data-aos="zoom-in" data-aos-duration="1000"><img src={logo1}></img></div>
                <div data-aos="zoom-in" data-aos-duration="1000"><img src={logo2}></img></div>
                <div data-aos="zoom-in" data-aos-duration="1000"><img src={logo3}></img></div>
                <div data-aos="zoom-in" data-aos-duration="1000"><img src={logo4}></img></div>
                <div data-aos="zoom-in" data-aos-duration="1000"><img src={logo5}></img></div>
                <div data-aos="zoom-in" data-aos-duration="1000"><img src={logo6}></img></div>
                <div data-aos="zoom-in" data-aos-duration="1000"><img src={logo7}></img></div>
                <div data-aos="zoom-in" data-aos-duration="1000"><img src={logo8}></img></div>
            </div>
        </div>
    );
};

export default OurClients;