import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {
  const {signIn}= useContext(AuthContext)

    const handleLogin=event=>{
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser);
        })
        .catch(error=>{
          console.log(error.message);
        })

    }


    return (
        <div className="p-2 md:px-6">
      <div className="hero md:min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Login!!</h1>
    
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password" name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p>Haven't an account <Link to="/register" href="#" className="link link-hover">
                    Register
                  </Link> </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;