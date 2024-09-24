import { Outlet } from 'react-router';

export const MainPage = () => {
  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>Вселенная Рика и Морти</h1>
      </div>
      <Outlet />
    </>
  );
};
