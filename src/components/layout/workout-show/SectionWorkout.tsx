import React from "react";
import Image from "next/image";
import Tag from "@/components/ui/Tag";
import WorkoutInstructionsList from "@/components/workouts/WorkoutInstructionsList";
import WorkoutSpecifications from "@/components/workouts/WorkoutSpecifications";
import Button from "@/components/ui/Button";
import { IconBookmark } from "@/components/ui/Icons";
import { IconCalendar } from "@/components/ui/Icons";

function SectionWorkoutDetails() {
  return (
    <section>
      <div className="container-center py-12 flex flex-col md:flex-row gap-8 mb:gap-14">
        {/* left */}
        <div className="overflow-hidden">
          <Image
            src="https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740"
            alt="person working out"
            width={588}
            height={773}
            className="w-full rounded-2xl"
          />
        </div>

        {/* right */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="heading-2">BARBELL BENCH PRESS</h2>
            <p className="heading-2-sub">
              A compound press that builds chest thickness, triceps, and
              pressing power from a stable bench.
            </p>
          </div>

          <div className="flex gap-4">
            <Tag>Chest</Tag>
            <Tag>Arms</Tag>
          </div>

          <WorkoutSpecifications />

          <WorkoutInstructionsList />

          {/* action */}
          <div className="flex flex-wrap gap-4">
            <Button el="btn" variant="primary">
              <div className="flex justify-center items-center gap-2">
                <IconCalendar />
                <span className="text-sm">Add to today&apos;s plan</span>
              </div>
            </Button>
            <Button el="btn" variant="border">
              <div className="flex justify-center items-center gap-2">
                <IconBookmark />
                <span className="text-sm">Save for later</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionWorkoutDetails;
