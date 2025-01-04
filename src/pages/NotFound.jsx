import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
       <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      <h1 className="text-9xl font-extrabold text-gray-700">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-600">
        We're sorry, but the page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 mt-5 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
      >
        Back to Home
      </button>
    </div>
    
  );
};

export default PageNotFound;