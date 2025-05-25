import React, { useContext, useEffect, useState } from "react";
import bkashImage from "../../assets/betJilliImages/logos/bkash.png";
import nagadImage from "../../assets/betJilliImages/logos/nagad.png";
import rocketImage from "../../assets/betJilliImages/logos/rocket.png";
import upaiImage from "../../assets/betJilliImages/logos/upay.png";
import bankImage from "../../assets/betJilliImages/logos/bank-card.png";
import trcImage from "../../assets/betJilliImages/logos/trc20.svg";
import ercImage from "../../assets/betJilliImages/logos/erc20.svg";
import { RiLoader3Line } from "react-icons/ri";
import checkImage from "../../assets/betJilliImages/logos/check.svg";
import { LanguageContext } from "@/providers/LanguageContext";
import { useDispatch, useSelector } from "react-redux";
import { useLazyGetUserByIdQuery } from "@/redux/features/allApis/usersApi/usersApi";
import { setSingleUser } from "@/redux/slices/authSlice";
import { useGetWithdrawMethodsQuery } from "@/redux/features/allApis/paymentMethodApi/withdrawMethodApi";
import { useToasts } from "react-toast-notifications";
import { useAddWithdrawMutation } from "@/redux/features/allApis/withdrawsApi/withdrawsApi";
import { AuthContext } from "@/providers/AuthProvider";

const Withdraw = () => {
  const { setIsModalDWOpen } = useContext(AuthContext);
  const { language } = useContext(LanguageContext);
  const { user, singleUser } = useSelector((state) => state.auth);
  const [getSingleUser] = useLazyGetUserByIdQuery();
  const dispatch = useDispatch();
  const [isRotating, setIsRotating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userInputs, setUserInputs] = useState({});
  const { addToast } = useToasts();
  const { data: methods = [] } = useGetWithdrawMethodsQuery();
  const activeMethods = methods.filter((method) => method.status === "active");
  const [addWithdraw, { isLoading }] = useAddWithdrawMutation();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [amounts, setAmounts] = useState([]);
  const [customAmount, setCustomAmount] = useState(0);
  const filteredMethods = activeMethods?.filter(
    (method) => method.createdBy === user?.parentId
  );

  const withdrawAmounts = [100, 200, 300, 500, 1000, 2000, 3000, 5000];

  useEffect(() => {
    if (!user) return;
    getSingleUser(user?._id).then(({ data }) => {
      dispatch(setSingleUser(data));
    });
  }, [user]);

  useEffect(() => {
    if (activeMethods.length > 0 && !selectedMethod) {
      setSelectedMethod(activeMethods[0]);
    }
  }, [activeMethods]);

  const reloadBalance = () => {
    if (!user) return;
    setIsRotating(true);
    setLoading(true);
    getSingleUser(user?._id)
      .then(({ data }) => {
        dispatch(setSingleUser(data));
      })
      .finally(() => {
        setIsRotating(false);
        setLoading(false);
      });
  };

  const handleAmountClick = (amount) => {
    setAmounts((prev) =>
      prev.includes(amount)
        ? prev.filter((a) => a !== amount)
        : [...prev, amount]
    );
  };

  const totalAmount =
    amounts?.reduce((sum, a) => sum + Number(a), 0) + Number(customAmount || 0);

  const matchedMethod = activeMethods?.find(
    (m) => m.method === selectedMethod?.method
  );

  const handleSubmit = async () => {
    if (singleUser?.balance < totalAmount) {
      addToast(
        language === "bn" ? "আপনার ব্যালেন্স নেই" : "Insufficient balance",
        { appearance: "error", autoDismiss: true }
      );
      return;
    }
    if (!selectedMethod || totalAmount <= 0) {
      addToast(
        language === "bn"
          ? "সঠিক তথ্য দিন"
          : "Please select a valid method and amount.",
        { appearance: "warning" }
      );
      return;
    }

    const payload = {
      paymentMethod: selectedMethod?.method,
      amount: totalAmount,
      userId: user?._id,
      userInputs: userInputs,
      parentId: user?.parentId,
    };

    try {
      const res = await addWithdraw(payload).unwrap();
      addToast(
        language === "bn"
          ? "উইথড্র রিকোয়েস্ট পাঠানো হয়েছে!"
          : "Withdrawal request submitted!",
        { appearance: "success" }
      );
      setAmounts([]);
      setCustomAmount(0);
      setUserInputs({});
      reloadBalance();
      setIsModalDWOpen(false);
    } catch (err) {
      console.error("Withdraw error:", err);
      addToast(
        language === "bn" ? "উইথড্র ব্যর্থ হয়েছে!" : "Withdrawal failed!",
        { appearance: "error" }
      );
    }
  };

  return (
    <div className="p-4 overflow-y-auto scrollbar-hide h-[500px] lg:pb-8 pb-32">
      <div className="flex items-center gap-2 text-white ">
        <h3 className="text-xs font-semibold">
          {language === "bn" ? "উইথড্রয়াবল এমাউন্ট" : "Withdraw Amount"}
        </h3>
        <RiLoader3Line
          onClick={reloadBalance}
          className={`cursor-pointer transition-transform duration-500 ${
            isRotating ? "animate-spin" : ""
          }`}
          size={20}
        />
      </div>
      <div className="my-2 w-full flex justify-between items-center p-2 text-4xl text-white">
        <strong className="">৳</strong>
        {loading ? (
          <span className="animate-pulse text-gray-400">...</span>
        ) : (
          <span>{singleUser?.balance ?? 0}</span>
        )}
      </div>
      {/* payment method */}
      <div className="bg-bgBlue p-2 rounded-md text-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-4 border-l-4 border-bgYellowColor"></span>
          <label className="text-sm font-semibold">
            {language === "bn" ? "উইথড্র মেথড" : "Withdraw Method"}
          </label>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {filteredMethods?.map((method) => (
            <div
              key={method.method}
              onClick={() => setSelectedMethod(method)}
              className={`relative p-2 rounded-xl border ${
                selectedMethod === method
                  ? "bg-[#4A4202] border border-bgYellowColor font-bold"
                  : "border-gray-400"
              } cursor-pointer bg-textTableHeader text-center`}
            >
              <img
                src={`${import.meta.env.VITE_BASE_API_URL}${method.image}`}
                alt={method.method}
                className="h-6 mx-auto"
              />
              <p className="mt-1 text-sm">{method.method}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-dashed my-2"></div>

        {selectedMethod && (
          <p className="mt-2 p-1 w-[50%] text-center rounded-md bg-[#4A4202] border text-sm border-bgYellowColor capitalize">
            {`${selectedMethod.method} Payment`}
          </p>
        )}
      </div>

      {/*  Amounts */}
      <div className="bg-bgBlue mt-2 text-white p-2 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold">
            {language === "bn" ? "এমাউন্ট" : "Amount"}
          </h3>
          <span className="text-sm text-gray-400">
            {language === "bn" ? "৳ ৫০০ - ৳ ২৫,০০০" : "৳ 500 - ৳ 25,000"}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {withdrawAmounts?.map((amt) => (
            <div
              key={amt}
              onClick={() => handleAmountClick(parseInt(amt))}
              className={`p-2 rounded border ${
                amounts.includes(amt)
                  ? "bg-[#4A4202] border border-bgYellowColor font-bold"
                  : "border-gray-400"
              } cursor-pointer bg-textTableHeader text-center text-sm`}
            >
              ৳ {amt}
            </div>
          ))}
        </div>

        {amounts.length > 0 && (
          <div className="mt-2 w-full flex justify-between items-center p-2 border rounded-md border-gray-700 bg-textTableHeader text-sm">
            <strong className="text-xl">৳</strong>
            <span>{totalAmount}</span>
          </div>
        )}
      </div>

      {/* Dynamic Inputs */}
      <div className="bg-bgBlue mt-2 text-white p-2 rounded-md">
        {matchedMethod?.userInputs.map((input, inputIndex) => (
          <input
            key={inputIndex}
            type={input.type}
            name={input.name}
            placeholder={input?.label}
            required={input.isRequired === "required"}
            onChange={(e) =>
              setUserInputs((prev) => ({
                ...prev,
                [input.name]: e.target.value,
              }))
            }
            className="w-full px-4 py-2 border border-[#989898] bg-transparent rounded text-white placeholder-gray-400 placeholder:capitalize"
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full mt-4 py-2 bg-yellow-400 text-black font-semibold rounded text-lg disabled:opacity-50"
      >
        {isLoading
          ? language === "bn"
            ? "লোড হচ্ছে..."
            : "Submitting..."
          : language === "bn"
          ? "সাবমিট করুন"
          : "Submit"}
      </button>
    </div>
  );
};

export default Withdraw;
