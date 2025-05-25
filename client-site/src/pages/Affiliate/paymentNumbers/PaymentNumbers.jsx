import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useGetPaymentMethodsQuery } from "@/redux/features/allApis/paymentMethodApi/paymentMethodApi";
import { useSelector } from "react-redux";
import {
  useAddPaymentNumberMutation,
  useDeletePaymentNumberMutation,
  useGetAllPaymentNumbersQuery,
  useUpdatePaymentNumberStatusMutation,
} from "@/redux/features/allApis/paymentNumberApi/paymentNumberApi";
import { useToasts } from "react-toast-notifications";
import Swal from "sweetalert2";
import { TrashIcon } from "lucide-react";

const PaymentNumbers = () => {
  const { user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [paymentData, setPaymentData] = useState([]);
  const [form, setForm] = useState({
    paymentNumberMethod: "Bkash",
    paymentNumber: "",
    numberCategory: "Agent",
  });

  const { data: allGateways } = useGetPaymentMethodsQuery();
  const [addPaymentNumber] = useAddPaymentNumberMutation();
  const [updatePaymentNumberStatus] = useUpdatePaymentNumberStatusMutation();
  const [deletePaymentNumber] = useDeletePaymentNumberMutation();

  const { addToast } = useToasts();

  const activeGateways = allGateways
    ?.filter((gateway) => gateway.status === "active")
    ?.filter((gateway) => gateway.createdBy === user?._id)
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const { data: allNumbers } = useGetAllPaymentNumbersQuery();

  const filteredNumbers = allNumbers
    ?.filter((number) => number?.userId === user?._id)
    ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        paymentNumberMethod: form.paymentNumberMethod,
        paymentNumber: form.paymentNumber,
        numberCategory: form.numberCategory,
        userId: user?._id,
        channel: "apay",
        status: "approve",
      };

      const result = await addPaymentNumber(payload).unwrap();

      setPaymentData([...paymentData, result]);
      setForm({
        paymentNumberMethod: "Bkash",
        paymentNumber: "",
        numberCategory: "Agent",
      });
      setIsOpen(false);

      addToast("Payment number added successfully!", { appearance: "success" });
    } catch (err) {
      console.error("Failed to add payment number:", err);
      addToast("Failed to add payment number.", { appearance: "error" });
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updatePaymentNumberStatus({ id, status: newStatus }).unwrap();
      addToast("Status updated successfully", { appearance: "success" });
    } catch (err) {
      addToast("Failed to update status", { appearance: "error" });
      console.error(err);
    }
  };

  const handleDeletePaymentNumber = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await deletePaymentNumber(id).unwrap();
      addToast("Deleted successfully", { appearance: "success" });

      Swal.fire({
        title: "Deleted!",
        text: "Payment number has been deleted.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error(err);
      addToast("Failed to delete", { appearance: "error" });

      Swal.fire({
        title: "Error!",
        text: "Failed to delete payment number.",
        icon: "error",
      });
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNumbers?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil((filteredNumbers?.length || 0) / itemsPerPage);

  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4">Payment Numbers</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={() => setIsOpen(true)}
        >
          Add Payment Number
        </button>
      </div>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Number</th>
            <th className="border px-4 py-2">Method</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((item, index) => (
            <tr key={index} className="even:bg-gray-50">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{item.paymentNumber}</td>
              <td className="border px-4 py-2">{item.paymentNumberMethod}</td>
              <td className="border px-4 py-2">{item.numberCategory}</td>
              <td className="border px-4 py-2">
                <select
                  value={item.status}
                  onChange={(e) => handleStatusChange(item._id, e.target.value)}
                  className={`px-2 py-1 rounded border text-sm font-medium ${
                    item.status === "approve"
                      ? "bg-green-200 text-green-600 border-green-600"
                      : item.status === "reject"
                      ? "bg-red-200 text-red-600 border-red-600"
                      : "bg-yellow-200 text-yellow-600 border-yellow-600"
                  }`}
                >
                  <option value="approve">Approve</option>
                  <option value="reject">Reject</option>
                  <option value="pending">Pending</option>
                </select>
              </td>
              <td className="border px-4 py-2">
                <TrashIcon
                  onClick={() => handleDeletePaymentNumber(item._id)}
                  className="w-5 h-5 text-red-500 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Panel className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <Dialog.Title className="text-lg font-bold mb-4">
              Add Payment Number
            </Dialog.Title>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Select Payment Method
              </label>
              <select
                name="paymentNumberMethod"
                value={form.paymentNumberMethod}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                {activeGateways?.map((gateway) => (
                  <option key={gateway?._id} value={gateway?.method}>
                    {gateway?.method}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Enter Your Number
              </label>
              <input
                type="text"
                name="paymentNumber"
                placeholder="Ex. Enter Bkash number"
                value={form.paymentNumber}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Select Number Category
              </label>
              <div className="flex space-x-4">
                {["Agent", "Personal", "Merchant"].map((cat) => (
                  <label key={cat} className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="numberCategory"
                      value={cat}
                      checked={form.numberCategory === cat}
                      onChange={handleChange}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              className="w-full bg-blue-500 text-white py-2 rounded"
              onClick={handleSubmit}
            >
              Add number
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default PaymentNumbers;
