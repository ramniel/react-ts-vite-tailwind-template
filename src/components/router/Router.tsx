import { Suspense } from 'react';
import { BrowserRouter, Outlet, RouteObject, useRoutes } from 'react-router-dom';
import HomeScreen from '~/components/screens/Home';
import Nav from '~/components/shared/Nav';
import NotFoundScreen from '~/components/screens/NotFound';
import Loading from '~/components/shared/Loading';

function Layout() {
  return (
    <>
      <Nav />
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
