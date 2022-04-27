import { Suspense } from 'react';
import { BrowserRouter, Outlet, RouteObject, useRoutes } from 'react-router-dom';
import { RequireAuth } from '~/components/auth/AuthProvider';
import HomeScreen from '~/components/screens/Home';
import NotFoundScreen from '~/components/screens/NotFound';
import Loading from '~/components/shared/Loading';
import Login from '~/components/screens/Login';
import Protected from '~/components/screens/Protected';
import NavBar from '~/components/shared/Nav/NavBar';

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

function Routes() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomeScreen />,
        },
        {
          path: '/protected',
          element: (
            <RequireAuth>
              <Protected />
            </RequireAuth>
          ),
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '*',
          element: <NotFoundScreen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);

  return <Suspense fallback={<Loading />}>{element}</Suspense>;
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
