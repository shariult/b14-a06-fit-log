import React from "react";
import Image from "next/image";
import TextWithIcon from "../ui/TextWithIcon";
import {
  IconCalorie,
  IconClock,
  IconOk,
  IconRating,
  IconXMark,
} from "../ui/Icons";
import Button from "../ui/Button";
import { Workout } from "@/types";

type WorkoutCartItemProps = {
  workout: Workout;
};

function WorkoutCartItem(props: WorkoutCartItemProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-800/80 p-4 rounded-xl gap-4">
      <Image
        src={props.workout.image}
        alt="card image"
        width={256}
        height={256}
        className="w-full lg:w-32 rounded-xl"
      />

      {/* content */}
      <div className="lg:mr-auto text-center lg:text-left">
        <h3 className="font-bold font-oswald text-xl mb-2">
          {props.workout.name}
        </h3>
        <p className="text-gray-500 text-sm">{props.workout.equipment}</p>

        <div className="flex gap-5 pt-4 text-xs">
          <TextWithIcon
            iconEl={<IconClock className="w-4 h-4 text-pr" />}
            label={`${props.workout.duration} min`}
          />
          <TextWithIcon
            iconEl={<IconCalorie className="w-4 h-4 text-pr" />}
            label={`${props.workout.caloriesBurned} kcal`}
          />
          <TextWithIcon
            iconEl={<IconRating className="w-4 h-4 text-pr" />}
            label={`${props.workout.rating}`}
          />
        </div>
      </div>

      {/* actions */}
      <div className="flex gap-2 pr-6">
        <Button el="btn" variant="border-rounded" size="sm">
          View Details
        </Button>
        <Button el="btn" variant="primary-rounded" size="sm">
          <div className="flex gap-2">
            <IconOk />
            <span>Mark as Done</span>
          </div>
        </Button>
        <button className="group flex justify-center items-center cursor-pointer hover:bg-red-400 w-8 h-8 rounded transition">
          <IconXMark className="w-6 h-6 text-gray-500 group-hover:text-pd" />
        </button>
      </div>
    </div>
  );
}

export default WorkoutCartItem;
