import React from "react";
import Image from "next/image";
import { Workout } from "@/types";

import Tag from "@/components/ui/Tag";
import WorkoutInstructionsList from "@/components/workouts/WorkoutInstructionsList";
import WorkoutSpecifications from "@/components/workouts/WorkoutSpecifications";
import WorkoutDetailAction from "@/components/workouts/WorkoutDetailAction";

type SectionWorkoutDetailsProps = {
  workout: Workout;
};

function SectionWorkoutDetails(props: SectionWorkoutDetailsProps) {
  return (
    <section>
      <div className="container-center py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 mb:gap-14">
        {/* left */}
        <div className="overflow-hidden">
          <Image
            src={props.workout.image}
            alt={props.workout.name}
            width={588}
            height={773}
            className="w-full rounded-2xl"
          />
        </div>

        {/* right */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="heading-2">{props.workout.name}</h2>
            <p className="helper-text">{props.workout.description}</p>
          </div>

          <div className="flex gap-4">
            {props.workout.muscleGroups.map((item, idx) => (
              <Tag key={idx}>{item}</Tag>
            ))}
          </div>

          <WorkoutSpecifications workout={props.workout} />

          <WorkoutInstructionsList workout={props.workout} />

          {/* action */}
          <WorkoutDetailAction workout={props.workout} />
        </div>
      </div>
    </section>
  );
}

export default SectionWorkoutDetails;
