import Head from '~/components/shared/Head';

export default function NotFoundScreen() {
  return (
    <>
      <Head title="Page not found" />
      <div className="hero flex-grow">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Page not found</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
            <a className="btn btn-primary" href="/">
              Go to homepage
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
