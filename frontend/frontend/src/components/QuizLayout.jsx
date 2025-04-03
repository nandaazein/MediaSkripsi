import React from "react";

export default function QuizLayout({ children }) {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md text-center">
      {children}
    </div>
  );
}
