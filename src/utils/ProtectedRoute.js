import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  return !currentUser ? <Navigate to="/login" /> : children;
};
