import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaTimes } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router";
import GoogleSignIn from "./GoogleSignIn";
import { useToasts } from "react-toast-notifications";
import { useAddUserMutation } from "../../../redux/features/allApis/usersApi/usersApi";

const CustomDropdown = ({
  currencies,
  selectedCurrency,
  setSelectedCurrency,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Selected Option */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#1c2d44] text-white px-4 py-2 rounded-lg border border-[#283548] focus:outline-none flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <img src={selectedCurrency.flag} alt="" className="w-5 h-5" />
          <span>
            {selectedCurrency.symbol} - {selectedCurrency.label}
          </span>
        </div>
        <span>
          <FaAngleDown
            className={`${
              isOpen && "rotate-180"
            } transition-all duration-300 ease-in-out`}
          />
        </span>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute mt-2 w-full bg-[#1c2d44] text-white rounded-lg border border-[#283548] shadow-lg z-10">
          {currencies.map((currency) => (
            <li
              key={currency.label}
              onClick={() => handleSelect(currency)}
              className="px-4 py-2 hover:bg-[#283548] cursor-pointer flex items-center gap-2"
            >
              <img src={currency.flag} alt="" className="w-5 h-5" />
              <span>
                {currency.symbol} - {currency.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const RegistrationModal = ({ closeRegistrationModal, currencies, offers }) => {
  const [addUser, { isLoading }] = useAddUserMutation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [selectedOffer, setSelectedOffer] = useState(offers[0]);
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const { addToast } = useToasts();

  const handleApplyPromoCode = () => {
    // Handle promo code application logic here
    console.log("Promo Code Applied:", promoCode);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setPassword("");
    setSelectedCurrency(currencies[0]);
    setSelectedOffer(offers[0]);
    setShowPromoInput(false);
    setPromoCode("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save user data to MongoDB
      const userData = {
        firstName,
        lastName,
        username,
        email,
        phone,
        password,
        currency: selectedCurrency.label,
        offer: selectedOffer.label,
        promoCode,
      };

      const result = await addUser(userData);
      if (result.error) {
        addToast("Failed to register!", {
          appearance: "error",
          autoDismiss: true,
        });
      }
      if (result.data.insertedId) {
        addToast("Registration successful!", {
          appearance: "success",
          autoDismiss: true,
        });
        handleReset();
        closeRegistrationModal();
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="text-white bg-[#152234] w-[90%] lg:w-[900px] 2xl:w-[900px] h-auto lg:h-[520px] 2xl:h-[700px] rounded-lg shadow-lg flex overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={closeRegistrationModal}
          className="absolute top-2 md:top-4 right-2 md:right-4 text-[#59647a] text-lg hover:text-blue-600 duration-300"
        >
          <FaTimes />
        </button>

        {/* Modal Content */}
        <div className="w-1/2 lg:block hidden">
          <img
            className="w-full h-full object-cover"
            src="https://ifrd.4rabetsite25.com/img/registration-modal-HI.webp"
            alt="Register"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4 md:p-8 flex flex-col justify-center overflow-y-auto scrollbar-hide md:pt-72 2xl:pt-0 md:mt-10 2xl:mt-6">
          <div className="flex items-center gap-4 bg-[#212d43] rounded-xl mb-3 sm:mb-4">
            <div className="bg-[#ffb131] px-1 rounded-xl">
              <img
                className="w-12 sm:w-16"
                src="https://ifrd.4rabetsite25.com/img/gifs/gift.png"
                alt=""
              />
            </div>
            <p className="text-xs sm:text-base font-bold text-[#ffb131]">
              6000 BDT ON FIRST <br /> DEPOSIT
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full mb-2 sm:mb-4 px-5 py-2 bg-[#1c2d44] rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full mb-2 sm:mb-4 px-5 py-2 bg-[#1c2d44] rounded-lg focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-2 sm:mb-4 px-5 py-2 bg-[#1c2d44] rounded-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-2 sm:mb-4 px-5 py-2 bg-[#1c2d44] rounded-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mb-2 sm:mb-4  px-5 py-2 bg-[#1c2d44] rounded-lg focus:outline-none"
            />
            <div className="flex items-center gap-2">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-2 sm:mb-4 px-5 py-2 bg-[#1c2d44] rounded-lg focus:outline-none"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full mb-2 sm:mb-4 px-5 py-2 bg-[#1c2d44] rounded-lg focus:outline-none"
              />
            </div>
            {/* Currency section */}
            {/* <div className="relative mb-2 sm:mb-4">
              <select
                value={selectedCurrency.label}
                onChange={(e) => {
                  const selected = currencies.find(
                    (currency) => currency.label === e.target.value
                  );
                  setSelectedCurrency(selected);
                }}
                className="w-full bg-[#1c2d44] text-white px-4 py-2 rounded-lg border border-[#283548] focus:outline-none"
              >
                {currencies.map((currency) => (
                  <option
                    key={currency.label}
                    value={currency.label}
                    className="flex items-center"
                  >
                    <img src={currency?.flag} alt="" />
                    <p>
                      {currency.symbol} - {currency.label}
                    </p>
                  </option>
                ))}
              </select>
            </div> */}

            <CustomDropdown
              currencies={currencies}
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
            />

            {/* Promo Code Section */}
            <div className="mt-2 sm:mt-4 mb-2 sm:mb-4">
              {!showPromoInput ? (
                <button
                  onClick={() => setShowPromoInput(true)}
                  className="text-sm font-bold text-blue-400 hover:text-blue-600 duration-300 flex flex-row items-center gap-2"
                >
                  <FiPlusCircle />{" "}
                  <span className="text-white">I have a promo code</span>
                </button>
              ) : (
                <div className="relative flex items-center w-full mt-2">
                  {/* Promo Code Input */}
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Add promo code here"
                    className="w-full px-4 py-2 bg-[#1c2d44] rounded-lg text-gray-400 focus:outline-none"
                  />

                  {/* Apply Button */}
                  <button
                    onClick={handleApplyPromoCode}
                    className="absolute right-0 px-5 py-2 bg-[#283548] text-white font-bold rounded-lg duration-300"
                  >
                    APPLY
                  </button>
                </div>
              )}
            </div>

            {/* Offer Section */}
            <div className="relative mb-2 sm:mb-4">
              <select
                value={selectedOffer.label}
                onChange={(e) => {
                  const selected = offers.find(
                    (offer) => offer.label === e.target.value
                  );
                  setSelectedOffer(selected);
                }}
                className="w-full bg-[#1c2d44] text-white px-4 py-2 rounded-lg border border-[#283548] focus:outline-none"
              >
                {offers.map((offer) => (
                  <option
                    key={offer.label}
                    value={offer.label}
                    className="flex items-center"
                  >
                    {offer.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={!phone || !password ||!username || isLoading}
              className="w-full text-sm font-bold bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 duration-300 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              SIGN UP
            </button>
          </form>
          {/* or */}
          <div className="flex justify-center items-center gap-2 mt-3">
            <p className="w-full h-1 border-b border-[#2d3949]"></p>
            <p className="text-sm font-bold text-white">OR</p>
            <p className="w-full h-1 border-b border-[#2d3949]"></p>
          </div>

          {/* Google Login */}
          <GoogleSignIn closeRegistrationModal={closeRegistrationModal} />

          <div className="text-center mt-6 mb-2 flex flex-row items-center gap-2">
            <input type="checkbox" checked />
            <p className="text-[13px] font-semibold text-[#5c7391]">
              I confirm all the{" "}
              <Link className="text-white text-xs underline">
                Terms of user agreement
              </Link>{" "}
              and that I am over 18
            </p>
          </div>

          <p className=" text-center text-sm font-semibold text-[#5c7391]">
            Already registered?{" "}
            <Link className="text-white text-base underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
