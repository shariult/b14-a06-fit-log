import { Workout } from "@/types";
import React from "react";
type WorkoutSpecificationsProps = {
  workout: Workout;
};

function WorkoutSpecifications(props: WorkoutSpecificationsProps) {
  return (
    <ul className="flex flex-col bg-gray-800 rounded-2xl">
      <li className="specification-item">
        <span className="specification-label">Equipment</span>
        <span className="text-gray-200">{props.workout.equipment}</span>
      </li>
      <li className="specification-item">
        <span className="specification-label">Difficulty</span>
        <span className="text-gray-200">{props.workout.difficulty}</span>
      </li>
      <li className="specification-item">
        <span className="specification-label">Sets</span>
        <span className="text-gray-200">{props.workout.sets}</span>
      </li>
      <li className="specification-item">
        <span className="specification-label">Reps</span>
        <span className="text-gray-200">{props.workout.reps}</span>
      </li>
      <li className="specification-item">
        <span className="specification-label">Duration</span>
        <span className="text-gray-200">{props.workout.duration} min</span>
      </li>
      <li className="specification-item">
        <span className="specification-label">Calories</span>
        <span className="text-gray-200">
          {props.workout.caloriesBurned} kcal
        </span>
      </li>
      <li className="specification-item">
        <span className="specification-label">Rating</span>
        <span className="text-gray-200">{props.workout.rating}</span>
      </li>
    </ul>
  );
}

export default WorkoutSpecifications;
