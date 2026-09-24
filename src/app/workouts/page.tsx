import React from "react";
import { redirect } from "next/navigation";

function WorkoutIndex() {
  redirect("/");
  return <div>WorkoutIndex</div>;
}

export default WorkoutIndex;
