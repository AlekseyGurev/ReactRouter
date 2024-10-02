import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../../context/AuthProvider';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
};
