
import { Link } from 'react-router-dom';
import { CiLocationOn, } from "react-icons/ci";

const PropertyCard = ({ property }) => {
    const { title, location, status, id, img } = property;
    return (
        <div className='bg-white p-5'>
            <img className='-mt-10 relative h-[250px] w-full card-img' src={img}></img>
            <div className='status absolute'>{status}</div>
            <h1 className='text-2xl text-black font-semibold mt-2'>{title}</h1>
            <div className='flex items-center mt-3 mb-5 gap-2 -ml-1'>
                <CiLocationOn className='text-2xl text-[#bc986b]' />
                <p className='font-semibold'>{location}</p>
            </div>
            <Link to={`/property/${id}`}><button className='view'>View Property</button></Link>
        </div>
    );
};

export default PropertyCard;