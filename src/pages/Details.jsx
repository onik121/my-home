import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const details = useLoaderData();
    const { id } = useParams();
    const newId = parseInt(id);

    const book = details.find(book => book.id == newId)

    console.log(book)

    return (
        <div className="max-w-[1440px] mx-auto px-5 min-h-[600px] flex items-center">
            <Helmet>
                <title>Property Details</title>
            </Helmet>
            <div className="book-details-container flex items-center">
                <div className="book-details-img">
                    <div>
                        <img className="rounded-lg" src={book?.img}></img>
                    </div>
                </div>
                <div className="book-details-text">
                    <div className="flex items-center gap-2">
                        <h1 className="text-4xl text-black font-semibold">{book.title}</h1>
                        <p className="bg-[#bc986b] text-white rounded-md px-2 pb-[1px] mt-3 capitalize">{book.status}</p>
                    </div>
                    <h2 className="text-2xl font-medium my-5">{book.name}</h2>
                    <div className="Line"></div>
                    <p className="mt-4 text-lg"><span className="font-semibold text-black">Description:</span> {book.description}</p>
                    <div className="flex flex-wrap gap-5 my-6">
                        <span className="font-semibold text-black text-lg mt-[2px]">Facilities</span>
                        <div className="flex flex-wrap gap-5">
                            {
                                book.facilities.map((tag, idx) => <button className='facilities-tag' key={idx}># {tag}</button>)
                            }
                        </div>
                    </div>
                    <div className="Line"></div>
                    <div className="space-y-3">
                        <p className="text-lg">Location: <span className="text-black font-semibold ml-[10px]">{book.location}</span></p>
                        <p className="text-lg">Price: <span className="text-black font-semibold ml-[40px]">{book.price}</span></p>
                        <p className="text-lg">Area: <span className="text-black font-semibold ml-[40px]">{book.area}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;