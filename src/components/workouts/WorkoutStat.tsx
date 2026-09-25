import React, { ComponentPropsWithoutRef } from "react";

type WorkoutStatProps = {
  label: string;
  stat: number;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function WorkoutStat(props: WorkoutStatProps) {
  const { label, stat, className, ...otherProps } = props;

  return (
    <div
      className={`flex flex-col gap-2 not-last:border-r not-last:border-r-gray-700 grow px-6 ${className}`}
      {...otherProps}
    >
      <span className="text-xs text-gray-500 capitalize">{label}</span>
      <span className="text-3xl font-bold font-oswald">{stat}</span>
    </div>
  );
}

export default WorkoutStat;
