"use client";

import React, { createContext, useState } from "react";
import { type Workout } from "@/types";
import { toast } from "react-toastify";

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
    if (plans.length >= 5) {
      toast.error("Today's plan is full!");
      return;
    }

    const doesExist = plans.find((item) => item.id === workout.id);
    if (!doesExist) {
      setPlans([...plans, workout]);
      toast.success("Workout added to Today's plan!");
    } else {
      toast.error("Workout already exists!");
    }
  }
  function removePlan(wId: number) {
    const updatedData = plans.filter((item) => item.id !== wId);
    setPlans(updatedData);
  }

  function addSaved(workout: Workout) {
    if (saved.length >= 5) {
      toast.error("Today's plan is full!");
      return;
    }

    const doesExist = saved.find((item) => item.id === workout.id);
    if (!doesExist) {
      setSaved([...saved, workout]);
      toast.success("Workout saved for later!");
    } else {
      toast.error("Workout already exists!");
    }
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
