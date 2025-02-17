import { useState } from "react";
import HistoryCard from "./HistoryCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useGetDepositsQuery } from "../../redux/features/allApis/depositsApi/depositsApi";

const DepositHistoryTab = () => {
  const { data: allDeposits } = useGetDepositsQuery();
  // Sample data for the HistoryCards
  // const historyData = [
  //   { status: "error", amount: 500 },
  //   { status: "success", amount: 1500 },
  //   { status: "error", amount: 1000 },
  //   { status: "error", amount: 500 },
  //   { status: "error", amount: 2000 },
  //   { status: "success", amount: 2500 },
  //   { status: "success", amount: 4500 },
  //   { status: "error", amount: 3000 },
  //   { status: "success", amount: 500 },
  //   { status: "error", amount: 800 },
  // ];

  const cardsPerPage = 6; // Number of cards per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indices of the cards to show
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allDeposits?.slice(indexOfFirstCard, indexOfLastCard);

  // Calculate total pages
  const totalPages = Math.ceil(allDeposits?.length / cardsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="pl-6 md:pl-6 pr-6 md:pr-28 py-6 md:py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentCards?.map((card, index) => (
          <HistoryCard key={index} status={card.status} amount={card.amount} />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-2 rounded ${
            currentPage === 1 ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
          } text-white`}
        >
          <IoIosArrowBack />
        </button>
        <span className="px-4 py-2 text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-400"
              : "bg-blue-500 hover:bg-blue-700"
          } text-white`}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default DepositHistoryTab;
