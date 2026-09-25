import { Workout } from "@/types";

export async function getWorkouts(): Promise<Workout[]> {
  try {
    const res = await fetch(process.env.NEXTJS_PUBLIC_API_URL!);
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const workoutsArr = await res.json();
    return workoutsArr;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getWorkout(id: string): Promise<Workout | null> {
  try {
    const res = await fetch(`${process.env.NEXTJS_PUBLIC_API_URL}/${id}`);
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const workout = await res.json();
    return workout;
  } catch (err) {
    console.log(err);
    return null;
  }
}
