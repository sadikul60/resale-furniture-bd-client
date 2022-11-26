import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UseSeller from '../../hooks/UseSeller';
import Loader from '../../Pages/Shared/Loader/Loader';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseSeller(user?.email);

    const location = useLocation();

    if(loading || isAdminLoading){
        return <Loader></Loader>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
    
};

export default SellerRoute;