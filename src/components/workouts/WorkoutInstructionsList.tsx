import React from "react";

function WorkoutInstructionsList() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg uppercase font-bold">Instructions</h3>
      <ol className="list-decimal list-inside flex flex-col gap-2 text-gray-300 text-sm">
        <li>Lie on the bench with eyes under the bar and feet planted.</li>
        <li>Unrack with locked elbows and lower the bar to mid-chest.</li>
        <li>Press up in a slight arc until elbows lock without bouncing.</li>
      </ol>
    </div>
  );
}

export default WorkoutInstructionsList;
