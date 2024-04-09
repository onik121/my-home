
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer pt-10 pb-14 max-w-[1440px] mx-auto px-5">
                <aside className='max-w-[300px]'>
                    <img src={logo}></img>
                    <p className='mt-3 text-base font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, suscipit!</p>
                </aside>
                <nav>
                    <h6 className="text-2xl text-black font-semibold mb-2">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav> 
                    <h6 className="text-2xl text-black font-semibold mb-2">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-2xl text-black font-semibold mb-2">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-6 bg-[#31323c] text-white">
                <p className="text-base">Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
            </footer>
        </div>
    );
};

export default Footer;