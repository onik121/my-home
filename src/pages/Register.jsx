import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import toast from 'react-hot-toast';
import { Helmet } from "react-helmet";
import { Scroll } from "../components/Scroll";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters')
            return;
        }
        else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            toast.error('At least one uppercase and lowercase letter')
            return;
        }
        createUser(email, password)
            .then((result) => {
                navigate('/')
                toast.success('Registration Successful')
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        window.location.reload();
                    })
            }
            )
            .catch((error) => {
                e.target.reset()
                toast.error(error.code)
            }
            )
    }


    return (
        <div className="hero flex flex-col items-center justify-center min-h-[700px] max-w-[1440px] mx-auto px-5">
            <Scroll></Scroll>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="flex items-center justify-center flex-col lg:flex-row-reverse p-0 w-full gap-x-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-black title">Register your account</h1>
                    <p className="py-6 login-details">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl rounded-none">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Your Name</span>
                            </label>
                            <input type="text" className="input input-bordered" name="name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text" className="input input-bordered" name="photo" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Your Email</span>
                            </label>
                            <input type="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <div className="flex items-center">
                                <input type={show ? 'text' : 'password'} className="input input-bordered w-full" name="password" required />
                                <span className="cursor-pointer -ml-7" onClick={() => setShow(!show)}>{show ? <FaEye></FaEye> : <FaEyeSlash />}</span>
                            </div>
                        </div>
                        <div className="form-control mt-4">
                            <button>Register</button>
                        </div>
                        <p className="text-center mt-4">Do Have An Account ? <span className="font-semibold text-[#bc986b]"><Link to={'/login'}>Login</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;