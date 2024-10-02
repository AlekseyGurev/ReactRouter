import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthProvider';

export const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSingOut = () => {
    auth.singOut(() => {
      navigate('/');
      localStorage.removeItem('user');
    });
  };

  if (!auth.user) {
    return (
      <div>
        <p
          style={{
            margin: '0',
            fontSize: '30px',
          }}
        >
          You are not logged in
        </p>
      </div>
    );
  }
  return (
    <>
      <p
        style={{
          margin: '0',
          fontSize: '30px',
        }}
      >
        Welcome, {auth.user}
      </p>
      <button onClick={handleSingOut}>Sign out</button>
    </>
  );
};
