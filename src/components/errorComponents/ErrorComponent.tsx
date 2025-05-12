import React from "react";
import { CiCircleAlert } from "react-icons/ci";
import { FiRefreshCcw } from "react-icons/fi";

interface Props {
  message: string;
  details: string;
  onRetry: () => void;
  className?: string;
}

export const ErrorComponent = ({
  className = "",
  details,
  message,
  onRetry,
}: Props) => {
  return (
    <div
      className={`bg-red-50 border-l-4 border-red-500 rounded-lg p-2 shadow-md mx-auto max-w-lg ${className}`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <CiCircleAlert className="h-6 w-6 text-red-500" />
        </div>

        <div className="ml-3 flex-1">
          <h3 className="text-lg font-medium text-red-800">{message}</h3>

          <div className="mt-2 text-sm text-red-700">
            <p>{details}</p>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            >
              <FiRefreshCcw className="mr-2 h-4 w-4" />
              Reintentar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
