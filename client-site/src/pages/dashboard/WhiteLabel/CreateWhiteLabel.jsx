import { useContext, useState } from "react";
import {
  LayoutDashboard,
  Globe,
  KeyRound,
  ShieldCheck,
  DollarSign,
  Database,
  Layers,
} from "lucide-react";
import { AuthContext } from "@/providers/AuthProvider";

const CreateWhiteLabel = () => {
  const { setIsApiModalOpen } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    siteTitle: "",
    domainName: "",
    dns1: "",
    dns2: "",
    dns3: "",
    dns4: "",
    licenseKey: "",
    secretKey: "",
    currency: "",
    wlBalance: "",
    wlBalanceNotification: "",
    template: "Daraz Play",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (isFormValid) {
      setIsApiModalOpen(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const inputStyle =
    "w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  const fieldList = [
    {
      label: "White Label Site Title",
      name: "siteTitle",
      icon: LayoutDashboard,
    },
    { label: "Domain Name", name: "domainName", icon: Globe },
    { label: "DNS-1", name: "dns1" },
    { label: "DNS-2", name: "dns2" },
    { label: "DNS-3", name: "dns3" },
    { label: "DNS-4", name: "dns4" },
    { label: "License Key", name: "licenseKey", icon: KeyRound },
    { label: "Secret Key", name: "secretKey", icon: ShieldCheck },
    { label: "Currency", name: "currency", icon: DollarSign },
    { label: "WL-Balance Amount", name: "wlBalance", icon: Database },
    {
      label: "WLL-Balance Notification Amount",
      name: "wlBalanceNotification",
      icon: Layers,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Create White Label Site
        </h2>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {fieldList.map(({ label, name, icon: Icon }) => (
            <div key={name}>
              <label className="block text-gray-700 font-semibold mb-2">
                {Icon && <Icon className="inline w-5 h-5 mr-1 text-blue-500" />}
                {label}
              </label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </div>
          ))}

          <div className="">
            <label className="block text-gray-700 font-semibold mb-2">
              🎨 Select Template
            </label>
            <select
              name="template"
              value={formData.template}
              onChange={handleChange}
              className={inputStyle}
            >
              <option value="Daraz Play">Daraz Play</option>
              <option value="Nagad88">Nagad88</option>
              <option value="Babu88">Babu88</option>
            </select>
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium py-3 px-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateWhiteLabel;
