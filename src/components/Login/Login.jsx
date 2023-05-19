import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup} from "firebase/auth";
import app from "../firebase/firebase.init";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext)

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [seccess, setSuccess] = useState("");

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider()

  /*--- ----------Google Login----------------*/
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const googleUser = result.user;
      console.log(googleUser);
    })
    .catch((error) => {
      console.log("error", error.message);
    });
  }

    /*--- ----------Email Password Login----------------*/
  const handleEmailChange = (event) => {
    console.log(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const emailPassUser = result.user;
        console.log(emailPassUser);
        setUser(emailPassUser);
        setError("");
        event.target.reset();
        setSuccess("User Login Successfully");
        navigate(from)
        from.reset()
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };

  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center text-2xl font-bold mt-3">
            Please Login
          </div>
          <form onSubmit={handleSubmit} className="card-body">
{/* --- ----------Email Field---------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Email</span>
              </label>
              <input
                onChange={handleEmailChange}
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
                onBlur={handlePasswordBlur}
                type="password"
                placeholder="password"
                className="input input-bordered"
                id="password"
                required
              />
              <label className="label font">
                <Link to="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <p className="text-red-500 text-center mb-3">{error}</p>
          <p className="text-green-400 text-center mb-3">{seccess}</p>

          <div className="flex items-center gap-2 text-center mx-10">
            <h1 className="text-blue-600">New to Bangla Food?</h1>
              <Link to={"/registration"} className="bg-blue-200 font-bold text-black rounded-lg p-2">Register</Link>
          </div>

          <div className="form-control px-5 m-6">
            <button className="btn btn-success" 
            onClick={handleGoogleSignIn}
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
