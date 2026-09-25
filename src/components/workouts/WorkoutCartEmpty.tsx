import React from "react";
import Button from "../ui/Button";

function WorkoutCartEmpty() {
  return (
    <div className="py-16 flex flex-col items-center justify-center border border-dashed border-gray-800 rounded-xl">
      <h3 className="text-xl font-bold uppercase font-oswald mb-1">
        Nothing here
      </h3>
      <p className="text-xs text-gray-500 mb-4">
        Browse the library and add a lift to get today moving.
      </p>
      <Button el="link" variant="primary-rounded" href="/">
        Go to workouts
      </Button>
    </div>
  );
}

export default WorkoutCartEmpty;
