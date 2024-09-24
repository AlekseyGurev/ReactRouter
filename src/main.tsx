import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { MainPage } from './pages/MainPage/MainPage.tsx';
import { Navigation } from './components/Navigation/Navigation.tsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage.tsx';
import { CategoryPage } from './pages/CategoryPage/CategoryPage.tsx';
import { ElementPage } from './pages/ElementPage/ElementPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/',
        element: <Navigation />,
      },
    ],
  },

  {
    path: '/category/:category',
    element: (
      <>
        <Navigation />
        <CategoryPage />
      </>
    ),
  },

  {
    path: '/category/:category/:id',
    element: (
      <>
        <Navigation />
        <ElementPage />
      </>
    ),
  },

  {
    path: '*',
    element: <ErrorPage />,
  },
]);
const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(<RouterProvider router={router} />);
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
