
import { Link } from 'react-router-dom';
import { CiLocationOn, } from "react-icons/ci";
import PropTypes from 'prop-types';

const PropertyCard = ({ property }) => {
    const { title, location, status, id, img } = property;
    return (
        <div className='p-5 h-fit bg-white' data-aos="zoom-in"  data-aos-duration="1000">
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

PropertyCard.propTypes = {
    property: PropTypes,
}

export default PropertyCard;