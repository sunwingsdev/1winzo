import { deleteImage } from "@/hooks/files";
import {
  useDeleteHomeControlMutation,
  useGetHomeControlsQuery,
  useUpdateSelectionMutation,
} from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { FaTrash } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";
import Swal from "sweetalert2";

const SliderSelectionSection = () => {
  const { data: homeControls, refetch } = useGetHomeControlsQuery();
  const [updateSelection] = useUpdateSelectionMutation();
  const [deleteHomeControl] = useDeleteHomeControlMutation();
  const { addToast } = useToasts();

  const sliderHomeControls = homeControls?.filter(
    (control) => control.page === "home" && control.category === "slider"
  );

  const handleCheckboxChange = async (id) => {
    try {
      const result = await updateSelection(id);
      if (result.data) {
        addToast(result.data.message, {
          appearance: "success",
          autoDismiss: true,
        });
      }
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id, imagePath) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "Confirm Deletion",
      text: "This action cannot be undone. Do you want to delete?",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      focusCancel: true,

      // Modern colors
      confirmButtonColor: "#dc2626", // red-600
      cancelButtonColor: "#9ca3af", // gray-400

      // Custom button styles
      buttonsStyling: false,
      customClass: {
        popup: "rounded-xl shadow-lg p-6 bg-white",
        title: "text-lg font-bold text-gray-800",
        htmlContainer: "text-sm text-gray-600",
        actions: "flex justify-end gap-4 mt-4",
        confirmButton:
          "bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition",
        cancelButton:
          "bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition",
      },
    });

    if (!result.isConfirmed) return;

    try {
      await deleteImage(imagePath); // delete image first
      await deleteHomeControl(id).unwrap(); // then delete DB entry

      addToast("Deleted successfully", {
        appearance: "success",
        autoDismiss: true,
      });

      refetch();
    } catch (error) {
      addToast("Failed to delete", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 mb-10">
      {sliderHomeControls?.map((control) => (
        <div
          className="relative border border-[#14805e] p-2 rounded-md w-96"
          key={control?._id}
        >
          <img
            className="w-full h-full rounded-md"
            src={`${import.meta.env.VITE_BASE_API_URL}${control?.image}`}
            alt=""
          />
          <input
            checked={control?.isSelected === true}
            className="absolute top-0 left-0 size-6"
            type="checkbox"
            name=""
            onChange={() => handleCheckboxChange(control?._id)}
            id={control?._id}
          />
          <div
            onClick={() => handleDelete(control?._id, control?.image)}
            className="absolute -top-4 -right-4 p-2 group rounded-full hover:bg-red-600 duration-200 cursor-pointer"
          >
            <FaTrash className="text-2xl text-red-500 group-hover:text-white duration-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderSelectionSection;
