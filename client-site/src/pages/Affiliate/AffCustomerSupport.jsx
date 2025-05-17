import React, { useState } from "react";

const AffCustomerSupport = () => {
  // Telegram state
  const [telegramNumbers, setTelegramNumbers] = useState("");
  const [telegramImage, setTelegramImage] = useState(null);
  const [telegramPreview, setTelegramPreview] = useState(null);

  // WhatsApp state
  const [whatsappNumbers, setWhatsappNumbers] = useState("");
  const [whatsappImage, setWhatsappImage] = useState(null);
  const [whatsappPreview, setWhatsappPreview] = useState(null);

  // Handlers
  const handleTelegramImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTelegramImage(file);
      setTelegramPreview(URL.createObjectURL(file));
    }
  };

  const handleWhatsappImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setWhatsappImage(file);
      setWhatsappPreview(URL.createObjectURL(file));
    }
  };

  const handleDeleteTelegramImage = () => {
    setTelegramImage(null);
    setTelegramPreview(null);
  };

  const handleDeleteWhatsappImage = () => {
    setWhatsappImage(null);
    setWhatsappPreview(null);
  };

  const handleUpdateTelegram = () => {
    alert("Telegram info updated!");
  };

  const handleUpdateWhatsapp = () => {
    alert("WhatsApp info updated!");
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
            placeholder="Enter numbers of field"
            value={telegramNumbers}
            onChange={(e) => setTelegramNumbers(e.target.value)}
            className="w-[15%] p-2 py-3 border border-borderTableColor rounded"
          />

          <div className="flex w-[20%] gap-1 font-semibold items-center">
            <p>Icon</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleTelegramImageChange}
              className="p-1"
            />
          </div>

          {telegramPreview && (
            <img
              src={telegramPreview}
              alt="Telegram Preview"
              className="w-[80px] h-[65px] object-cover rounded border"
            />
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={handleUpdateTelegram}
              className="bg-bgYellowColor hover:bg-bgHoverYellowColor border border-borderYellowColor px-4 py-2 text-black rounded"
            >
              Update
            </button>
            {telegramPreview && (
              <button
                onClick={handleDeleteTelegramImage}
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
            placeholder="Enter numbers of field"
            value={whatsappNumbers}
            onChange={(e) => setWhatsappNumbers(e.target.value)}
            className="w-[15%] p-2 py-3 border border-borderTableColor rounded"
          />

          <div className="flex w-[20%] gap-1 font-semibold items-center">
            <p>Icon</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleWhatsappImageChange}
              className="p-1"
            />
          </div>

          {whatsappPreview && (
            <img
              src={whatsappPreview}
              alt="WhatsApp Preview"
              className="w-[80px] h-[80px] object-cover rounded border"
            />
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={handleUpdateWhatsapp}
              className="bg-bgYellowColor hover:bg-bgHoverYellowColor border border-borderYellowColor px-4 py-2 text-black rounded"
            >
              Update
            </button>
            {whatsappPreview && (
              <button
                onClick={handleDeleteWhatsappImage}
                className="text-white p-2 rounded-md text-base bg-bgRed"
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
