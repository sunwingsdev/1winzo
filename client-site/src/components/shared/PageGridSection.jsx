import { useState } from "react";
import Games from "./Games";

const PageGridSection = ({ img, title, games }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 12;

  const totalPages = Math.ceil(games?.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const currentGames = games?.slice(startIndex, startIndex + gamesPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="flex flex-row items-center gap-1 mb-4">
        <img
          src={`${import.meta.env.VITE_BASE_API_URL}${img}`}
          className="w-10 h-10"
          alt={`${title} category image`}
        />
        <h1 className="text-lg font-bold text-white whitespace-nowrap capitalize">
          {title} Games
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-2">
        {currentGames?.map((game) => (
          <Games key={game?._id} game={game} />
        ))}
      </div>

      {/* Pagination Controls */}
      {games?.length > gamesPerPage && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default PageGridSection;
