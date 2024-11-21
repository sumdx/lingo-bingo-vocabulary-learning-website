import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, replace, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <span className="loading loading-dots loading-lg"></span>;
    }

    if(user){
        return children;
    }

    return (
        
        <Navigate to="/login" state={{from:location}} replace/>
    );
};

export default PrivateRoute;