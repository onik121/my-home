import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {

    const [properties, setProperties] = useState([]);
    const [data, setData] = useState(6)

    useEffect(() => {
        fetch('properties.json')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [])


    return (
        <div className="bg-[#f3f4f9] mt-20 mb-20 py-10">
            <div className="text-center max-w-[870px] mx-auto mb-12">
                <h1 className="text-5xl font-semibold text-black">Featured Properties</h1>
                <p className="mt-4 text-lg">Our passion for design shines through in every detail, ensuring that each space we create becomes a masterpiece of comfort and functionality.</p>
            </div>
            <div className="max-w-[1440px] mx-auto px-5 card-container">
                {
                    properties.slice(0, data).map(property => <PropertyCard key={property.id} property={property}></PropertyCard>)
                }
            </div>
            <div className={data === properties.length ? 'hidden': 'text-center'}>
                <button className="view mt-8" onClick={ () => setData(properties.length) }>View all Properties</button>
            </div>
        </div>
    );
};

export default Properties;