import { useSelector, useDispatch } from 'react-redux';
import { setCredentials, logout as logoutAction } from '../store/slices/authSlice';
import { useLoginMutation } from '../store/api/adminEndpoints';

export const useAuth = () => {
    const dispatch = useDispatch();
    const { admin, token, loading } = useSelector((state) => state.auth);
    const [loginMutation] = useLoginMutation();

    const login = async (email, password) => {
        try {
            const result = await loginMutation({ email, password }).unwrap();
            const { token: newToken, ...adminData } = result.data;
            localStorage.setItem('adminToken', newToken);
            dispatch(setCredentials({ admin: adminData, token: newToken }));
            return { success: true };
        } catch (error) {
            return {
                success: false,
                error: error?.data?.error || 'Login failed',
            };
        }
    };

    const logout = () => {
        dispatch(logoutAction());
    };

    return {
        admin,
        user: admin,
        token,
        loading,
        login,
        logout,
        isAuthenticated: !!admin,
    };
};

export const AuthProvider = ({ children }) => children;
