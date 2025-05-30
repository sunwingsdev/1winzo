import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  LiaMoneyBillWaveAltSolid,
  LiaWalletSolid,
  LiaListAlt,
  LiaBell,
  LiaBanSolid,
} from "react-icons/lia";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { GoArrowSwitch } from "react-icons/go";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { RiLoginCircleLine } from "react-icons/ri";
import { useParams } from "react-router";
import {
  useLazyGetUserByIdQuery,
  useUpdateUserBalanceMutation,
  useUpdateUserStatusMutation,
} from "@/redux/features/allApis/usersApi/usersApi";
import { useDispatch, useSelector } from "react-redux";
import { setSingleUser } from "@/redux/slices/authSlice";
import Swal from "sweetalert2";
import { Input } from "@/components/betjili/ui/input";
import { useToasts } from "react-toast-notifications";
import { useFetchUser } from "@/hooks/customHook";

const UserDetailsPage = () => {
  const [updateUserBalance, { isLoading }] = useUpdateUserBalanceMutation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [getSingleUser] = useLazyGetUserByIdQuery();
  const [updateUserStatus] = useUpdateUserStatusMutation();
  const [loading, setLoading] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputBalance, setInputBalance] = useState("");
  const { addToast } = useToasts();
  const { fetchUser } = useFetchUser(id);

  const [formData, setFormData] = useState({
    firstName: "Demo",
    lastName: "User",
    email: "demouser1@gmail.com",
    mobile: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "Afghanistan",
  });

  const { token, singleUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    getSingleUser(id)
      .then(({ data }) => {
        if (data) {
          dispatch(setSingleUser(data));
        }
      })
      .finally(() => setLoading(false));
  }, [id, dispatch, getSingleUser]);

  useEffect(() => {
    if (singleUser) {
      setFormData({
        firstName: singleUser?.firstName || "N/A",
        lastName: singleUser?.lastName || "N/A",
        email: singleUser?.email || "Not Set Yet",
        mobile: singleUser?.phone || "",
        address: singleUser?.address || "Not Set Yet",
        city: singleUser?.city || "Not Set Yet",
        state: singleUser?.state || "Not Set Yet",
        zip: singleUser?.zip || "Not Set Yet",
        country: singleUser?.country || "Bangladesh",
      });
    }
  }, [singleUser]);

  if (loading) {
    return (
      <div className="text-center py-10 text-blue-500 font-semibold">
        Loading user data...
      </div>
    );
  }

  if (!singleUser) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold">
        No user data found.
      </div>
    );
  }

  const topCards = [
    {
      label: "Main Balance",
      value: `TK ${singleUser?.balance?.toFixed(2)} BDT`,
      mainColor: "bg-blue-900",
      subColor: "bg-blue-700",
      Icon: LiaMoneyBillWaveAltSolid,
    },
    {
      label: "Deposit Balance",
      value: "TK0.00 BDT",
      mainColor: "bg-green-600",
      subColor: "bg-green-700",
      Icon: LiaWalletSolid,
    },
    {
      label: "Withdrawals",
      value: "TK0.00 BDT",
      mainColor: "bg-orange-600",
      subColor: "bg-orange-700",
      Icon: HiOutlineBuildingLibrary,
    },
    {
      label: "Transactions",
      value: "0",
      mainColor: "bg-blue-900",
      subColor: "bg-blue-700",
      Icon: GoArrowSwitch,
    },
  ];

  const handleBanUser = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `You are about to ban ${singleUser?.firstName}.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, ban user!",
    });

    if (result.isConfirmed) {
      try {
        await updateUserStatus({
          id: id,
          status: "banned",
          email: singleUser?.email,
          token,
        });
        Swal.fire("Banned!", "The user has been banned.", "success");
      } catch (error) {
        Swal.fire("Error!", "Something went wrong.", "error");
      }
    }
  };

  const handleUpdateBalance = async (mode, amount) => {
    if (!amount || isNaN(amount) || amount <= 0) {
      addToast("Please enter a valid amount.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    const balanceInfo = {
      id: singleUser?._id,
      data: {
        action: mode,
        amount: Number(amount),
      },
    };
    try {
      const result = await updateUserBalance(balanceInfo);
      if (result.error) {
        addToast(result.error.data.error || "Something went wrong", {
          appearance: "error",
          autoDismiss: true,
        });
      } else if (result.data.modifiedCount > 0) {
        addToast("Balance updated successfully.", {
          appearance: "success",
          autoDismiss: true,
        });
        setInputBalance("");
        setIsModalOpen(false);
        fetchUser();
      }
    } catch (error) {
      addToast("Error updating balance.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-black font-semibold">User Details -</h1>
        <Button className="bg-transparent hover:bg-blue-700 border border-blue-700 text-blue-700 hover:text-white flex flex-row items-center gap-2">
          <RiLoginCircleLine className="text-lg" /> Login as User
        </Button>
      </div>
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {topCards?.map((item, i) => {
          const Icon = item?.Icon;
          return (
            <div
              key={i}
              className={`rounded-md text-white ${item?.mainColor} flex flex-row justify-between items-center`}
            >
              <div className="p-4">
                <p className="text-sm">{item?.label}</p>
                <p className="text-xl font-bold">{item?.value}</p>
              </div>
              <div
                className={`text-3xl text-white ${item?.subColor} w-16 h-full flex items-center justify-center`}
              >
                {Icon && <Icon />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Button
          onClick={() => {
            setModalMode("add");
            setIsModalOpen(true);
          }}
          className="bg-green-600 hover:bg-green-700 flex flex-row items-center gap-2"
        >
          <FiPlusCircle className="text-lg" /> Balance
        </Button>
        <Button
          onClick={() => {
            setModalMode("subtract");
            setIsModalOpen(true);
          }}
          className="bg-red-600 hover:bg-red-700 flex flex-row items-center gap-2"
        >
          <FiMinusCircle className="text-lg" />
          Balance
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 flex flex-row items-center gap-2">
          <LiaListAlt className="text-lg" /> Logins
        </Button>
        <Button className="bg-gray-600 hover:bg-gray-700 flex flex-row items-center gap-2">
          <LiaBell className="text-lg" /> Notifications
        </Button>
        <Button
          onClick={handleBanUser}
          className="bg-orange-500 hover:bg-orange-600 flex flex-row items-center gap-2"
        >
          <LiaBanSolid className="text-lg" /> Ban User
        </Button>
      </div>

      {/* User Info */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-lg font-bold text-gray-800">
          Information of {formData.firstName} {formData.lastName}
        </h2>

        {/* Basic Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="text-black font-semibold">
              First Name <span className="text-red-600">*</span>
            </label>
            <Input
              label="First Name"
              required
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-black font-semibold">
              Last Name <span className="text-red-600">*</span>
            </label>
            <Input
              label="Last Name"
              required
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="email" className="text-black font-semibold">
              Email <span className="text-red-600">*</span>
            </label>
            <Input
              label="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="mobileNumber" className="text-black font-semibold">
              Mobile Number <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center">
              {singleUser?.countryCode && (
                <div className="bg-gray-200 p-2 rounded-l-md">
                  {singleUser?.countryCode}
                </div>
              )}

              <Input
                label="Mobile Number"
                required
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="rounded-l-none"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="address" className="text-black font-semibold">
            Address <span className="text-red-600">*</span>
          </label>
          <Input
            label="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>

        {/* Location Fields */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="city" className="text-black font-semibold">
              City <span className="text-red-600">*</span>
            </label>
            <Input
              label="City"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="state" className="text-black font-semibold">
              State <span className="text-red-600">*</span>
            </label>
            <Input
              label="State"
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="zipPostal" className="text-black font-semibold">
              Zip/Postal <span className="text-red-600">*</span>
            </label>
            <Input
              label="Zip/Postal"
              value={formData.zip}
              onChange={(e) =>
                setFormData({ ...formData, zip: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="country" className="text-black font-semibold">
              Country <span className="text-red-600">*</span>
            </label>
            <select
              className="border rounded p-2 w-full"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            >
              <option>Bangladesh</option>
              <option>India</option>
              <option>USA</option>
              <option>Afghanistan</option>
            </select>
          </div>
        </div>

        {/* Verification Status */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div>
            <h1 className="text-black mb-2">Email Verification</h1>
            <Button className="bg-green-600 hover:bg-green-700 w-full">
              Verified
            </Button>
          </div>

          <div>
            <h1 className="text-black mb-2">Mobile Verification</h1>
            <Button className="bg-green-600 hover:bg-green-700 w-full">
              Verified
            </Button>
          </div>

          <div>
            <h1 className="text-black mb-2">2FA Verification</h1>
            <Button className="bg-red-600 hover:bg-red-700 w-full">
              Disabled
            </Button>
          </div>

          <div>
            <h1 className="text-black mb-2">KYC</h1>
            <Button className="bg-green-600 hover:bg-green-700 w-full">
              Verified
            </Button>
          </div>
        </div>

        {/* Submit Button */}
        <Button className="bg-blue-700 hover:bg-blue-800 w-full mt-6">
          Submit
        </Button>
      </div>
      {/* Add and subtract balance modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {modalMode === "add" ? "Add Balance" : "Subtract Balance"}
            </h2>
            <Input
              type="number"
              placeholder={`Enter amount to ${modalMode}`}
              value={inputBalance}
              onChange={(e) => setInputBalance(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <Button
                className="bg-gray-500 hover:bg-gray-600"
                onClick={() => {
                  setIsModalOpen(false);
                  setInputBalance("");
                }}
              >
                Cancel
              </Button>
              <Button
                className={`${
                  modalMode === "add"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-600 hover:bg-red-700"
                }`}
                onClick={() => handleUpdateBalance(modalMode, inputBalance)}
                disabled={
                  !inputBalance || isNaN(inputBalance) || inputBalance <= 0
                }
              >
                {modalMode === "add" ? "Add" : "Subtract"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetailsPage;
