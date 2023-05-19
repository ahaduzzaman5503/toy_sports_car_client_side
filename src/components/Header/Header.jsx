import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { users, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    console.log("logout");
    logOut();
  };
  return (
    <div className="container mx-auto">
      <div className="navbar bg-primary text-primary-content rounded shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/alltoys">All Toys</Link>
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <Link to="/addtoy">Add Toy</Link>
              </li>
              <li>
                <Link to="/mytoy">My Toy</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <Link to="/">Toy Sports Car</Link>
          </a>
          <a>
            <Link to="/">
              <img
                className="w-8"
                src="https://i.ibb.co/DMhpSK3/toy-car-logo.png"
                alt="toy-car-logo"
                border="0"
              />
            </Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/alltoys">All Toys</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            {users ? (
              <>
                <li>
                  <Link to="/addtoy">Add Toy</Link>
                </li>
                <li>
                  <Link to="/mytoy">My Toy</Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center items-center gap-3">
            {users ? (
              <>
                <button onClick={handleLogout}>SignOut</button>
                <div className="avatar">
                  <div
                    title={users.displayName}
                    className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                  >
                    <img src={users.photoURL} />
                  </div>
                </div>
              </>
            ) : (
              <button className="btn btn-accent">
                {" "}
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
