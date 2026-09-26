import React from "react";

type LoadingProps = {
  loadingText?: string;
};

function Loading(props: LoadingProps) {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center bg-gray-900 text-gray-200">
      <div className="h-8 w-8 rounded-full border-2 border-gray-800 border-t-gray-200 animate-spin"></div>

      <p className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
        {props.loadingText ?? "Loading..."}
      </p>
    </div>
  );
}

export default Loading;
