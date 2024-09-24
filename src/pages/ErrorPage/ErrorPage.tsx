import { useNavigate } from 'react-router';

export const ErrorPage = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 2000);

  return <h1 style={{ textAlign: 'center' }}>Страница не найдена</h1>;
};
