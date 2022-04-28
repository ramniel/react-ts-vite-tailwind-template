import { FormEvent } from 'react';
import { Location, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '~/components/auth/AuthProvider';
import Head from '~/components/shared/Head';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  type LocationState = {
    from?: Location
  }
  const from = (location.state as LocationState)?.from?.pathname || '/';

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;

    auth.signin(username, () => {
      // Sends the user back to the page he tried to visit
      // when he was redirected to the login page.
      navigate(from, { replace: true });
    });
  }

  return (
    <>
      <Head title="Login" />
      <div className="hero flex-grow">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="pt-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda</p>
            <p className="py-2">excepturi exercitationem quasi. In deleniti eaque </p>
            <p className="pb-6">autrepudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" name="username" placeholder="username" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="text" placeholder="password" className="input input-bordered" />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
