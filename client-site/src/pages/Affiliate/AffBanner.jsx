import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const categoryOptions = ["Home Top Slider", "Home Middle Slider"];

const AffBanner = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [banners, setBanners] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // Preview image URL set
    }
  };

  const handleAddBanner = () => {
    if (selectedCategory && selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      const newBanner = {
        image: imageUrl,
        category: selectedCategory,
      };
      setBanners([...banners, newBanner]);
      setSelectedCategory("");
      setSelectedFile(null);
      setPreview(null);
      setShowAddModal(false);
    }
  };

  const handleDelete = () => {
    if (deleteIndex !== null) {
      const updated = [...banners];
      updated.splice(deleteIndex, 1);
      setBanners(updated);
      setDeleteIndex(null);
      setShowDeleteModal(false);
    }
  };

  useEffect(() => {
    if (categoryOptions.length > 0) {
      setSelectedCategory(categoryOptions[0]);
    }
  }, []);

  return (
    <div>
      <div className="w-full flex justify-between">
        <p className="text-textHeadingColor font-semibold">Banner</p>
        <button
          className="bg-[#0d6efd] hover:bg-[#0363f3] p-2 text-white rounded-md"
          onClick={() => setShowAddModal(true)}
        >
          + Add Banner
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto my-4">
        <table className="min-w-full text-sm text-white">
          <thead className="text-xs whitespace-nowrap border-y font-extralight text-textTableHeader bg-bgTableHeader border-borderTableColor">
            <tr>
              {["Sr no.", "Banner Image", "Category", "Action"].map(
                (header, idx) => (
                  <th key={idx} className="px-2 py-2 font-normal text-left">
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {banners.length > 0 ? (
              banners.map((banner, i) => (
                <tr
                  key={i}
                  className="border-b border-borderTableColor text-black bg-opacity-5 bg-bgBlack"
                >
                  <td className="px-2 p-1">{i + 1}</td>
                  <td className="px-2 ">
                    <img
                      src={banner.image}
                      alt="banner"
                      className="w-[115px] h-auto border-8 border-white"
                    />
                  </td>
                  <td className="px-2 p-1  text-xs text-black font-medium">
                    {banner.category}
                  </td>
                  <td className="px-2 p-1">
                    <button
                      className="text-white p-2  rounded-md text-base bg-bgRed"
                      onClick={() => {
                        setDeleteIndex(i);
                        setShowDeleteModal(true);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-2 p-1 text-gray-800 bg-opacity-5 bg-bgBlack text-xs border-b border-borderTableColor "
                >
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Banner Modal */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50  bg-black bg-opacity-60"
          onClick={() => setShowAddModal(false)}
        >
          <div className="flex justify-center items-start mr-24 mt-7">
            <div
              className="bg-bgModalColor p-4 rounded-lg  max-w-[410px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-textHeadingColor font-semibold">
                  Add Banner
                </h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="bg-bgBlack text-white  rounded"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-4 ">
                <select
                  className="w-full p-2 text-xs text-black font-medium border border-borderTableColor border-opacity-80 rounded mb-4"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categoryOptions.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <div className="flex items-center justify-between border rounded  mb-4">
                  <div className="w-[50%] text-xs">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </div>
                  <span className="text-xs text-textRedColor ">
                    *Image should be 302x137
                  </span>
                </div>

                {preview && (
                  <div className="mb-4">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-[270px] rounded"
                    />
                  </div>
                )}
                <div
                  className="bg-bgYellowColor hover:bg-bgHoverYellowColor w-[33%] flex justify-center border-borderYellowColor border items-center rounded-md cursor-pointer "
                  onClick={handleAddBanner}
                >
                  <button className="text-xs py-[7px] font-medium ">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div
          className="fixed inset-0 z-50  bg-black bg-opacity-60"
          onClick={() => setShowDeleteModal(false)}
        >
          <div className="flex justify-center items-start mr-24 mt-7">
            <div
              className="bg-bgModalColor p-4 rounded-lg w-[90%] max-w-[410px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-textHeadingColor font-semibold">Delete</h2>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-black text-white"
                >
                 <X size={18}/>
                </button>
              </div>
              <div className="flex gap-1 px-4">
                <label className="block mb-2 text-sm font-medium text-black">
                  Remark:
                </label>
                <textarea className="w-[80%] border border-borderTableColor border-opacity-80 rounded  mb-4" rows="3" />
              </div>

              <div className="flex justify-center text-[#212529] mb-6 font-medium">
                <p>Are you sure to delete this banner?</p>
              </div>

              <div className="flex justify-center text-xs space-x-2">
               
                <button
                  onClick={handleDelete}
                  className="bg-bgYellowColor hover:bg-bgHoverYellowColor border border-borderYellowColor text-black font-bold px-4 py-2 rounded-md"
                >
                  Confirm
                </button>

                 <button
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-bgYellowColor hover:bg-bgHoverYellowColor border border-borderYellowColor text-black font-bold px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AffBanner;
