import React, { useContext } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import Logo from './../assets/Logo (1).png';
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {

  const {user,signOutUser} = useContext(AuthContext);

  const signOutHandle =() =>{
    signOutUser()
    .then(()=>{
      
    })
    .catch(error => {

    })
  }

  const menuItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/start-learning"} >Start Learning</NavLink>
      </li>
      
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      {
        user && <>
        <li>
        <NavLink to={"/tutorials"}>Tutorials</NavLink>
      </li> <li>
        <NavLink to={"/my-profile"}>My Profile</NavLink>
      </li> </> 
      }
      
    </>
  );
  return (
    <div className="container mx-auto pt-4">
      <div className="bg-primaryBg navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <div className="flex items-center">
          <img className="h-6" src={Logo} alt="" />
          <a className="ml-2 font-medium text-xl">Lingo Bingo</a>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-2">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? 
            <div className="flex items-center gap-4"> 
              <h1>Welcome, <span className="font-semibold">{user.displayName.split(" ")[0]}</span> </h1> 
              <a onClick={signOutHandle} className="btn bg-primaryAccent hover:bg-buttonHover text-white"><Link >Logout</Link></a> 
            </div>
            :
             
            <Link className="btn bg-primaryAccent hover:bg-buttonHover text-white" to={"/login"}>Login</Link>
          }
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
