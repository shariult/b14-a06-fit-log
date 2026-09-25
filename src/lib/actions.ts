import { Workout } from "@/types";

export async function getWorkouts(): Promise<Workout[]> {
  try {
    const res = await fetch(process.env.NEXTJS_PUBLIC_API_URL!);
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const workoutsArr: Workout[] = await res.json();
    return workoutsArr;
  } catch (err) {
    console.log(err);
    return [];
  }
}
