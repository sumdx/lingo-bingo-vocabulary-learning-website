import { updateProfile } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase.init";
import { Navigate, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();

    const updateProfileHandle = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const profile ={
            displayName : name,
            photoURL : photoUrl,
        }
        updateProfile(auth.currentUser,profile)
        .then(result =>{
           navigate("/my-profile")
        })
        .catch(error =>{
            
        })
    }

  return (
    <div>
      <div className="pt-10 pb-40 bg-custom-gradient rounded-2xl">
        <h1 className="text-5xl font-bold text-center text-white">
          Update Your Profile
        </h1>
      </div>
      <div className="-mt-20 pb-10 flex rounded-2xl shadow-xl flex-col gap-6 container mx-auto items-center mb-10 bg-white">
            {/* Form */}
            <form onSubmit={updateProfileHandle} className=" pt-10">
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
                
              <div className="form-control mt-6 gap-y-4">
                <button className="btn btn-primary rounded-full cursor-pointer">
                  Update Profile
                </button>
              </div>
            </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
