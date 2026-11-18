import { createBrowserRouter } from 'react-router';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import CharactersPage from './pages/CharactersPage.jsx';
import NotFound from './pages/NotFound.jsx';
import ErrorPage from './pages/ErrorsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'about', element: <AboutPage /> },
          { path: 'characters', element: <CharactersPage /> },
          { path: '*', element: <NotFound /> },
        ],
      },
    ],
  },
]);

export default router;