import { uploadImage } from "@/hooks/files";
import {
  // useAddSupportMutation,
  useGetAllSupportQuery,
  useUpdateSupportMutation,
} from "@/redux/features/allApis/customerSupportApi/customerSupportApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const AffCustomerSupport = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: supportData, isLoading } = useGetAllSupportQuery();
  const [updateSupport] = useUpdateSupportMutation();
  // const [addSupport] = useAddSupportMutation();

  const [telegram, setTelegram] = useState({
    id: "",
    numbers: "",
    image: null, // File object
    preview: "", // Only for previewing uploaded file
    backendImage: "", // For showing the current saved image
  });

  const [whatsapp, setWhatsapp] = useState({
    id: "",
    numbers: "",
    image: null, // File object
    preview: "", // Only for previewing uploaded file
    backendImage: "", // For showing the current saved image
  });

  // 🧠 Initialize state from API
  useEffect(() => {
    if (supportData?.length) {
      const telegramData = supportData.find((item) => item.type === "telegram");
      const whatsappData = supportData.find((item) => item.type === "whatsapp");

      if (telegramData) {
        setTelegram({
          id: telegramData._id,
          numbers: telegramData.number || "",
          image: null,
          preview: "",
          backendImage: telegramData.image || "",
        });
      }

      if (whatsappData) {
        setWhatsapp({
          id: whatsappData._id,
          numbers: whatsappData.number || "",
          image: null,
          preview: "",
          backendImage: whatsappData.image || "",
        });
      }
    }
  }, [supportData]);

  const handleImageChange = (e, platform) => {
    const file = e.target.files[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    if (platform === "telegram") {
      setTelegram((prev) => ({ ...prev, image: file, preview }));
    } else {
      setWhatsapp((prev) => ({ ...prev, image: file, preview }));
    }
  };

  const handleDeleteImage = (platform) => {
    if (platform === "telegram") {
      setTelegram((prev) => ({ ...prev, image: null, preview: null }));
    } else {
      setWhatsapp((prev) => ({ ...prev, image: null, preview: null }));
    }
  };

  const handleUpdate = async (platform) => {
    try {
      let filePath = "";
      let updateData;
      const selected = platform === "telegram" ? telegram : whatsapp;

      if (selected.image) {
        const uploaded = await uploadImage(selected.image);
        filePath = uploaded?.filePath || "";
      }

      updateData = {
        number: selected.numbers,
        ...(filePath && { image: filePath }),
      };

      // const payload = {
      //   number: selected.numbers,
      //   type: platform,
      //   createdBy: user?._id,
      //   ...(filePath && { image: filePath }),
      // };
      // await addSupport(payload).unwrap();
      const res = await updateSupport({
        id: selected.id,
        data: updateData,
      }).unwrap();

      Swal.fire("Success", `${platform} info updated`, "success");
    } catch (err) {
      Swal.fire("Error", `Failed to update ${platform} info`, "error");
    }
  };

  return (
    <div className="space-y-12 text-xs">
      {/* Telegram Section */}
      <section className="bg-[#e0e6e6] p-3 border-b border-[#7e97a7]">
        <h2 className="text-textHeadingColor text-base font-semibold mb-4">
          Set Telegram
        </h2>

        <div className="flex items-center gap-3 mb-4">
          <label className="font-medium">Number/Links:</label>

          <input
            type="text"
            placeholder="Enter number"
            value={telegram.numbers}
            onChange={(e) =>
              setTelegram((prev) => ({ ...prev, numbers: e.target.value }))
            }
            className="w-[15%] p-2 py-3 border border-borderTableColor rounded"
          />

          <div className="flex w-[20%] gap-1 font-semibold items-center">
            <p>Icon</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "telegram")}
              className="p-1"
            />
          </div>

          <img
            src={
              telegram.preview
                ? telegram.preview
                : `${import.meta.env.VITE_BASE_API_URL}${telegram.backendImage}`
            }
            alt="Telegram Icon"
            className="w-[80px] h-[65px] object-cover rounded border"
          />

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleUpdate("telegram")}
              className="bg-bgYellowColor hover:bg-bgHoverYellowColor border border-borderYellowColor px-4 py-2 text-black rounded"
            >
              Update
            </button>
            {telegram.preview && (
              <button
                onClick={() => handleDeleteImage("telegram")}
                className="text-white px-4 py-2 rounded-md  bg-bgRed"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="bg-[#e0e6e6] p-3 border-b border-[#7e97a7]">
        <h2 className="text-textHeadingColor text-base font-semibold mb-4">
          Set WhatsApp
        </h2>

        <div className="flex items-center gap-3 mb-4">
          <label className="font-medium">Number/Links:</label>

          <input
            type="text"
            placeholder="Enter number"
            value={whatsapp.numbers}
            onChange={(e) =>
              setWhatsapp((prev) => ({ ...prev, numbers: e.target.value }))
            }
            className="w-[15%] p-2 py-3 border border-borderTableColor rounded"
          />

          <div className="flex w-[20%] gap-1 font-semibold items-center">
            <p>Icon</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "whatsapp")}
              className="p-1"
            />
          </div>

          <img
            src={
              whatsapp.preview
                ? whatsapp.preview
                : `${import.meta.env.VITE_BASE_API_URL}${whatsapp.backendImage}`
            }
            alt="WhatsApp Icon"
            className="w-[80px] h-[65px] object-cover rounded border"
          />

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleUpdate("whatsapp")}
              className="bg-bgYellowColor hover:bg-bgHoverYellowColor border border-borderYellowColor px-4 py-2 text-black rounded"
            >
              Update
            </button>
            {whatsapp.preview && (
              <button
                onClick={() => handleDeleteImage("whatsapp")}
                className="text-white px-4 py-2 rounded-md  bg-bgRed"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffCustomerSupport;
