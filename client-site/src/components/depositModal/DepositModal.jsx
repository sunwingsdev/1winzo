import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BsArrowLeftSquare } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { MdGTranslate } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { useAddDepositMutation } from "../../redux/features/allApis/depositsApi/depositsApi";
import { useToasts } from "react-toast-notifications";
import { uploadImage } from "../../hooks/files";
import { useSelector } from "react-redux";

const mobilePaymentMethods = [
  {
    image: "https://pay.hostbuybd.com/assets/template/images/bkash.png",
    gateway: "MOBILE_BANKING",
    paymentMethod: "bKash",
    bgColor: "#e2136e",
    instructions: [
      "Go to your bKash Mobile Menu by dialing: *247# or Open bKash App.",
      "Enter the Receiver Account Number: 013000000",
      "Choose: Send Money",
      "Now enter your bKash Mobile Menu PIN to confirm.",
      "Done! You will receive a confirmation message from bKash",
      "Put theTransaction ID in the upper box and pressVERIFY",
    ],
    amounts: [200, 500, 1000, 5000, 10000, 15000, 20000, 25000],
    inputs: [
      {
        property: "senderAccountNumber",
        type: "text",
        label: "Enter Sender Account Number",
      },
      {
        property: "transactionId",
        type: "text",
        label: "Enter transaction id",
      },
    ],
  },
  {
    image: "https://pay.hostbuybd.com/assets/template/images/nagad.png",
    gateway: "MOBILE_BANKING",
    paymentMethod: "Nagad",
    bgColor: "#ec1d25",
    instructions: [
      "Go to your NAGAD Mobile Menu by dialing: *167# or Open NAGAD App.",
      "Enter the Receiver Account Number: 013000000",
      "Choose: Send Money",
      "Now enter your NAGAD Mobile Menu PIN to confirm.",
      "Done! You will receive a confirmation message from NAGAD",
      "Put theTransaction ID in the upper box and pressVERIFY",
    ],
    amounts: [200, 500, 1000, 5000, 10000, 12000, 20000, 35000],
    inputs: [
      {
        property: "senderAccountNumber",
        type: "text",
        label: "Enter Sender Account Number",
        required: true,
      },
      {
        property: "transactionId",
        type: "text",
        label: "Enter transaction id",
        required: true,
      },
    ],
  },
];

const bankPaymentMethods = [
  {
    image: "https://pay.hostbuybd.com/uploads/bank_logo/ibbl.png",
    gateway: "BANK_TRANSFER",
    paymentMethod: "IBBL",
    bgColor: "#02733c",
    instructions: [
      "Go to your bKash Mobile Menu by dialing: *247# or Open bKash App.",
      "Enter the Receiver Account Number: 013000000",
      "Choose: Send Money",
      "Now enter your NAGAD Mobile Menu PIN to confirm.",
      "Done! You will receive a confirmation message from NAGAD",
      "Put theTransaction ID in the upper box and pressVERIFY",
    ],
    amounts: [200, 500, 1000, 5000, 10000, 12000, 20000, 35000],
    inputs: [
      {
        property: "senderAccountNumber",
        type: "text",
        label: "Enter Sender Account Number",
        required: true,
      },
      {
        property: "accountHolderName",
        type: "text",
        label: "Enter Account Holder Name",
        required: true,
      },
      {
        property: "screenshot",
        type: "file",
        label: "Attach a screenshot",
        required: true,
      },
    ],
  },
];

const DepositModal = ({ closeDepositModal }) => {
  const { user } = useSelector((state) => state.auth);
  const [addDeposit] = useAddDepositMutation();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [activeTabBottom, setActiveTabBottom] = useState("MOBILE_BANKING");
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [depositAmount, setDepositAmount] = useState("");
  const [files, setFiles] = useState({});
  const { addToast } = useToasts();

  // Step navigation handlers
  const goNextStep = () => setStep((prevStep) => prevStep + 1);
  const goPreviousStep = () => setStep((prevStep) => prevStep - 1);

  const selectPaymentMethod = (method) => {
    setPaymentMethod(method);
    goNextStep();
  };

  const handleFileChange = (e, property) => {
    if (e.target.files) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [property]: e.target.files[0],
      }));
    }
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const images = [files];
    let paymentInputs = [];

    try {
      if (files) {
        const uploadPromises = images.flatMap((item) =>
          Object.keys(item).map((key) =>
            uploadImage(item[key]).then((result) => ({
              [key]: result.filePath,
            }))
          )
        );
        const uploadedImages = await Promise.all(uploadPromises);
        paymentInputs = [...paymentInputs, ...uploadedImages];
      }
      formData.forEach((value, key) => {
        if (!(value instanceof File)) {
          const paymentInput = {
            [key]: value,
          };
          paymentInputs.push(paymentInput);
        }
      });
      const depositInfo = {
        amount: depositAmount,
        userId: user?._id,
        method: paymentMethod?.paymentMethod,
        gateway: paymentMethod?.gateway,
        paymentInputs: paymentInputs,
      };
      if (depositAmount) {
        setLoading(true);
        const { data } = await addDeposit(depositInfo);
        if (data.insertedId) {
          addToast("Deposited successfully. Wait for the response.", {
            appearance: "success",
            autoDismiss: true,
          });
          closeDepositModal();
          setLoading(false);
        }
      } else {
        addToast("Add amount to deposit", {
          appearance: "error",
          autoDismiss: true,
        });
        setStep(2);
      }
    } catch (error) {
      console.error("Error during deposit submission:", error);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-full max-w-md bg-[#152234] rounded-lg shadow-md flex flex-col overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={closeDepositModal}
          className="absolute top-2 md:top-4 right-2 md:right-4 text-[#59647a] text-lg hover:text-blue-600 duration-300"
        >
          <FaTimes />
        </button>

        {/* Step 1: Select Payment Method */}
        {step === 1 && (
          <div className="p-6">
            <div className="flex justify-center items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex justify-center items-center text-white text-lg font-bold">
                BR
              </div>
              <h2 className="text-2xl font-semibold text-white">
                <span className="text-yellow-300">Bet</span>Russ
              </h2>
              <p className="text-2xl font-bold text-white">Deposit</p>
            </div>
            <div className="flex mt-2 justify-between items-center gap-4 py-2 px-4 text-gray-700 bg-gray-50 border-2 border-blue-500">
              <IoHomeOutline onClick={() => setStep(1)} size={30} />
              <div className="flex gap-3">
                <MdGTranslate size={30} />
                <IoMdClose onClick={closeDepositModal} size={30} />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex">
                <button
                  onClick={() => setActiveTabBottom("MOBILE_BANKING")}
                  className={`flex-1 py-2 font-semibold text-center rounded-l-md ${
                    activeTabBottom === "MOBILE_BANKING"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-400 text-gray-200"
                  }`}
                >
                  MOBILE BANKING
                </button>
                <button
                  onClick={() => setActiveTabBottom("BANK_TRANSFER")}
                  className={`flex-1 py-2 font-semibold text-center rounded-r-md ${
                    activeTabBottom === "BANK_TRANSFER"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-400 text-gray-200"
                  }`}
                >
                  BANK TRANSFER
                </button>
              </div>
              <div className="mt-4">
                {activeTabBottom === "MOBILE_BANKING" ? (
                  <div className="grid grid-cols-3 gap-2">
                    {mobilePaymentMethods?.map((item) => (
                      <button
                        key={item}
                        onClick={() => selectPaymentMethod(item)}
                      >
                        <div className="p-2 bg-gray-200 rounded-md text-center group">
                          <img
                            className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                            src={item.image}
                            alt={item.paymentMethod}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {bankPaymentMethods?.map((item) => (
                      <button
                        key={item}
                        onClick={() => selectPaymentMethod(item)}
                      >
                        <div className="p-2 bg-gray-200 rounded-md text-center group">
                          <img
                            className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                            src={item.image}
                            alt={item.paymentMethod}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Enter Deposit Amount */}
        {step === 2 && (
          <div className="space-y-2">
            <h2 className="p-2 w-full text-center text-lg font-semibold text-white border-b-2 border-gray-500">
              Deposit
            </h2>
            <div className="pb-4 px-4 space-y-4">
              <div className="flex items-center gap-3">
                <BsArrowLeftSquare
                  onClick={goPreviousStep}
                  size={26}
                  className="text-gray-500"
                />
                <p className="text-white text-base font-semibold">
                  Choose other payment
                </p>
              </div>
              <div className="my-4">
                <form action="">
                  <div className="grid grid-cols-3 gap-2">
                    {paymentMethod.amounts?.map((amount) => (
                      <p
                        onClick={() => setDepositAmount(amount)}
                        key={amount}
                        className="py-2 px-4 text-center text-lg font-bold text-white bg-[#152234] hover:bg-[#0e1723] duration-300 rounded-md border border-dashed border-gray-400 hover:border-blue-500"
                      >
                        {amount} BDT
                      </p>
                    ))}
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor=""
                      className="text-gray-500 text-base font-semibold"
                    >
                      Enter Amount
                    </label>
                    <p className="w-full my-2 px-5 py-2 font-bold bg-[#152234] border border-gray-500 rounded-lg focus:outline-none placeholder-white text-white">
                      {depositAmount ? depositAmount : 0} BDT
                    </p>
                  </div>
                  <p className="text-base font-medium text-gray-500">
                    Max. deposit :{" "}
                    <span className="text-cyan-400">
                      {paymentMethod.amounts[paymentMethod.amounts.length - 1]}{" "}
                      BDT
                    </span>
                  </p>
                  <div className="w-full m-auto pt-3">
                    <button
                      onClick={goNextStep}
                      className="py-1 px-4 w-full text-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 border border-white rounded-lg duration-300"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Enter Payment Details */}
        {step === 3 && (
          <div className="space-y-2 p-4">
            <div className="flex items-center gap-3">
              <BsArrowLeftSquare
                onClick={goPreviousStep}
                size={26}
                className="text-gray-500"
              />
            </div>

            <div className="flex justify-between items-center gap-4 py-2 px-4 text-gray-700 bg-gray-50 border-2 border-blue-500">
              <IoHomeOutline onClick={() => setStep(1)} size={30} />
              <div className="flex gap-3">
                <MdGTranslate size={30} />
                <IoMdClose onClick={closeDepositModal} size={30} />
              </div>
            </div>
            <div
              style={{ backgroundColor: `${paymentMethod?.bgColor}` }}
              className={`p-3 bg-red-600  border-2 border-white`}
            >
              <div className="flex justify-around gap-2">
                <div className="bg-white rounded-xl">
                  <img
                    className="w-32 m-auto"
                    src={paymentMethod.image}
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-base text-center font-semibold text-white">
                    টাকার পরিমান{" "}
                  </p>
                  <div className="bg-white w-full mt-1 py-1 px-20 text-2xl text-center rounded-lg font-bold">
                    {depositAmount} BDT
                  </div>
                </div>
              </div>
              <form ref={formRef}>
                <div>
                  {paymentMethod?.inputs?.map(
                    ({ label, type, property, required }, index) => (
                      <div key={index}>
                        <p className="text-white mt-4 text-sm font-semibold">
                          {label}
                        </p>
                        {type === "file" ? (
                          <div>
                            <input
                              type="file"
                              accept="image/*"
                              name={property}
                              onChange={(e) => handleFileChange(e, property)}
                              className="w-full my-2 px-5 py-2 font-semibold bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                              required={required}
                            />
                            {files[label] && (
                              <p className="mt-2 text-sm text-gray-500">
                                Selected file: {files[label].name}
                              </p>
                            )}
                          </div>
                        ) : (
                          <input
                            name={property}
                            type={type}
                            className="w-full my-2 px-5 py-2 font-semibold bg-white border border-gray-500 rounded-lg focus:outline-none placeholder-gray-500 text-black"
                            placeholder={label}
                            required={required}
                          />
                        )}
                      </div>
                    )
                  )}
                </div>
                <div className="">
                  {paymentMethod?.instructions?.map((item) => (
                    <p
                      key={item}
                      className="text-xs font-semibold text-gray-300 py-2 border-b border-gray-600"
                    >
                      ▪{item}
                    </p>
                  ))}
                </div>
                <div className="w-40 m-auto pt-3">
                  <button
                    disabled={loading}
                    onClick={handlePaymentSubmit}
                    className="py-2 px-4 w-full text-xl font-semibold text-white disabled:bg-slate-400 disabled:text-black disabled:cursor-not-allowed bg-red-600 hover:bg-red-700 border border-white rounded-lg duration-300"
                  >
                    {loading ? "..." : "Deposit Now"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositModal;
