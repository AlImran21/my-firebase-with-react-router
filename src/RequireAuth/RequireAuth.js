import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    const location = useLocation();

    if (loading) {
        return <p>Loading...</p>
    }

    if (!user) {
        return <Navigate to="/user" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;