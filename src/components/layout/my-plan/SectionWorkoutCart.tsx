import React from "react";
import { Workout } from "@/types";
import WorkoutCartEmpty from "@/components/workouts/WorkoutCartEmpty";
import WorkoutCartItem from "@/components/workouts/WorkoutCartItem";

type SortOptions = "duration" | "calories" | "rating";

type SectionStatProps = {
  workoutArr: Workout[];
  activeTab: "plans" | "saved";
  sortOption: SortOptions;
  onSortChange: (sortOption: SortOptions) => void;
  onToggleTab: (tab: "plans" | "saved") => void;
};

function SectionWorkoutCart(props: SectionStatProps) {
  let activeClasses = "text-gray-300 font-bold bg-gray-800/80";

  return (
    <section className="py-12 flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-4 mb-4 md:justify-between md:items-center">
        {/******* filter *******/}
        <div className="flex bg-gray-900/80 p-1 rounded-xl text-gray-500">
          <button
            className={`grow md:grow-0 px-4 py-1.5 rounded-lg text-xs cursor-pointer ${props.activeTab === "plans" ? activeClasses : ""}`}
            onClick={() => props.onToggleTab("plans")}
          >
            Today&apos;s Plan
          </button>

          <button
            className={`grow md:grow-0 px-4 py-1.5 rounded-lg text-xs cursor-pointer ${props.activeTab === "saved" ? activeClasses : ""}`}
            onClick={() => props.onToggleTab("saved")}
          >
            Saved
          </button>
        </div>

        {/******* sort *******/}
        <div className="flex items-center gap-2">
          <label
            htmlFor="sort"
            className="text-gray-500 text-sm whitespace-nowrap"
          >
            Sort by
          </label>
          <select
            name="sort"
            id="sort"
            className="grow md:grow-0 px-3 py-2 border border-gray-700 rounded-xl text-sm bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
            onChange={(e) => props.onSortChange(e.target.value as SortOptions)}
            value={props.sortOption}
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {props.workoutArr.length > 0 && (
        <div className="flex flex-col gap-6">
          {props.workoutArr.map((item) => (
            <WorkoutCartItem
              key={item.id}
              workout={item}
              activeTab={props.activeTab}
            />
          ))}
        </div>
      )}

      {props.workoutArr.length === 0 && <WorkoutCartEmpty />}
    </section>
  );
}

export default SectionWorkoutCart;
