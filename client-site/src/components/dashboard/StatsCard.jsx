import React from "react";

function StatsCard({ count, title, bgColor, Icon }) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-md shadow-md ${bgColor} text-white`}
    >
      <div>
        <p className="text-2xl font-bold">{count}</p>
        <h3 className="text-lg text-textSecondaryColor">{title}</h3>
      </div>
      {Icon && <Icon className="text-6xl text-white opacity-15" />}{" "}
      {/* Render the icon dynamically */}
    </div>
  );
}

export default StatsCard;
