import React, { useContext } from "react";
import RegisterBgImg from "./../assets/register.svg";
import Logo from "./../assets/Logo (1).png";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);

  const registerHandle = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    console.log(email, password,name, photoUrl);

    createUser(email,password)
    .then(result =>{
        console.log(result)
    })
    .catch(error =>{
        console.log("Error",error.message)
    })

  };

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 bg-white mx-10 my-10 rounded-3xl">
        <div className="w-3/4 mx-auto my-10 flex flex-col justify-between">
          <div className="text-center items-center flex flex-col">
            <img className="w-10 mb-4" src={Logo} alt="" />
            <h2>Welcome Back!</h2>
          </div>

          <div>
            <form onSubmit={registerHandle} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  name="photoUrl"
                  required
                />
              </div>
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
                  name="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6 gap-y-4">
                <button className="btn btn-primary rounded-full cursor-pointer">
                  Register
                </button>
              </div>
            </form>
            <button className="w-full btn mt-4 btn-primary rounded-full cursor-pointer">
              Login with Google
            </button>
          </div>
          <p className="cursor:pointer text-center mt-4">
            <Link to={"/login"}>Already have account? Login</Link>
          </p>
        </div>
        <div className="bg-primaryBg p-10 m-10 rounded-3xl">
          <img src={RegisterBgImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
