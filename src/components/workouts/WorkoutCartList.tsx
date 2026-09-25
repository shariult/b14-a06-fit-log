import Image from "next/image";
import React from "react";
import WorkoutCartItem from "./WorkoutCartItem";

function WorkoutCartList() {
  return (
    <div className="flex flex-col gap-6">
      <WorkoutCartItem />
      <WorkoutCartItem />
      <WorkoutCartItem />
    </div>
  );
}

export default WorkoutCartList;
