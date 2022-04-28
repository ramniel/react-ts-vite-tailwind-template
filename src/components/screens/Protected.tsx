import Head from '~/components/shared/Head';

export default function Protected() {
  return (
    <>
      <Head title="Home" />
      <div className="hero flex-grow">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="pt-6">Provident cupiditate voluptatem et in.</p>
            <p className="py-2">Quaerat fugiat ut assumenda excepturi exercitationem.</p>
            <p className="pb-10">In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
