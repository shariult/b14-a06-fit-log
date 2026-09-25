"use client";

import React, { createContext, useState } from "react";
import { type Workout } from "@/types";

type WorkoutContextT = {
  plans: Workout[];
  saved: Workout[];
  addPlan: (workout: Workout) => void;
  removePlan: (wId: number) => void;
  addSaved: (workout: Workout) => void;
  removeSaved: (wId: number) => void;
};

export const WorkoutContext = createContext<WorkoutContextT>({
  plans: [],
  saved: [],
  addPlan: function () {},
  removePlan: function () {},
  addSaved: function () {},
  removeSaved: function () {},
});

function WorkoutProvider({ children }: { children: React.ReactNode }) {
  const [plans, setPlans] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  function addPlan(workout: Workout) {
    setPlans([...plans, workout]);
  }
  function removePlan(wId: number) {
    const updatedData = plans.filter((item) => item.id !== wId);
    setPlans(updatedData);
  }

  function addSaved(workout: Workout) {
    setSaved([...saved, workout]);
  }
  function removeSaved(wId: number) {
    const updatedData = saved.filter((item) => item.id !== wId);
    setSaved(updatedData);
  }

  const data = {
    plans,
    saved,
    addPlan,
    removePlan,
    addSaved,
    removeSaved,
  };

  return (
    <WorkoutContext.Provider value={data}>{children}</WorkoutContext.Provider>
  );
}
export default WorkoutProvider;
