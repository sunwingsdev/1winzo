import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import affiliateBg from "../../assets/affiliateImages/affiliateBg.jpg";
import {
  useLazyGetAuthenticatedUserQuery,
  useLoginUserMutation,
} from "@/redux/features/allApis/usersApi/usersApi";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { logout, setCredentials } from "@/redux/slices/authSlice";

const AffiliateLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [getUser] = useLazyGetAuthenticatedUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);

      if (res?.data?.token) {
        const token = res.data.token;
        const userResponse = await getUser(token);
        const userData = userResponse?.data;

        if (
          userData?.role === "mother-admin" ||
          userData?.role === "user" ||
          !userData?.role
        ) {
          dispatch(logout());
          localStorage.removeItem("token");
          addToast("Please submit valid credentials", {
            appearance: "error",
            autoDismiss: true,
          });
          return;
        } else {
          dispatch(
            setCredentials({
              token,
              user: userData || null,
            })
          );
          addToast("Login successful", {
            appearance: "success",
            autoDismiss: true,
          });
          navigate("/affiliate");
          reset();
        }
      } else if (res?.error) {
        addToast(res.error.data?.message || "Login failed", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } catch (err) {
      console.error("Unexpected error:", err);

      addToast("Something went wrong. Please try again.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${affiliateBg})` }}
    >
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h3 className="text-left font-semibold text-2xl text-gray-800 mb-6 border-s-8 border-[#384050] ps-3">
          Affiliate login
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username */}
          <div className="form-control">
            <label className="label text-gray-700 font-medium text-xs">
              Username
            </label>
            <input
              type="text"
              placeholder=" username"
              {...register("username", { required: "Username is required" })}
              className="input input-bordered w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label text-gray-700 font-medium text-xs">
              Password
            </label>
            <input
              type="password"
              placeholder=" password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="input input-bordered w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Sign In Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
            >
              Sign In
            </button>
          </div>

          {/* Sign Up / Forgot */}
          {/* <div className="flex flex-row items-center justify-center gap-3 mt-4">
            <Link to="/affiliate/signup">
              <button
                type="button"
                className="border-2 border-[#488286] text-[#488286] py-1 px-4 rounded-md hover:text-white hover:bg-[#488286] transition"
              >
                Sign Up
              </button>
            </Link>
            <p>|</p>
            <Link to="/affiliate/forgetpass" className="text-gray-600 hover:underline">
              Forgot password?
            </Link>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default AffiliateLogin;
