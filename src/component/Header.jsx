import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";


const Header = () => {

const {user,logOut}= useContext(AuthContext)

const handleLogOut=()=>{
  logOut()
  .then(()=>{})
  .catch(error=>{
    console.log(error.message);
  })
}


  return (
    <div className="navbar bg-primary text-white">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            {user && <li>
              <Link to="/profile">Profile</Link>
            </li>}
            <li>
              <Link to="/oders">Oders</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            {user && <li>
              <Link to="/profile">Profile</Link>
            </li>}
            <li>
              <Link to="/oders">Oders</Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        {
            user? <>
            <span className="py-2 mr-2">{user.email}</span>
            <button  onClick={handleLogOut}  className="btn btn-outline btn-xs text-white" >Sign Out</button>
            </>
            :<Link className="btn btn-outline btn-xs text-white" to="/login">Sign In</Link>
        }
      </div>
    </div>
  );
};

export default Header;
