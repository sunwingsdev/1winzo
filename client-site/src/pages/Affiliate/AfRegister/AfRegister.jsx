import { useAddUserMutation } from "@/redux/features/allApis/usersApi/usersApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useToasts } from "react-toast-notifications";
import { HiRefresh } from "react-icons/hi";
import AfBgImg from "../../../assets/affiliateImages/2084249.jpg";

const AfRegister = () => {
  const [addUser, { isLoading }] = useAddUserMutation();
  const { addToast } = useToasts();

  const [searchParams] = useSearchParams();
  const [generatedCode, setGeneratedCode] = useState("");
  const [isRotating, setIsRotating] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    referCode: "",
    verificationCode: "",
    userType: "b2b",
    role: "user",
  });

  useEffect(() => {
    generateVerificationCode();
  }, []);

  const generateVerificationCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedCode(code);
    setForm((prev) => ({ ...prev, verificationCode: code }));
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500);
  };

  useEffect(() => {
    const referral_code = searchParams.get("referral_code") || "";
    if (referral_code) {
      setForm((prev) => ({ ...prev, referCode: referral_code }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validation
    if (form.password !== form.confirmPassword) {
      addToast("Passwords do not match!", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    if (form.verificationCode !== generatedCode) {
      addToast("Incorrect verification code!", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    // 2. Create userData payload
    const userData = {
      firstname: form.firstname,
      lastname: form.lastname,
      username: form.username,
      email: form.email,
      password: form.password,
      mobile: form.mobile,
      referCode: form.referCode || null,
      userType: form.userType,
      role: form.role,
    };

    try {
      const result = await addUser(userData);

      if (result.error) {
        addToast("Failed to register!", {
          appearance: "error",
          autoDismiss: true,
        });
        return;
      }

      if (result.data?.insertedId) {
        addToast("Registration successful!", {
          appearance: "success",
          autoDismiss: true,
        });

        // Optionally reset the form or navigate away
        setForm({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          mobile: "",
          referCode: "",
          verificationCode: "",
          userType: "b2b",
          role: "user",
        });
        generateVerificationCode(); // Refresh code
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
      addToast("Unexpected error occurred.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${AfBgImg})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

        <div className="flex items-center gap-4">
          <div>
            <label className="block mb-2 font-medium" htmlFor="firstname">
              First Name
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              value={form.firstname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="lastname">
              Last Name
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              value={form.lastname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </div>

        <label className="block mb-2 font-medium" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <label className="block mb-2 font-medium" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <div className="flex items-center gap-4">
          <div>
            <label className="block mb-2 font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </div>

        <label className="block mb-2 font-medium" htmlFor="mobile">
          Mobile Number
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          value={form.mobile}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          pattern="[0-9]{10,15}"
          title="Please enter a valid mobile number"
        />

        <label className="block mb-2 font-medium" htmlFor="referCode">
          Refer Code
        </label>
        <input
          id="referCode"
          name="referCode"
          type="text"
          value={form.referCode}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Optional"
        />

        <label className="block mb-2 font-medium" htmlFor="verificationCode">
          Verification Code
        </label>
        <div className="flex items-center gap-2 mb-6">
          <input
            id="verificationCode"
            name="verificationCode"
            type="text"
            value={form.verificationCode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <div className="bg-white px-3 py-2 border rounded font-bold text-lg text-black">
            {generatedCode}
          </div>
          <button
            type="button"
            onClick={generateVerificationCode}
            className="text-blue-600 hover:underline text-sm"
          >
            <HiRefresh
              className={`text-3xl transition-transform duration-500 ${
                isRotating ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {isLoading ? "Loading..." : "Register"}
        </button>

        <p className="text-xs text-center text-gray-500 mt-4">
          By proceeding you agree to our{" "}
          <a href="/terms" className="text-blue-600 hover:underline">
            Terms and Conditions
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default AfRegister;
