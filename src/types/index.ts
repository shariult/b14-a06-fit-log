export type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: (
    | "Chest"
    | "Arms"
    | "Back"
    | "Legs"
    | "Core"
    | "Shoulders"
    | "Full Body"
  )[];
  equipment: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};
