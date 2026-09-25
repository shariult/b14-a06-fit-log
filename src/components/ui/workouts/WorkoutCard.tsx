import React from "react";
import Image from "next/image";
import Tag from "@/components/ui/Tag";
import TextWithIcon from "@/components/ui/TextWithIcon";

import Link from "next/link";
import IconClock from "@/components/icons/IconClock";
import IconCalorie from "@/components/icons/IconCalorie";
import IconRating from "@/components/icons/IconRating";

function WorkoutCard() {
  return (
    <div className="bg-gray-900/80 rounded-xl">
      <Link href="#">
        {/* image */}
        <div className="rounded-t-xl overflow-hidden">
          <Image
            src="https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740"
            alt="workout image"
            width={392}
            height={192}
            className="w-full"
          />
        </div>

        {/* content-box */}
        <div className="p-6 flex flex-col gap-6">
          <div className="flex gap-3">
            <Tag>Shoulder</Tag>
            <Tag>Arms</Tag>
          </div>

          <div>
            <h3 className="text-xl font-bold uppercase">BARBELL BENCH PRESS</h3>
            <p className="text-gray-500 text-sm">Barbell</p>
          </div>

          <div className="flex gap-5 border-t border-t-gray-800 pt-4">
            <TextWithIcon
              iconEl={<IconClock className="w-4 h-4" />}
              label="12 min"
            />
            <TextWithIcon
              iconEl={<IconCalorie className="w-4 h-4" />}
              label="450 kcal"
            />
            <TextWithIcon
              iconEl={<IconRating className="w-4 h-4" />}
              label="4.9"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default WorkoutCard;
