import React from "react";

function WorkoutCartFilter() {
  let activeClasses = "text-gray-300 font-bold bg-gray-800/80";
  return (
    <div className="flex bg-gray-900/80 p-1 rounded-xl text-gray-500">
      <button
        className={`px-4 py-1.5 rounded-lg text-xs cursor-pointer ${activeClasses}`}
      >
        Today&apos;s Plan
      </button>
      <button className={`px-4 py-1.5 rounded-lg text-xs cursor-pointer`}>
        Saved
      </button>
    </div>
  );
}

export default WorkoutCartFilter;
