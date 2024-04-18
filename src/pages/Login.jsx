import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import github from '../assets/github.png'
import google from '../assets/goole.png'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
import toast from 'react-hot-toast';
import {Helmet} from "react-helmet";

const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const googlrProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(() => {
                e.target.reset();
                toast.success('Successfully login')
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                toast.error("Invalid user")
                e.target.reset();
            }
            )
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googlrProvider)
            .then(() => {
                toast.success('Successfully login')
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleFacebookLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(() => {
                toast.success('Successfully login')
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero flex flex-col items-center justify-center min-h-[650px] max-w-[1440px] mx-auto px-5">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="flex items-center justify-center flex-col lg:flex-row-reverse p-0 w-full gap-x-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-black title">Login your account</h1>
                    <p className="py-6 login-details">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl rounded-none">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
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
                                    <input type="password" className="input input-bordered w-full" name="password" required />
                                </div>
                            </div>
                            <div className="form-control mt-4">
                                <button>Login</button>
                            </div>
                        </form>
                        <p className="text-center mt-2">or use one of these options</p>
                        <div className="flex gap-4 justify-center login-option mt-2">
                            <button onClick={handleGoogleLogin}><img src={google} alt="Google" /></button>
                            <button onClick={handleFacebookLogin}><img src={github} alt="Facebook" /></button>
                        </div>
                        <p className="text-center mt-4">Dont’t Have An Account ? <span className="font-semibold text-[#bc986b]"><Link to={'/register'}>Register</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;