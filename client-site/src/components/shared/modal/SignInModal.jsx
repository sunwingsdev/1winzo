import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlineMailOutline, MdPhoneAndroid } from "react-icons/md";
import GoogleSignIn from "./GoogleSignIn";
import { useLocation, useNavigate } from "react-router";
import { useToasts } from "react-toast-notifications";
import {
  useLazyGetAuthenticatedUserQuery,
  useLoginUserMutation,
} from "../../../redux/features/allApis/usersApi/usersApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../redux/slices/authSlice";

const SignInModal = ({ closeModal }) => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [getUser] = useLazyGetAuthenticatedUserQuery();
  const [activeTab, setActiveTab] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { addToast } = useToasts();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const { data: loginData } = await loginUser({ email, password });
    if (loginData.token) {
      const { data: userData } = await getUser(loginData.token);
      dispatch(setCredentials({ token: loginData.token, user: userData }));
      addToast("Login successful", {
        appearance: "success",
        autoDismiss: true,
      });
      navigate("/");
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="text-white bg-[#152234] w-[90%] lg:w-[900px] 2xl:w-[900px] h-auto 2xl:h-[700px] rounded-lg shadow-lg flex overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 md:top-4 right-2 md:right-4 text-[#59647a] text-lg hover:text-blue-600 duration-300"
        >
          <FaTimes />
        </button>

        {/* Left Section - Image */}
        <div className="w-1/2 lg:block hidden">
          <img
            className="w-full h-full object-cover"
            src="https://ifrd.4rabetsite25.com/img/registration-modal-HI.webp"
            alt=""
          />
        </div>

        {/* Right Section - Tabs and Sign In Form */}
        <div className="w-full lg:w-1/2 p-4 md:p-8 flex flex-col justify-center overflow-y-auto scrollbar-hide 2xl:pt-0 2xl:mt-6">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">
            LOGIN
          </h2>

          {/* Tabs */}
          <div className="flex gap-3 mb-4">
            <button
              className={`flex justify-center items-center gap-2 w-1/2 text-center py-2 font-semibold bg-[#1c2d44] rounded-lg ${
                activeTab === "email"
                  ? "bg-blue-600 text-white"
                  : "text-[#59647a]"
              }`}
              onClick={() => setActiveTab("email")}
            >
              <MdOutlineMailOutline size={28} />
              Email
            </button>
            <button
              className={`flex justify-center items-center gap-2 w-1/2 text-center py-2 font-semibold bg-[#1c2d44] rounded-lg ${
                activeTab === "phone"
                  ? "bg-blue-600 text-white"
                  : "text-[#59647a]"
              }`}
              onClick={() => setActiveTab("phone")}
            >
              <MdPhoneAndroid size={28} />
              Phone
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="flex flex-col">
            {activeTab === "email" && (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-4 px-5 py-3 bg-[#1c2d44] rounded-lg focus:outline-none"
                  placeholder="Email"
                  required
                />
              </>
            )}
            {activeTab === "phone" && (
              <>
                <input
                  type="number"
                  // value={phone}
                  // onChange={(e) => setPhone(e.target.value)}
                  className="w-full mb-4 px-5 py-3 bg-[#1c2d44] rounded-lg focus:outline-none"
                  placeholder="Phone Number"
                  required
                />
              </>
            )}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 px-5 py-3 bg-[#1c2d44] rounded-lg focus:outline-none"
              placeholder="Password"
              required
            />

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-sm font-bold bg-blue-500 text-white py-3 rounded-2xl hover:bg-blue-600 duration-300"
            >
              SIGN IN
            </button>
          </form>

          <div className="flex justify-center items-center gap-2 mt-5">
            <p className="w-full h-1 border-b border-[#2d3949]"></p>
            <p className="text-sm font-bold text-white">OR</p>
            <p className="w-full h-1 border-b border-[#2d3949]"></p>
          </div>

          {/* Google Login */}
          <GoogleSignIn closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
