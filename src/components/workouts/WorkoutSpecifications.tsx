import React from "react";

function WorkoutSpecifications() {
  return (
    <ul className="flex flex-col bg-gray-800 rounded-2xl">
      <li className="specification-item">
        <span className="specification-label">Equipment</span>
        <span className="text-gray-200">Burbell, Bench</span>
      </li>
      <li className="specification-item">
        <span className="specification-label">Difficulty</span>
        <span className="text-gray-200">Beginner</span>
      </li>
      <li className="specification-item">
        <span className="specification-label">Sets</span>
        <span className="text-gray-200">4</span>
      </li>
      <li className="specification-item">
        <span className="specification-label">Reps</span>
        <span className="text-gray-200">6-8</span>
      </li>
      <li className="specification-item">
        <span className="specification-label">Duration</span>
        <span className="text-gray-200">25 min</span>
      </li>
      <li className="specification-item">
        <span className="specification-label">Calories</span>
        <span className="text-gray-200">180 kcal</span>
      </li>
      <li className="specification-item">
        <span className="specification-label">Rating</span>
        <span className="text-gray-200">4.9</span>
      </li>
    </ul>
  );
}

export default WorkoutSpecifications;
