import React, { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import bannerImg from "@/assets/img/banner.png";

type HeroProps = {
  className?: string;
} & ComponentPropsWithoutRef<"header">;

function Hero(props: HeroProps) {
  const { className, ...otherProps } = props;

  return (
    <header className={`container-center ${className}`} {...otherProps}>
      <div className="bg-gray-900/80 rounded-xl px-6 py-14 md:px-14 md:py-14 flex flex-col items-center md:flex-row md:justify-between gap-12 md:gap-4">
        {/* left side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start gap-5">
          <p className="text-xs text-pr font-medium tracking-wider uppercase">
            Workout Library
          </p>
          <h1 className="font-oswald font-bold text-4xl lg:text-6xl uppercase max-w-[20ch]">
            Train with intent. Log every set.
          </h1>
          <p className="text-sm lg:text-base text-gray-500 max-w-[60ch]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <Button
            el="link"
            variant="primary"
            href="#library"
            className="uppercase"
          >
            Browser Workouts
          </Button>
        </div>

        {/* right side */}
        <div>
          <Image src={bannerImg} alt="human anatomy" width="348" />
        </div>
      </div>
    </header>
  );
}

export default Hero;
