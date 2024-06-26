import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <div className="h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>;
    }

    if(user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes,
}

export default PrivateRoute;