import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const chartData = [
  { name: "Tennis", value: 2, color: "rgb(254, 106, 53)" },
  { name: "Soccer", value: 10, color: "rgb(0, 226, 114)" },
  { name: "Casino", value: 114.18, color: "rgb(84, 79, 197)" },
  { name: "Cricket", value: 40, color: "rgb(44, 175, 254)" },
];

const RADIAN = Math.PI / 180;

const renderLabel = ({ cx, cy, midAngle, outerRadius, index }, hoveredIndex) => {
  const lineLength = 20;
  const labelOffset = 30;
  const angle = -midAngle * RADIAN;

  const startX = cx + outerRadius * Math.cos(angle);
  const startY = cy + outerRadius * Math.sin(angle);
  const endX = cx + (outerRadius + lineLength) * Math.cos(angle);
  const endY = cy + (outerRadius + lineLength) * Math.sin(angle);
  const textX = cx + (outerRadius + labelOffset) * Math.cos(angle);
  const textY = cy + (outerRadius + labelOffset) * Math.sin(angle);

  return (
    <g>
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke={chartData[index].color}
        strokeWidth={2}
      />
      <text
        x={textX}
        y={textY}
        fontSize={12}
        fontWeight="500"
        opacity={hoveredIndex === null || hoveredIndex === index ? 1 : 0.3}
        textAnchor={textX > cx ? "start" : "end"}
        dominantBaseline="middle"
      >
        {chartData[index].name}
      </text>
    </g>
  );
};

const CustomPieChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const chartSize = 500;
  const outerRadius = 180;
  const total = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="flex justify-center items-center">
      <div
        className="relative"
        style={{ width: chartSize, height: chartSize }}
        onMouseMove={(e) => {
          // Track mouse position inside container for tooltip positioning
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          setMousePos({ x, y });
        }}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <PieChart width={chartSize} height={chartSize}>
          <Pie
            data={chartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={outerRadius}
            label={(props) => renderLabel(props, hoveredIndex)}
            labelLine={false}
            onMouseEnter={(_, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                fillOpacity={
                  hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0.2
                }
                style={{ transition: "opacity 0.2s ease-in-out", cursor: "pointer" }}
              />
            ))}
          </Pie>
        </PieChart>

        {/* Tooltip */}
        {hoveredIndex !== null && (
          <div
            className="absolute bg-white text-black px-2 py-1 text-xs rounded shadow-md"
            style={{
              left: mousePos.x + 10,
              top: mousePos.y + 10,
              pointerEvents: "none",
              zIndex: 10,
              fontWeight: "500",
              border: "1px solid #ddd",
              whiteSpace: "nowrap",
            }}
          >
            <div className="flex items-center gap-1">
              <span>{chartData[hoveredIndex].name}</span>
            </div>
            <div className="text-gray-700 mt-0.5">
              <span
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: chartData[hoveredIndex].color,
                }}
              ></span>{" "}
              : {chartData[hoveredIndex].value} / {total.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomPieChart;
