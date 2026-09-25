import React from "react";
import Image from "next/image";
import Link from "next/link";

import Tag from "@/components/ui/Tag";
import TextWithIcon from "@/components/ui/TextWithIcon";

import { IconClock } from "@/components/ui/Icons";
import { IconCalorie } from "@/components/ui/Icons";
import { IconRating } from "@/components/ui/Icons";
import { type Workout } from "@/types";

type WorkoutCardProps = {
  workout: Workout;
  className?: string;
};

function WorkoutCard({ className, ...props }: WorkoutCardProps) {
  return (
    <div className={`bg-gray-900/80 rounded-xl ${className}`}>
      <Link href={`workouts/${props.workout.id}`}>
        {/* image */}
        <div className="rounded-t-xl overflow-hidden">
          <Image
            src={props.workout.image}
            alt={props.workout.name}
            width={392}
            height={192}
            className="w-full"
          />
        </div>

        {/* content-box */}
        <div className="p-6 flex flex-col gap-6">
          <div className="flex gap-3">
            {props.workout.muscleGroups.map((item, idx) => (
              <Tag key={idx}>{item}</Tag>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold uppercase font-oswald">
              {props.workout.name}
            </h3>
            <p className="text-gray-500 text-sm">{props.workout.equipment}</p>
          </div>

          <div className="flex gap-5 border-t border-t-gray-800 pt-4">
            <TextWithIcon
              iconEl={<IconClock className="w-4 h-4" />}
              label={`${props.workout.duration} min`}
            />
            <TextWithIcon
              iconEl={<IconCalorie className="w-4 h-4" />}
              label={`${props.workout.caloriesBurned} kcal`}
            />
            <TextWithIcon
              iconEl={<IconRating className="w-4 h-4" />}
              label={`${props.workout.rating}`}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default WorkoutCard;
