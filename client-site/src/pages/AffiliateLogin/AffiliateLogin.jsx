import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import affiliateBg from "../../assets/images/aff-login.jpg";
import {
  useLazyGetAuthenticatedUserQuery,
  useLoginUserMutation,
} from "@/redux/features/allApis/usersApi/usersApi";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { logout, setCredentials } from "@/redux/slices/authSlice";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const AffiliateLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const { data: homeControls } = useGetHomeControlsQuery();
  const [getUser] = useLazyGetAuthenticatedUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const logo = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected
  );

  const onSubmit = async (data) => {
    try {
      const res = await loginUser(data);

      if (res?.data?.token) {
        const token = res.data.token;
        const userResponse = await getUser(token);
        const userData = userResponse?.data;

        if (userData?.role === "user" || !userData?.role) {
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
      className="flex flex-col items-center justify-center gap-4 min-h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${affiliateBg})` }}
    >
      <div className="flex flex-col max-w-md w-full items-center justify-center gap-4">
        <img
          src={`${import.meta.env.VITE_BASE_API_URL}${logo?.image}`}
          alt=""
        />
        <div className="bg-white w-full p-4 space-y-3 rounded-lg shadow-lg">
          <div className="flex items-center">
            {/* Left border - now with visible styling */}
            <div className="border-l-8 border-gray-800 h-12 mr-2"></div>

            {/* Main heading */}
            <div className="w-full rounded-md font-semibold text-2xl text-white text-center bg-gray-800 py-2 px-4">
              Login Dashboard
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            {/* Username */}
            <div className="form-control space-y-1">
              <label className="label text-gray-700 font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                {...register("username", { required: "Username is required" })}
                className="input input-bordered w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="form-control space-y-1">
              <label className="label text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="input input-bordered w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
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
            <div className="flex flex-row items-center justify-center gap-1">
              <p className="text-gray-600">I don&apos;t have an account</p>
              <p>-</p>
              <Link
                to="#"
                className="text-green-900 font-semibold hover:underline"
              >
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AffiliateLogin;
