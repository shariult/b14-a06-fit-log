import React from "react";

type WorkoutShowProps = {
  children: React.ReactNode;
  params: Promise<{ wId: string }>;
};

async function WorkoutShow(props: WorkoutShowProps) {
  const { wId } = await props.params;
  console.log(wId);

  return <div>WorkoutShow</div>;
}

export default WorkoutShow;
