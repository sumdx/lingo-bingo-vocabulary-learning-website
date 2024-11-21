import React, { useContext } from "react";
import LoginImgBg from "./../assets/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./../assets/Logo (1).png";
import { AuthContext } from "../providers/AuthProvider";



const Login = () => {
    
    const {signInUser,signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from =location.state?.from?.pathname || '/';

    const loginHandle = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password =e.target.password.value;
        signInUser(email,password)
        .then(result =>{
            e.target.reset();
            navigate(from,{replace:true});
            //navigate("/");
        })
        .catch(error => {

        })
    }
    const googleSignInHandle =() =>{
        signInWithGoogle()
        .then(result =>{
          navigate(from,{replace:true});
        })
        .catch(error => {

        })
    }
    
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 bg-white mx-10 my-10 rounded-3xl">
        <div className="bg-primaryBg p-10 m-10 rounded-3xl">
          <img src={LoginImgBg} alt="" />
        </div>
        <div className="w-3/4 mx-auto my-10 flex flex-col justify-between">
            <div className="text-center items-center flex flex-col">
              <img className="w-10 mb-4" src={Logo} alt="" />
              <h2>Welcome Back!</h2>
            </div>
            
            <div>
            <form onSubmit={loginHandle} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name = "password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    <Link to={"/forgot-password"}>Forgot password?</Link>
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 gap-y-4">
                <button  className="btn btn-primary rounded-full cursor-pointer">
                  Login
                </button>
              </div>
            </form>
            <button onClick={googleSignInHandle} className="w-full btn mt-4 btn-primary rounded-full cursor-pointer">
                  Login with Google
            </button>
            </div>
            <p className="cursor:pointer text-center">
              <Link to={"/register"}>Don't have account? Sign Up</Link>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
