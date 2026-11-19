import { createBrowserRouter } from 'react-router';
import App from './App.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import CharactersPage from './pages/CharactersPage.jsx';
import CharacterDetailsPage from './pages/CharacterDetailsPage.jsx';
import NotFound from './pages/NotFound.jsx';
import ErrorPage from './pages/ErrorsPage.jsx';

const createRouter = import.meta.env.PROD ? createHashRouter : createBrowserRouter
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
          { path: 'characters/:id', element: <CharacterDetailsPage />},
          { path: '*', element: <NotFound /> },
        ],
      },
    ],
  },
]);
{/* <username>.github.io/myproject/settings/emails
    will try to access the path /myproject/settings/emails on the server
 
<username>.github.io/myproject/#/settings/emails
    will try to access the path /myproject/index.html */}
export default router;