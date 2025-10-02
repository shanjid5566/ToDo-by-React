import React, { useContext, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import AuthContext from "../services/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { createUser, setUsers, GoogleSignIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    acceptedTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Create user

    createUser(formData.email, formData.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUsers(user);
        navigate("/dashboard/mytask");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUsers(user)
        navigate("/dashboard/mytask")
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg ">
        {/* Left Form Section */}
        <div className="p-10 flex flex-col max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Create Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Ann Snow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="AnnSnow@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="********"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-sm">accept Terms and conditions</label>
            </div>
            <div className="mx-auto flex justify-center items-center w-full">
              <button
                type="submit"
                className="w-80 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition "
              >
                Register
              </button>
            </div>
          </form>

          <div className="text-center mt-4 text-gray-500">Or register with</div>
          <div className="flex justify-center  flex-col gap-4 mt-2 max-w-48 mx-auto">
            <button
              onClick={handleGoogleSignIn}
              className="p-2 border rounded-full hover:bg-gray-100 transition flex justify-center items-center gap-2"
            >
              <FaGoogle />
              Register with Google
            </button>
          </div>
          <div>
            <Link to={"/login"}>
              <button className=" w-full mx-auto mt-2">
                Already have an accunt?{" "}
                <span className="text-green-300">Login</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
