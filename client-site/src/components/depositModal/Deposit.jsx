import { IoIosArrowDown } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useEffect, useState, useContext } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useToasts } from "react-toast-notifications";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";
import { LanguageContext } from "@/providers/LanguageContext";
import { useGetPaymentMethodsQuery } from "@/redux/features/allApis/paymentMethodApi/paymentMethodApi";
import { useGetAllPaymentNumbersQuery } from "@/redux/features/allApis/paymentNumberApi/paymentNumberApi";
import { useGetPromotionsQuery } from "@/redux/features/allApis/promotionApi/promotionApi";
import { useAddDepositMutation } from "@/redux/features/allApis/depositsApi/depositsApi";
import { AuthContext } from "@/providers/AuthProvider";
import { useGetUsersQuery } from "@/redux/features/allApis/usersApi/usersApi";

const Deposit = () => {
  const { language } = useContext(LanguageContext);
  const { data: users } = useGetUsersQuery();
  const { setIsModalDWOpen } = useContext(AuthContext);
  const depositAmounts = [100, 200, 300, 500, 1000, 2000, 3000, 5000];
  const [reminderOn, setReminderOn] = useState(false);
  const { addToast } = useToasts();
  const user = useSelector((state) => state.auth.user);
  const { data: methods = [] } = useGetPaymentMethodsQuery();
  const { data: numbers = [] } = useGetAllPaymentNumbersQuery();
  const { data: promotions = [] } = useGetPromotionsQuery();
  const [addDeposit, { isLoading }] = useAddDepositMutation();
  const [selectedGateway, setSelectedGateway] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [amounts, setAmounts] = useState([]);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedPromotionId, setSelectedPromotionId] = useState("");
  const [userInputs, setUserInputs] = useState({});
  const [currentNumber, setCurrentNumber] = useState(null);
  const [numberIndex, setNumberIndex] = useState(0);
  const [channelIndexes, setChannelIndexes] = useState({});

  const activeMethods = methods.filter((method) => method.status === "active");

  const masterAgents = users?.filter((u) => u.role === "master-agent") || [];
  const sortedMasterAgents = [...masterAgents].sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );
  const firstMag = sortedMasterAgents[0];

  const filteredMethods = activeMethods?.filter(
    (method) =>
      (user?.createdBy === "self" &&
        method?.createdBy?._id === firstMag?._id) ||
      method.createdBy?._id === user?.parentId ||
      method?.createdBy?.referralCode === user?.referCode
  );

  const matchedMethod = filteredMethods?.find(
    (m) => m.method === selectedGateway
  );
  const filteredChannels = matchedMethod?.gateway || [];

  const selectedPromotion = promotions?.find(
    (p) => p._id === selectedPromotionId
  );
  const totalAmount =
    amounts?.reduce((sum, a) => sum + Number(a), 0) + Number(customAmount || 0);

  useEffect(() => {
    // যখন মেথড বা চ্যানেল পরিবর্তন হয় তখনই index রিসেট করো
    setNumberIndex(0);
  }, [selectedGateway, selectedChannel]);

  useEffect(() => {
    setSelectedChannel("");
    setSelectedNumber("");
    setUserInputs({});
    setAmounts([]);
    setCustomAmount("");
  }, [selectedGateway]);

  const handleUserInputChange = (label, value) => {
    setUserInputs((prev) => ({ ...prev, [label]: value }));
  };

  const handleAmountClick = (amt) => {
    setAmounts((prev) => [...prev, amt]);
  };

  const handleChannelClick = (selectedChannel) => {
    setSelectedChannel(selectedChannel);
    const filteredNumbers = numbers?.filter(
      (n) =>
        n.paymentNumberMethod === selectedGateway &&
        n.channel === selectedChannel &&
        n.userId === user?.parentId &&
        n.status === "approve"
    );

    if (!filteredNumbers || filteredNumbers.length === 0) {
      setCurrentNumber("নাম্বার নেই");
      return;
    }

    const key = `${selectedGateway}-${selectedChannel}`;
    const currentIndex = channelIndexes[key] || 0;

    const nextNumber =
      filteredNumbers[currentIndex]?.paymentNumber || "নাম্বার নেই";

    const newIndex = (currentIndex + 1) % filteredNumbers.length;

    setChannelIndexes((prev) => ({
      ...prev,
      [key]: newIndex,
    }));

    setCurrentNumber(nextNumber);
  };

  const handleSubmit = async () => {
    if (
      !selectedGateway ||
      !selectedChannel ||
      !currentNumber ||
      totalAmount <= 0
    ) {
      addToast("Please complete all required fields.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    let finalAmount = totalAmount;
    if (selectedPromotion) {
      if (selectedPromotion?.bonusType === "amount") {
        finalAmount = totalAmount + selectedPromotion?.bonusValue;
      } else if (selectedPromotion?.bonusType === "percentage") {
        finalAmount =
          totalAmount + totalAmount * (selectedPromotion?.bonusValue / 100);
      }
    }

    const payload = {
      paymentMethod: selectedGateway,
      depositChannel: selectedChannel,
      number: currentNumber,
      amount: finalAmount,
      promotion: selectedPromotion,
      userId: user?._id,
      userInputs: userInputs,
      parentId: user?.createdBy === "self" ? firstMag?._id : user?.parentId,
    };

    try {
      await addDeposit(payload).unwrap();
      addToast("Deposit request submitted!", {
        appearance: "success",
        autoDismiss: true,
      });

      setSelectedGateway(null);
      setSelectedChannel("");
      setSelectedNumber("");
      setSelectedPromotionId("");
      setAmounts([]);
      setCustomAmount("");
      setUserInputs({});
      setIsModalDWOpen(false);
    } catch (err) {
      addToast("Failed to submit deposit.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="text-white p-4 space-y-4 overflow-y-auto scrollbar-hide h-[500px] pb-32 lg:pb-8">
      {!filteredMethods?.length ? (
        <div className="flex items-center gap-2 ">
          <span className="h-4 border-l-4 border-bgYellowColor"></span>
          <label className="text-sm font-semibold">
            {language === "bn"
              ? "এই মুহূর্তে কোন পেমেন্ট মেথড  নেই"
              : "No payment methods available at the moment."}
          </label>
        </div>
      ) : (
        <>
          {" "}
          {/* Promotion Select */}
          <div className="flex items-center gap-6 whitespace-nowrap bg-bgBlue p-2 rounded-md">
            <div className="flex items-center gap-2">
              <span className="h-4 border-l-4 border-bgYellowColor"></span>
              <label className="text-sm font-semibold">
                {language === "bn"
                  ? "প্রোমোশন নির্বাচন করুন"
                  : "Select Promotion"}
              </label>
            </div>
            <div className="relative w-full max-w-xs">
              <select
                className="w-full bg-transparent text-right text-xs outline-none text-white p-2 rounded appearance-none pr-8"
                value={selectedPromotionId}
                onChange={(e) => setSelectedPromotionId(e.target.value)}
              >
                <option value="noBonus" className="bg-[#4d4d4d] text-left">
                  No Bonus
                </option>
                {promotions?.map((promo) => (
                  <option
                    key={promo?._id}
                    value={promo?._id}
                    className="bg-[#4d4d4d] text-left"
                  >
                    {promo?.title}
                  </option>
                ))}
              </select>
              <IoMdArrowDropdown className="absolute right-2 top-2 pointer-events-none text-base" />
            </div>
          </div>
          {/* Payment Methods */}
          <div className="bg-bgBlue p-2 rounded-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-4 border-l-4 border-bgYellowColor"></span>
              <label className="text-sm font-semibold">
                {language === "bn" ? "পেমেন্ট মেথড" : "Payment Method"}
              </label>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {filteredMethods?.map((method) => (
                <div
                  key={method?._id}
                  onClick={() => setSelectedGateway(method.method)}
                  className={`relative p-2 rounded-xl border ${
                    selectedGateway === method.method
                      ? "bg-[#4A4202] border border-bgYellowColor font-bold"
                      : "border-gray-400"
                  } cursor-pointer bg-textTableHeader text-center`}
                >
                  {/* Red 0% badge */}
                  <div className="absolute top-0 right-0 bg-red-600 text-white text-base px-1.5 py-0.5 rounded-full shadow">
                    {selectedPromotion?.bonusType === "percentage"
                      ? `${selectedPromotion.bonusValue}%`
                      : selectedPromotion?.bonusType === "amount"
                      ? `${selectedPromotion.bonusValue}`
                      : "0"}
                  </div>

                  <img
                    src={`${import.meta.env.VITE_BASE_API_URL}${method.image}`}
                    alt={method.method}
                    className="h-6 mx-auto"
                  />
                  <p className="mt-1 text-sm capitalize">{method?.method}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-dashed my-2"></div>

            {selectedGateway && (
              <p className="mt-2 p-1 w-[50%] text-center rounded-md bg-[#4A4202] border text-sm border-bgYellowColor capitalize">
                {`${selectedGateway} Payment`}
              </p>
            )}
          </div>
          <div className="p-2 bg-bgBlue rounded-md">
            <h3 className="mb-2 font-semibold">
              {language === "bn" ? "ডিপোজিট চ্যানেল" : "Deposit Channel"}
            </h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {filteredChannels?.map((channel) => (
                <button
                  key={channel}
                  onClick={() => handleChannelClick(channel)}
                  className={`p-2 rounded border ${
                    selectedChannel === channel
                      ? "bg-[#4A4202] border border-bgYellowColor font-bold"
                      : "border-gray-400"
                  } cursor-pointer bg-textTableHeader text-center text-sm text-white`}
                >
                  {channel.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div className="text-lg bg-bgBlue p-2">
            <strong>{language === "bn" ? "নাম্বার" : "Number"}:</strong>{" "}
            {currentNumber}
          </div>
          {/* Deposit Amounts */}
          <div className="bg-bgBlue p-2 rounded-md">
            <h3 className="mb-2 font-semibold">
              {language === "bn" ? "ডিপোজিট এমাউন্ট" : "Deposit Amount"}
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {depositAmounts?.map((amt) => (
                <div
                  key={amt}
                  onClick={() => handleAmountClick(parseInt(amt))}
                  className={`p-2 rounded border ${
                    amounts === amt
                      ? "bg-[#4A4202] border border-bgYellowColor font-bold"
                      : "border-gray-400"
                  } cursor-pointer bg-textTableHeader text-center text-sm`}
                >
                  ৳ {amt}
                </div>
              ))}
            </div>
            {amounts && (
              <div className="mt-2 w-full flex justify-between items-center p-2 border rounded-md border-gray-700 bg-textTableHeader text-sm">
                <strong className="text-xl">৳</strong>
                <span>{totalAmount}</span>
              </div>
            )}
          </div>
          {/* Dynamic Inputs */}
          {matchedMethod?.userInputs?.length > 0 && (
            <div className="space-y-2">
              <p className="font-medium">Additional Info</p>
              {matchedMethod?.userInputs.map((input, inputIndex) => (
                <input
                  key={inputIndex}
                  type={input.type}
                  name={`${input.name}`}
                  placeholder={input?.label}
                  required={input.isRequired === "required"}
                  onChange={(e) =>
                    handleUserInputChange(input?.name, e.target.value)
                  }
                  className="w-full px-4 py-2 border border-[#989898] bg-transparent rounded text-white placeholder-gray-400"
                />
              ))}
            </div>
          )}
          {/* Gentle Reminder Toggle */}
          <div className="bg-bgBlue">
            <div
              className="flex items-center justify-between mt-4 cursor-pointer p-2"
              onClick={() => setReminderOn(!reminderOn)}
            >
              <div className="flex items-center gap-2">
                <IoMdInformationCircleOutline />
                <label className="text-sm">
                  {language === "bn" ? "জেন্টল রিমাইন্ডার" : "Gentle Reminder"}
                </label>
              </div>
              <div
                className={`transition-transform text-white duration-300 text-lg ${
                  reminderOn ? "rotate-180" : "rotate-0"
                }`}
              >
                <IoIosArrowDown />
              </div>
            </div>

            {reminderOn && (
              <div>
                <div className="border-t border-dashed mx-2 my-2"></div>
                <div className="p-3 text-sm text-gray-300 rounded-md shadow transition-all duration-300 space-y-2">
                  {language === "bn" ? (
                    <>
                      <p>
                        ১/ &quot;ব্যক্তিগত তথ্য&quot; এর অধীনে সর্বোচ্চ ৩টি
                        মোবাইল নম্বর যোগ করুন এবং ভেরিফাই করুন।
                      </p>
                      <p>
                        ২/ সঠিক ক্যাশ আউট নাম্বার, এমাউন্ট এবং ট্রানজেকশন আইডি
                        সহ সাবমিট দিন।
                      </p>
                      <p>
                        ৩/ ডিপোজিট করার আগে সবসময় ডিপোজিট পেইজে নাম্বার চেক
                        করুন।
                      </p>
                      <p>
                        ৪/ পেন্ডিং অবস্থায় আপনি ২টি ডিপোজিট ট্রাই করতে পারবেন।
                        সমস্যা হলে লাইভচ্যাট নিন।
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        1/ Under &quot;Personal Info&quot;, add and verify up to
                        3 mobile numbers before cashing out.
                      </p>
                      <p>
                        2/ For faster processing, submit with correct cashout
                        number, amount and transaction ID.
                      </p>
                      <p>
                        3/ Always check the number on our deposit page before
                        making a deposit.
                      </p>
                      <p>
                        4/ During pending status, you can try 2 deposits.
                        Contact live chat for help.
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full mt-4 py-2 bg-yellow-400 text-black font-semibold rounded text-lg flex items-center justify-center"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Submit Deposit"
            )}
          </button>
        </>
      )}
    </div>
  );
};

export default Deposit;
