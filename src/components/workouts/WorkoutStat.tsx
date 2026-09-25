import React, { ComponentPropsWithoutRef } from "react";

type WorkoutStatProps = {
  label: string;
  stat: number;
  className?: string;
  isPrimary?: boolean;
} & ComponentPropsWithoutRef<"div">;

function WorkoutStat(props: WorkoutStatProps) {
  const { label, stat, isPrimary = false, className, ...otherProps } = props;

  return (
    <div
      className={`flex flex-col gap-2 not-last:border-r not-last:border-r-gray-700 grow px-6 ${className}`}
      {...otherProps}
    >
      <span className="text-xs text-gray-500 capitalize">{label}</span>
      <span
        className={`text-3xl font-bold font-oswald ${isPrimary ? "text-pr" : ""}`}
      >
        {stat}
      </span>
    </div>
  );
}

export default WorkoutStat;
