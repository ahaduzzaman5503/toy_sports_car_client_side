import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center text-2xl font-bold mt-3">
            Please Login
          </div>
          <form className="card-body">
{/* --- ----------Email Field---------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Email</span>
              </label>
              <input
                placeholder="email"
                className="input input-bordered"
                id="email"
                required
              />
            </div>

{/* --- ----------PassWord Field---------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                id="password"
                required
              />
              <label className="label font">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <div className="flex items-center gap-2 text-center mx-10">
            <h1 className="text-blue-600">New to Bangla Food?</h1>
              <Link to={"/registration"} className="bg-blue-200 font-bold text-black rounded-lg p-2">Register</Link>
          </div>

          <div className="form-control px-5 mt-6">
            <button className="btn btn-success" >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
