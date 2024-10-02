import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthProvider';

export const LoginPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userName = formData.get('username') as string;

    auth.singIn(userName, () => {
      navigate(location.state?.from || '/', { replace: true });
      localStorage.setItem('user', userName);
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ padding: '10px' }}>
          User name:
          <input
            style={{ marginLeft: '10px', fontSize: '20px' }}
            type="text"
            name="username"
          />
        </label>

        <button style={{ fontSize: '20px' }} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};
