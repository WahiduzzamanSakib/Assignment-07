import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2">
        The page you are looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="btn btn-success mt-3 text-white rounded-lg hover:bg-green-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;