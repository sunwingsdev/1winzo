import React, { useEffect, useState } from "react";
import { X, Pencil } from "lucide-react";
import {
  useLazyGetUserByIdQuery,
  useUpdateUserMutation,
} from "@/redux/features/allApis/usersApi/usersApi";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { logout, setSingleUser } from "@/redux/slices/authSlice";
import { useNavigate } from "react-router";
import { useFetchUser } from "@/hooks/customHook";

const Profile = () => {
  // Debug initial state

  const {
    user: loggedUser,
    token,
    singleUser,
  } = useSelector((state) => state.auth);

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  // User state that can be updated
  const [user, setUser] = useState({
    firstName: singleUser?.firstName || "",
    lastName: singleUser?.lastName || "",
    timeZone: singleUser?.timeZone || "",
    phone: singleUser?.phone || "",
  });

  const { fetchUser } = useFetchUser(loggedUser?._id);
  const [getSingleUser] = useLazyGetUserByIdQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  useEffect(() => {
    if (!loggedUser?._id) return;

    getSingleUser(loggedUser._id).then(({ data }) => {
      dispatch(setSingleUser(data));
      // Update local state with fresh data
      setUser({
        firstName: data?.firstName || "",
        lastName: data?.lastName || "",
        timeZone: data?.timeZone || "",
        phone: data?.phone || "",
      });
    });
  }, [loggedUser?._id, dispatch, getSingleUser]);

  // Modal state
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Modal configurations
  const modalConfigs = {
    firstName: {
      title: "Update First Name",
      fields: [
        {
          name: "firstName",
          label: "First Name",
          type: "text",
          placeholder: "Enter your first name",
          required: true,
          minLength: 2,
        },
      ],
      initialData: { firstName: user.firstName },
    },
    lastName: {
      title: "Update Last Name",
      fields: [
        {
          name: "lastName",
          label: "Last Name",
          type: "text",
          placeholder: "Enter your last name",
          required: true,
          minLength: 2,
        },
      ],
      initialData: { lastName: user.lastName },
    },
    timeZone: {
      title: "Update Time Zone",
      fields: [
        {
          name: "timeZone",
          label: "Time Zone",
          type: "text",
          placeholder: "Enter your time zone",
          required: true,
        },
      ],
      initialData: { timeZone: user.timeZone },
    },
    password: {
      title: "Change Password",
      fields: [
        {
          name: "oldPassword",
          label: "Old Password",
          type: "password",
          placeholder: "Enter old password",
          required: true,
        },
        {
          name: "newPassword",
          label: "New Password",
          type: "password",
          placeholder: "Enter new password",
          required: true,
          minLength: 6,
        },
        {
          name: "confirmPassword",
          label: "Confirm Password",
          type: "password",
          placeholder: "Confirm new password",
          required: true,
        },
      ],
      initialData: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    },
    phone: {
      title: "Update Phone Number",
      fields: [
        {
          name: "phone",
          label: "Phone Number",
          type: "tel",
          placeholder: "Enter phone number",
          required: true,
        },
      ],
      initialData: { phone: user.phone },
    },
  };

  const openModal = (modalKey) => {
    setActiveModal(modalKey);
    setFormData(modalConfigs[modalKey].initialData);
    setErrors({});
  };

  const closeModal = () => {
    setActiveModal(null);
    setFormData({});
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const config = modalConfigs[activeModal];

    config.fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      } else if (
        field.minLength &&
        formData[field.name]?.length < field.minLength
      ) {
        newErrors[
          field.name
        ] = `${field.label} must be at least ${field.minLength} characters`;
      }
    });

    if (
      activeModal === "password" &&
      formData.newPassword !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      let result;

      if (activeModal === "password") {
        result = await updateUser({
          id: loggedUser?._id,
          data: {
            oldPassword: formData.oldPassword,
            newPassword: formData.newPassword,
          },
          token,
        });
      } else {
        const updatedField = Object.keys(formData)[0];
        result = await updateUser({
          id: loggedUser?._id,
          data: { [updatedField]: formData[updatedField] },
          token,
        });
      }

      if (result.error) {
        const errorMsg =
          result.error.data?.message ||
          result.error.data?.error ||
          "Update failed!";
        addToast(errorMsg, { appearance: "error", autoDismiss: true });
      } else {
        addToast(`${modalConfigs[activeModal].title} successful!`, {
          appearance: "success",
          autoDismiss: true,
        });

        if (activeModal === "password") {
          dispatch(logout());
          localStorage.removeItem("token");
          navigate("/ag");
        } else {
          // This will trigger the useEffect in useFetchUser and update Redux state
          await fetchUser();
          // No need to manually setUser as the useEffect in Profile will handle it
        }
        closeModal();
      }
    } catch (error) {
      addToast("An unexpected error occurred", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const info = [
    {
      key: "firstName",
      label: "First Name",
      value: user.firstName || "Not set",
      isEditable: true,
      onEdit: () => openModal("firstName"),
    },
    {
      key: "lastName",
      label: "Last Name",
      value: user.lastName || "Not set",
      isEditable: true,
      onEdit: () => openModal("lastName"),
    },
    {
      key: "password",
      label: "Password",
      value: "********",
      isEditable: true,
      onEdit: () => openModal("password"),
    },
    {
      key: "timeZone",
      label: "Time Zone",
      value: user.timeZone || "Not set",
      isEditable: true,
      onEdit: () => openModal("timeZone"),
    },
  ];

  return (
    <div className="flex gap-6 text-xs">
      {/* About You Section */}
      <div className="w-1/2 shadow rounded">
        <h2 className="p-2 border-y border-borderTableColor bg-bgTableHeader text-textTableHeader">
          About You
        </h2>

        {info.map((item) => (
          <div
            key={item.key}
            className={`${
              item.key === "lastName" || item.key === "timeZone"
                ? "bg-white"
                : "bg-bgBlack bg-opacity-5"
            } flex justify-between items-center border-b border-borderTableColor ${
              item.isEditable ? "" : "gap-4"
            }`}
          >
            <div className="flex gap-2 text-black p-2 w-full">
              <p className="min-w-[100px]">{item.label}</p>
              <p>{item.value}</p>
            </div>
            {item.isEditable && (
              <div className="w-[70%]">
                <button
                  onClick={item.onEdit}
                  className="text-textBlueColor text-sm flex items-center justify-center gap-2 w-fit px-3 py-1 my-4 border bg-gradient-white-to-light hover-offwhite-gradient border-black font-medium border-opacity-20"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Edit"} <Pencil size={14} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Details Section */}
      <div className="w-1/2 rounded">
        <h2 className="p-2 border-y border-borderTableColor text-textTableHeader bg-bgTableHeader">
          Contact Details
        </h2>
        <div className="flex justify-between items-center bg-opacity-5 bg-bgBlack p-2 w-full border-b border-borderTableColor">
          <div className="flex gap-2 text-black">
            <p className="w-[50%]">Primary Number</p>
            <p>{user.phone || "Not set"}</p>
          </div>
          <button
            onClick={() => openModal("phone")}
            className="text-textBlueColor text-sm flex items-center justify-center gap-2 w-fit px-3 py-1 my-4 border bg-gradient-white-to-light hover-offwhite-gradient border-black font-medium border-opacity-20"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Edit"} <Pencil size={14} />
          </button>
        </div>
      </div>

      {/* Dynamic Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div className="flex justify-center items-start mr-8 mt-8">
            <div
              className="bg-bgModalColor w-full max-w-md p-3 rounded shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg text-[#3b5160] font-medium">
                  {modalConfigs[activeModal].title}
                </h3>
                <button
                  className="bg-bgBlack text-white rounded"
                  onClick={closeModal}
                  disabled={isLoading}
                >
                  <X size={18} />
                </button>
              </div>

              {Object.values(errors).length > 0 && (
                <div className="mb-4">
                  {Object.values(errors).map((error, index) => (
                    <p key={index} className="text-red-500 text-sm mb-1">
                      {error}
                    </p>
                  ))}
                </div>
              )}

              <div className="text-sm mb-4 px-6">
                {modalConfigs[activeModal].fields.map((field) => (
                  <div key={field.name} className="mb-4">
                    <label className="block text-[#212529] font-medium mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-2 border border-borderTableColor rounded text-sm"
                      disabled={isLoading}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <button
                  className="bg-bgYellowColor border-borderYellowColor hover:bg-bgHoverYellowColor text-black px-4 py-2 rounded text-xs font-medium"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading
                    ? "Processing..."
                    : activeModal === "password"
                    ? "Change"
                    : "Update"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
