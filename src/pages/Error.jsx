
import { Link } from 'react-router-dom';
import img from '../assets/error-404.png'

const Error = () => {
    return (
        <div className='flex items-center justify-center h-screen text-center'>
            <div>
                <img src={img} className='mx-auto'></img>
                <h1 className='text-5xl mt-4 mb-10 font-semibold text-black title'>Opps! page not found</h1>
                <Link to={'/'} className='return-home'>Return home</Link>
            </div>
        </div>
    );
};

export default Error;