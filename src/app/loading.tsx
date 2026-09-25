import React from "react";

function LoadingPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      <div className="h-8 w-8 rounded-full border-2 border-gray-200 dark:border-gray-800 border-t-gray-800 dark:border-t-gray-200 animate-spin"></div>

      <p className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
        Loading...
      </p>
    </div>
  );
}

export default LoadingPage;
