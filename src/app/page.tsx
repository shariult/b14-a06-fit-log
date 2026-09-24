import Hero from "@/components/layout/homepage/Hero";
import SectionWorkout from "@/components/layout/homepage/SectionWorkout";

export default function Home() {
  return (
    <main>
      <Hero className="py-12" />
      <SectionWorkout className="py-12" />
    </main>
  );
}
