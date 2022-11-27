import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UseUser from '../../hooks/UseUser';
import Loader from '../../Pages/Shared/Loader/Loader';

const UserRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isUser, isUserLoading] = UseUser(user?.email);

    const location = useLocation();

    if(loading || isUserLoading){
        return <Loader></Loader>
    }

    if(user && isUser){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default UserRoute;