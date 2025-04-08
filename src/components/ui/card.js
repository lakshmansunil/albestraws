import React from "react";

export function Card({ children, className }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg border border-gray-200 
                  p-6 transition-transform transform hover:scale-105 
                  hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={`space-y-3 ${className}`}>{children}</div>;
}
