import Head from '~/components/shared/Head';

export default function HomeScreen() {
  return (
    <>
      <Head title="Home" />
      <div className="hero bg-sm md:bg-md flex-grow">
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Template for lightning-fast startups with instant hot module replacement and complex responsive layout
              creation
            </p>
            <p className="py-6 text-1xl">
              Built with{' '}
              <a className="link text-green-500" href="https://vitejs.dev/">
                Vite
              </a>
              ,{' '}
              <a className="link text-green-500" href="https://es.reactjs.org">
                React
              </a>{' '}
              and{' '}
              <a className="link text-green-500" href="https://tailwindcss.com/">
                TailwindCSS
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
