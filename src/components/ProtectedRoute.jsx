import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loader from './Loader';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <Loader fullScreen text="Authenticating..." />;
    }

    return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
