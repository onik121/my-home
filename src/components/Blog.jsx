
import img from '../assets/8.jpg'


const Blog = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-5 mb-20">
            <div className="flex justify-between">
                <h1 className="text-5xl font-semibold text-black">Our Latest Blog</h1>
                <button className="blog">OUR BlOG</button>
            </div>
            <div className='blog-container mt-10'>
                <div>
                    <img src={img}></img>
                    <h1 className='text-xl mt-3 mb-1 font-semibold text-black'>10 Ways to Maximize Your Real Estate Investmente</h1>
                    <p>December 10, 2024  No Comments</p>
                </div>
                <div>
                    <img src={img}></img>
                    <h1 className='text-xl mt-3 mb-1 font-semibold text-black'>10 Ways to Maximize Your Real Estate Investmente</h1>
                    <p>December 18, 2024  No Comments</p>
                </div>
                <div>
                    <img src={img}></img>
                    <h1 className='text-xl mt-3 mb-1 font-semibold text-black'>10 Ways to Maximize Your Real Estate Investmente</h1>
                    <p>December 23, 2024  No Comments</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;