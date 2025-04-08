import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Our Services
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link to="/services/hr-supply" className="bg-blue-600 p-6 rounded-lg hover:bg-blue-700 transition">
          <h2 className="text-xl font-semibold">Supply the Human Resource</h2>
          <p>Providing top-tier staffing solutions to businesses.</p>
        </Link>

        <Link to="/services/hardware-supply" className="bg-blue-600 p-6 rounded-lg hover:bg-blue-700 transition">
          <h2 className="text-xl font-semibold">Hardware Supply</h2>
          <p>Quality tools and materials for construction and industry.</p>
        </Link>
      </div>
    </div>
  );
};

export default Services;
