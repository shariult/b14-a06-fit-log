"use client";

import React, { useContext } from "react";
import Link, { LinkProps } from "next/link";
import { WorkoutContext } from "@/context/WorkoutContext";

type NavStatProps = {
  label: "plan" | "saved";
  isActive?: boolean;
  className?: string;
} & LinkProps;

function NavStat(props: NavStatProps) {
  const { href, label, isActive = false, className, ...otherProps } = props;
  let classes = `text-xs ${isActive ? "text-gray-300" : "text-gray-400"} flex gap-2 items-center hover:bg-gray-900/80 px-4 py-2 rounded-lg ${className}`;

  const workoutData = useContext(WorkoutContext);

  const stat =
    label === "plan" ? workoutData.plans.length : workoutData.saved.length;

  return (
    <Link href={href} className={classes} {...otherProps}>
      <span className="capitalize">{label}</span>
      <span
        className={`w-6 h-6 flex justify-center items-center rounded-full border border-gray-800 text-xs ${isActive ? "bg-pr text-pd border-0" : ""}`}
      >
        {stat}
      </span>
    </Link>
  );
}

export default NavStat;
