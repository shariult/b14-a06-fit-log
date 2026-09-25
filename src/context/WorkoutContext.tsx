"use client";

import React, { createContext, useEffect, useState } from "react";
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

  useEffect(function () {
    const localPlans = localStorage.getItem("plans");
    const localSaved = localStorage.getItem("saved");

    if (localPlans) {
      // eslint-disable-next-line
      setPlans(JSON.parse(localPlans));
    }
    if (localSaved) {
      setSaved(JSON.parse(localSaved));
    }
  }, []);

  function addPlan(workout: Workout) {
    if (plans.length >= 5) {
      toast.error("Today's plan is full!");
      return;
    }

    const doesExist = plans.find((item) => item.id === workout.id);
    if (!doesExist) {
      const updatedData = [...plans, workout];
      setPlans(updatedData);

      localStorage.setItem("plans", JSON.stringify(updatedData));
      toast.success("Workout added to Today's plan!");
    } else {
      toast.error("Workout already exists!");
    }
  }
  function removePlan(wId: number) {
    const updatedData = plans.filter((item) => item.id !== wId);
    setPlans(updatedData);

    localStorage.setItem("plans", JSON.stringify(updatedData));
  }

  function addSaved(workout: Workout) {
    if (saved.length >= 5) {
      toast.error("Today's plan is full!");
      return;
    }

    const doesExist = saved.find((item) => item.id === workout.id);
    if (!doesExist) {
      const updatedData = [...saved, workout];
      setSaved(updatedData);

      localStorage.setItem("saved", JSON.stringify(updatedData));
      toast.success("Workout saved for later!");
    } else {
      toast.error("Workout already exists!");
    }
  }
  function removeSaved(wId: number) {
    const updatedData = saved.filter((item) => item.id !== wId);
    setSaved(updatedData);
    localStorage.setItem("saved", JSON.stringify(updatedData));
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
