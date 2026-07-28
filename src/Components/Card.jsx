import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const statusColor = {
    overdue: "bg-red-500",
    "on-track": "bg-green-500",
    active: "bg-blue-500",
  };

  return (
    <Link to={`/details/${item.id}`}>
      <div className="flex items-center justify-center p-4">
        <div className="bg-white w-64 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100">

          <img
            src={item.picture}
            alt={item.name}
            className="rounded-full w-24 h-24 object-cover mb-4"
          />

          <h2 className="text-xl font-bold text-slate-700">
            {item.name}
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            {item.days_since_contact} days
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2 justify-center">
            {item.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-green-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Status */}
          <span
            className={`mt-3 px-3 py-2 text-white text-sm font-medium rounded-2xl ${
              statusColor[item.status] || "bg-gray-400"
            }`}
          >
            {item.status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;