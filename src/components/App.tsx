import { HelmetProvider } from 'react-helmet-async';
import Router from '~/components/router/Router';

export default function App() {
  return (
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  );
}
