import React from "react";

function WorkoutCartDropdown() {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="text-gray-500 text-sm whitespace-nowrap">
        Sort by
      </label>
      <select
        name="sort"
        id="sort"
        className="px-3 py-2 border border-gray-700 rounded-xl text-sm bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
      >
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default WorkoutCartDropdown;
