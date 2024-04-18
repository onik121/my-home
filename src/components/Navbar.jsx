import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import use from '../assets/user2.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navlinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About Us</NavLink></li>
        {/* <li><NavLink to={'/fag'}>Faq</NavLink></li> */}
        {
            user && <li><NavLink to={'/updateprofile'}>Update Profile</NavLink></li>
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar p-0 mb-3 fixed z-50 bg-white">
            <div className="navbar max-w-[1440px] mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link to={'/'}><img src={logo}></img></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    {
                        user &&
                        <div className="w-9 tooltip tooltip-bottom cursor-pointer" data-tip={user?.displayName}>
                            {
                                user? <img className="rounded-full w-[35px] h-[35px]" src={user?.photoURL} /> : <img className="rounded-full w-[35px] h-[35px]" src={use} />
                            }
                        </div>
                    }
                    {user ?
                        <button onClick={handleLogOut} className="login">Logout</button> :
                        <Link to={'/login'}><button className="login">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;