const AllWhiteLabel = () => {
  // Example data (you can replace this with real API data)
  const whiteLabels = [
    {
      id: 1,
      siteTitle: "Daraz Play",
      domain: "darazplay.com",
      dns1: "8.8.8.8",
      dns2: "8.8.4.4",
      dns3: "8.8.4.4",
      dns4: "8.8.4.4",
      licenseKey: "ABC123XYZ",
      currency: "USD",
      template: "Daraz Play",
    },
    {
      id: 2,
      siteTitle: "Nagad88",
      domain: "nagad88.live",
      dns1: "1.1.1.1",
      dns2: "1.0.0.1",
      dns3: "1.0.0.1",
      dns4: "1.0.0.1",
      licenseKey: "NAGAD-9988",
      currency: "BDT",
      template: "Nagad88",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          All White Labels
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm">
            <thead className="bg-blue-100 text-blue-800 font-semibold text-sm">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Site Title</th>
                <th className="px-4 py-3 text-left">Domain</th>
                <th className="px-4 py-3 text-left">DNS 1</th>
                <th className="px-4 py-3 text-left">DNS 2</th>
                <th className="px-4 py-3 text-left">DNS 3</th>
                <th className="px-4 py-3 text-left">DNS 4</th>
                <th className="px-4 py-3 text-left">License Key</th>
                <th className="px-4 py-3 text-left">Currency</th>
                <th className="px-4 py-3 text-left">Template</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {whiteLabels.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-100 transition duration-200 border-t border-gray-200"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium">{item.siteTitle}</td>
                  <td className="px-4 py-3">{item.domain}</td>
                  <td className="px-4 py-3">{item.dns1}</td>
                  <td className="px-4 py-3">{item.dns2}</td>
                  <td className="px-4 py-3">{item.dns3}</td>
                  <td className="px-4 py-3">{item.dns4}</td>
                  <td className="px-4 py-3">{item.licenseKey}</td>
                  <td className="px-4 py-3">{item.currency}</td>
                  <td className="px-4 py-3">{item.template}</td>
                </tr>
              ))}
              {whiteLabels.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center py-6 text-gray-500">
                    No white labels found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllWhiteLabel;
