import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import CategoryUploadForm from "./CategoryUploadForm";
import { FaTrash } from "react-icons/fa";
import {
  useDeletePromotionCategoryMutation,
  useGetAllPromotionCategoriesQuery,
} from "@/redux/features/allApis/promotionApi/promotionCategoryApi";
import OppsModal from "@/components/betjili/shared/Modals/OppsModal";
import DeleteModal from "@/components/shared/modal/DeleteModal";

const PromotionCategoriesSection = () => {
  const {
    data: categories,
    isLoading,
    refetch,
  } = useGetAllPromotionCategoriesQuery();

  const [deletePromotionCategory, { isLoading: isDeleting }] =
    useDeletePromotionCategoryMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const promotionCategories = categories?.filter(
    (category) => category.categoryType === "promotion"
  );

  const openDeleteModal = (id) => {
    setSelectedCategoryId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedCategoryId) return;
    try {
      await deletePromotionCategory(selectedCategoryId).unwrap();
      setIsDeleteModalOpen(false);
      setSelectedCategoryId(null);
      refetch();
    } catch (error) {
      console.error("Failed to delete promotion category", error);
    }
  };

  return (
    <>
      <div className="w-full lg:w-2/3 rounded-lg text-white px-3 py-1.5">
        <div className="flex bg-[#222222] p-2 items-center justify-between rounded-md mb-4">
          <h2 className="text-base lg:text-lg font-bold rounded-md px-4">
            Add Promotion Categories
          </h2>
          <Button
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-black py-2 px-4 rounded whitespace-nowrap"
            onClick={() => setIsModalOpen(true)}
          >
            <IoAdd /> Add
          </Button>
        </div>
        <div className="text-center text-black">
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : promotionCategories?.length === 0 ? (
            <p className="text-center text-gray-500">No promotions available</p>
          ) : (
            promotionCategories.map((category) => (
              <div
                key={category._id}
                className="flex items-center justify-between mb-2 bg-[#d0caeb] rounded-md shadow-xl px-4 py-2"
              >
                <h3 className="text-lg font-medium">
                  {category?.label} ({category?.value})
                </h3>
                <button
                  onClick={() => openDeleteModal(category._id)}
                  className="text-red-600 hover:text-red-800 transition"
                  title="Delete"
                >
                  <FaTrash title="Delete" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <OppsModal
        title={"Add promotion category"}
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      >
        <CategoryUploadForm closeModal={() => setIsModalOpen(false)} />
      </OppsModal>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        closeModal={() => setIsDeleteModalOpen(false)}
        handleDelete={handleDelete}
        isLoading={isDeleting}
      />
    </>
  );
};

export default PromotionCategoriesSection;
