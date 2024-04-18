import img1 from '../assets/8.jpg'
import img2 from '../assets/blog-2.jpg'
import img3 from '../assets/blog-3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Blog = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-5 mb-20">
            <div className="flex justify-between gap-5">
                <h1 className="text-5xl font-semibold text-black title">Our Latest Blog</h1>
                <button className="blog">OUR BlOG</button>
            </div>
            <div className='blog-container mt-10'>
                <div className='bg-[#f3f4f9]' data-aos="zoom-in" data-aos-duration="1000">
                    <img className='w-full' src={img1}></img>
                    <div className='p-5'>
                        <h1 className='text-[21px] mb-3 font-semibold text-black'>Special Unveiling of 568 N. Tigertail Road</h1>
                        <p className='text-base'>Our Principal and Partner, Samuel McMillan, recently celebrated the unveiling of 568 N. Tigertail Road, a newly-constructed estate</p>
                    </div>
                </div>
                <div className='bg-[#f3f4f9]' data-aos="zoom-in" data-aos-duration="1200">
                    <img className='w-full' src={img2}></img>
                    <div className='p-5'>
                        <h1 className='text-[21px] mb-3 font-semibold text-black'>Turks and Caicos Villa Sold for Record $7.6M</h1>
                        <p className='text-base'>The Agency is pleased to announce the sale of 24 Cherokee Road for $7.625 million—the highest-priced residential sale in Turks and</p>
                    </div>
                </div>
                <div className='bg-[#f3f4f9]' data-aos="zoom-in" data-aos-duration="1400">
                    <img className='w-full' src={img3}></img>
                    <div className='p-5'>
                        <h1 className='text-[21px] mb-3 font-semibold text-black'>We Build a Better LA for Fifth Year in a Row</h1>
                        <p className='text-base'>Last week, we partnered with Habitat for Humanity of Greater Los Angeles (Habitat LA) for the fifth year in a row for a build day</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;