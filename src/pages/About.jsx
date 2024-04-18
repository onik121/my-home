import { IoLocationOutline } from "react-icons/io5";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { SlWallet } from "react-icons/sl";
import agent1 from '../assets/agents-1.jpg'
import agent2 from '../assets/agents-2.jpg'
import agent3 from '../assets/agents-3.jpg'
import agent4 from '../assets/agents-4.jpg'

const About = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-5 mt-2">
            <div className="about-container">
                <div data-aos="zoom-in" data-aos-duration="1000">
                    <div className="about-icon-box"><IoLocationOutline className="text-4xl text-[#bc986b]" /></div>
                    <h1 className="text-[28px] text-black font-medium mt-2 mb-3">Various Locations</h1>
                    <p>We have lots of properties in various locations available for purchase.</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200">
                    <div className="about-icon-box"><SlWallet className="text-4xl text-[#bc986b]" /></div>
                    <h1 className="text-[28px] text-black font-medium mt-2 mb-3">No Commission</h1>
                    <p>Opportunity to acquire a quality apartment for rent without having to pay any commission.</p>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1300">
                    <div className="about-icon-box"><HiMagnifyingGlass className="text-4xl text-[#bc986b]" /></div>
                    <h1 className="text-[28px] text-black font-medium mt-2 mb-3">View Apartments</h1>
                    <p>View apartment listings with photos, HD videos, virtual tours, 3D floor plans etc.</p>
                </div>
            </div>
            <div className="about-agent-container mt-[60px] mb-10">
                <div className="bg-[#f3f4f9]" data-aos="zoom-in" data-aos-duration="1500">
                    <img src={agent1}></img>
                    <div className="text-center p-7">
                        <h1 className="text-2xl text-black font-medium mb-1">Michael Rutter</h1>
                        <p>Home Broker</p>
                    </div>
                </div>
                <div className="bg-[#f3f4f9]" data-aos="zoom-in" data-aos-duration="1500">
                    <img src={agent2}></img>
                    <div className="text-center p-7">
                        <h1 className="text-2xl text-black font-medium mb-1">Sam Wilson</h1>
                        <p>Home Broker</p>
                    </div>
                </div>
                <div className="bg-[#f3f4f9]" data-aos="zoom-in" data-aos-duration="1500">
                    <img src={agent3}></img>
                    <div className="text-center p-7">
                        <h1 className="text-2xl text-black font-medium mb-1">Janet Richmond</h1>
                        <p>Home Broker</p>
                    </div>
                </div>
                <div className="bg-[#f3f4f9]" data-aos="zoom-in" data-aos-duration="1500">
                    <img src={agent4}></img>
                    <div className="text-center p-7">
                        <h1 className="text-2xl text-black font-medium mb-1">Carl Parker</h1>
                        <p>Home Broker</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;