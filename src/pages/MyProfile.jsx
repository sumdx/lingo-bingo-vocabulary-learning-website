import React, { useContext } from "react";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { displayName, email, photoURL } = auth.currentUser;
  const { user, signOutUser } = useContext(AuthContext);

  const signOutHandle = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div>
      <div className="pt-10 pb-40 bg-custom-gradient rounded-2xl">
        <h1 className="text-5xl font-bold text-center text-white">
          Welcome <br /> <span className="font-medium">{displayName}</span>
        </h1>
      </div>
      <div className="-mt-20 pb-10 flex rounded-2xl shadow-xl flex-col gap-6 container mx-auto items-center mb-10 bg-white">
        <div className="">
          <img
            className="-mt-16 h-32 rounded-full border-4 p-1 border-b-gradientStart "
            src={photoURL}
            alt="Photo"
          />
        </div>
        <div className="flex flex-col justify-between text-center gap-2">
          <p className="font-semibold text-xl">{displayName}</p>
          <p>Email : {email}</p>
        </div>
        <div className="flex gap-4">
          <Link
            onClick={signOutHandle}
            className="btn bg-primaryAccent hover:bg-buttonHover text-white"
          >
            Logout
          </Link>
          <Link to={"/update-profile"}>
          <a
            className="btn bg-primaryAccent hover:bg-buttonHover text-white"
          >
            Update Profile
          </a>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
