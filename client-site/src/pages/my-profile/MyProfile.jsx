import PageTop from "../../components/shared/PageTop";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { BsUiRadiosGrid } from "react-icons/bs";
import { Link } from "react-router";
import { useToasts } from "react-toast-notifications";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

const MyProfile = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    addToast("Successfully logged out!", {
      appearance: "success",
      autoDismiss: true,
    });
  };
  return (
    <div className="bg-[#091222] pt-10 sm:pt-14 mt-[51px] lg:mt-0">
      <PageTop title="Personal Data" Icon={BsUiRadiosGrid} />
      <div className=" flex flex-col items-center justify-center bg-[#182436]">
        <form className="pl-4 md:pl-10 pr-4 md:pr-28 py-12 md:py-14 w-full ">
          <div className="w-full flex flex-col md:flex-row items-center gap-10">
            <div className="flex flex-col items-start w-full md:w-1/2 relative">
              <label
                htmlFor="email"
                className="bg-[#182436] absolute -top-6 left-0 pl-5 pr-2 py-1 rounded-e-3xl text-slate-400 z-10"
              >
                Email
              </label>
              <div className="w-full flex flex-row items-center relative">
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="w-full py-4 px-4 rounded-3xl bg-[#091222] text-white outline-none"
                />
                <button className=" bg-green-600 text-white text-sm font-semibold p-4 rounded-3xl flex flex-row items-center justify-center gap-1 absolute top-0 right-0 bottom-0">
                  <FaRegCircleCheck />
                  Confirmed
                </button>
              </div>
            </div>

            <div className="flex flex-col items-start w-full md:w-1/2 relative">
              <label
                htmlFor="phone"
                className="bg-[#182436] absolute -top-6 left-0 pl-5 pr-2 py-1 rounded-e-3xl text-slate-400"
              >
                Phone Number
              </label>
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="w-full py-4 px-4 rounded-3xl bg-[#1c2d44] text-white outline-none"
              />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start w-full relative">
              <label
                htmlFor="name"
                className="bg-[#182436] absolute -top-6 left-0 pl-5 pr-2 py-1 rounded-e-3xl text-slate-400 z-10"
              >
                Name
              </label>
              <div className="w-full flex flex-row items-center relative">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="w-full py-4 px-4 rounded-3xl bg-[#1c2d44] text-white outline-none"
                />
                <button className=" bg-[#1c2d44] text-slate-400 text-sm font-semibold p-4 rounded-3xl flex flex-row items-center justify-center gap-1 absolute top-0 right-0 bottom-0">
                  <FaPencilAlt />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-start w-full relative">
              <label
                htmlFor="surname"
                className="bg-[#182436] absolute -top-6 left-0 pl-5 pr-2 py-1 rounded-e-3xl text-slate-400 z-10"
              >
                Surname
              </label>
              <div className="w-full flex flex-row items-center relative">
                <input
                  name="surname"
                  type="text"
                  placeholder="Surname"
                  className="w-full py-4 px-4 rounded-3xl bg-[#1c2d44] text-white outline-none"
                />
                <button className=" bg-[#1c2d44] text-slate-400 text-sm font-semibold p-4 rounded-3xl flex flex-row items-center justify-center gap-1 absolute top-0 right-0 bottom-0">
                  <FaPencilAlt />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-start w-full relative">
              <label
                htmlFor="birthday"
                className="bg-[#182436] absolute -top-6 left-0 pl-5 pr-2 py-1 rounded-e-3xl text-slate-400 z-10"
              >
                Birthday
              </label>
              <div className="w-full flex flex-row items-center relative">
                <input
                  name="birthday"
                  type="date"
                  placeholder="birthday"
                  className="w-full py-4 px-4 rounded-3xl bg-[#1c2d44] text-white outline-none"
                />
                <button className=" bg-[#1c2d44] text-slate-400 text-sm font-semibold p-4 rounded-3xl flex flex-row items-center justify-center gap-1 absolute top-0 right-0 bottom-0">
                  <FaPencilAlt />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-start w-full relative">
              <label
                htmlFor="gender"
                className="bg-[#182436] absolute -top-6 left-0 pl-5 pr-2 py-1 rounded-e-3xl text-slate-400 z-10"
              >
                Gender
              </label>
              <div className="w-full flex flex-row items-center">
                <select
                  name="gender"
                  className="w-full py-4 px-4 rounded-3xl bg-[#1c2d44] text-white outline-none"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col items-start w-full relative">
              <label
                htmlFor="country"
                className="bg-[#182436] absolute -top-6 left-0 pl-5 pr-2 py-1 rounded-e-3xl text-slate-400 z-10"
              >
                Country
              </label>
              <div className="w-full flex flex-row items-center">
                <select
                  name="country"
                  className="w-full py-4 px-4 rounded-3xl bg-[#1c2d44] text-white outline-none"
                >
                  <option value="bangladesh">Bangladesh</option>
                  <option value="india">India</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="nepal">Nepal</option>
                  <option value="bhutan">Bhutan</option>
                  <option value="sri_lanka">Srilanka</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col items-start w-full relative">
              <label
                htmlFor="city"
                className="bg-[#182436] absolute -top-6 left-0 pl-5 pr-2 py-1 rounded-e-3xl text-slate-400 z-10"
              >
                City
              </label>
              <div className="w-full flex flex-row items-center relative">
                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  className="w-full py-4 px-4 rounded-3xl bg-[#1c2d44] text-white outline-none"
                />
                <button className=" bg-[#1c2d44] text-slate-400 text-sm font-semibold p-4 rounded-3xl flex flex-row items-center justify-center gap-1 absolute top-0 right-0 bottom-0">
                  <FaPencilAlt />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-6 mt-12">
            <button className="uppercase text-lg font-bold text-white px-20 py-3 rounded-full bg-blue-500">
              Update Data
            </button>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <input type="checkbox" name="" />
              <p className="text-white text-sm">
                I want to receive Newsletters and be updated on BETRUSS News,
                Events & Offers.
              </p>
            </div>
            <div className="px-4 py-2 bg-[#253853] rounded">
              <p className="text-white text-sm">
                If you have a necessity to change data in some fields which{" "}
                <br />
                are not editable - please{" "}
                <Link
                  to="/support"
                  className="underline text-blue-500 font-bold"
                >
                  contact support
                </Link>
              </p>
            </div>
          </div>
        </form>
        <div className="pl-4 md:pl-10 pr-4 md:pr-28 py-12 md:py-14 w-full flex items-center justify-center">
          <div className="w-[95%] border-t border-slate-600 pt-10 flex items-center justify-center">
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-20 py-3 text-xl font-bold text-white uppercase rounded-full"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
