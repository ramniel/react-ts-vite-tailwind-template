import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Head from './shared/Head';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <HelmetProvider>
      <Head title="Home" />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              App template using{' '}
              <a className="link link-primary" href="https://vitejs.dev/">
                Vite
              </a>
              ,{' '}
              <a className="link link-secondary" href="https://es.reactjs.org">
                React
              </a>{' '}
              and{' '}
              <a className="link link-accent" href="https://tailwindcss.com/">
                TailwindCSS
              </a>
            </p>
            <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
              Count is: {count}
            </button>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
