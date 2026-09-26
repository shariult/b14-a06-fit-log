"use client";

import React, { useContext, useState } from "react";
import SectionStat from "@/components/layout/my-plan/SectionStat";
import SectionWorkoutCart from "@/components/layout/my-plan/SectionWorkoutCart";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Workout } from "@/types";
import Loading from "@/components/ui/Loading";

type SortOptions = "duration" | "calories" | "rating";

function MyPlanIndex() {
  let data: Workout[] = [];

  const workoutData = useContext(WorkoutContext);
  const [sortOption, setSortOption] = useState<SortOptions>("duration");
  const [activeTab, setActiveTab] = useState<"plans" | "saved">("plans");

  function onToggleTab(tab: "plans" | "saved") {
    setActiveTab(tab);
  }
  if (activeTab === "plans") {
    data = workoutData.plans;
  }
  if (activeTab === "saved") {
    data = workoutData.saved;
  }

  // sort change handler //
  function onSortChange(sortOption: SortOptions) {
    setSortOption(sortOption);
  }
  if (sortOption === "duration") {
    data = [...data].sort((a, b) => a.duration - b.duration);
  }
  if (sortOption === "calories") {
    data = [...data].sort((a, b) => a.caloriesBurned - b.caloriesBurned);
  }
  if (sortOption === "rating") {
    data = [...data].sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
      <div className="container-center py-12 flex flex-col gap-6">
        <header>
          <h2 className="heading-2">My Plan</h2>
          <p className="subtitle">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </header>

        <SectionStat workoutArr={data} />

        {workoutData.isLoading && <Loading loadingText="Loading workouts..." />}

        {!workoutData.isLoading && (
          <SectionWorkoutCart
            workoutArr={data}
            activeTab={activeTab}
            sortOption={sortOption}
            onSortChange={onSortChange}
            onToggleTab={onToggleTab}
          />
        )}
      </div>
    </>
  );
}

export default MyPlanIndex;
