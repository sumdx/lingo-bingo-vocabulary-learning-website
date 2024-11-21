import React, { useContext, useRef, useState } from "react";
import LoginImgBg from "./../assets/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./../assets/Logo (1).png";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.init";


const Login = () => {
  const [error, seterror] = useState("");

  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  const from = location.state?.from?.pathname || "/";

  const forgtoPassHandle = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!")
        
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        const errorMessage = error.message;

      });
  };

  const loginHandle = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        
        navigate(from, { replace: true });
        //navigate("/");
      })
      .catch((error) => {
        seterror(error.message);
        
      });
   
  };
  const googleSignInHandle = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };

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
                  ref={emailRef}
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
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    <Link onClick={forgtoPassHandle} >Forgot password?</Link>
                  </a>
                </label>
                <p className="text-red-600">{error}</p>
              </div>
              <div className="form-control mt-6 gap-y-4">
                <button className="btn btn-primary rounded-full cursor-pointer">
                  Login
                </button>
              </div>
            </form>
            <button
              onClick={googleSignInHandle}
              className="w-full btn mt-2 btn-primary rounded-full cursor-pointer"
            >
              Login with Google
            </button>
          </div>
          <Link className="cursor:pointer text-center mt-4" to={"/register"}>
            Don't have account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
