import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import use from '../assets/user.png'
import { Helmet } from "react-helmet";

const UpdateProfile = () => {

    const { user } = useContext(AuthContext);
    console.log(user)
    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateProfile(user, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                window.location.reload();
            })
    }

    return (
        <div className="min-h-[700px] flex items-center justify-center max-w-[900px] mx-auto px-5">
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div className="flex justify-between items-center w-full gap-12 update-profile-div">
                <div>
                    <div className="mb-5 flex justify-center">
                        {
                            user ? <img className="w-[160px] h-[160px] rounded-full" src={user?.photoURL}></img> : <img className="w-[160px] h-[160px] rounded-full" src={use}></img>
                        }
                    </div>
                    <h1 className="capitalize text-4xl text-black font-semibold text-center">Hi, {user?.displayName}</h1>
                    <p className="text-center mt-5 font-semibold">Email: {user.email}</p>
                </div>
                <div className="flex items-center justify-center">
                    <form className="update-form" onSubmit={handleUpdate}>
                        <div>
                            <label>Your Name</label>
                            <input type="text" name="name" id="" required />
                        </div>
                        <div className="mt-4">
                            <label>Photo Url</label>
                            <input type="text" name="photo" id="" required />
                        </div>
                        <button className="submit mt-5">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;