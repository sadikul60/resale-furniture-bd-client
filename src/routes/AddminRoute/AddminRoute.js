import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/UseAdmin';
import Loader from '../../Pages/Shared/Loader/Loader';

const AddminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    const location = useLocation();

    if(loading || isAdminLoading){
        return <Loader></Loader>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default AddminRoute;