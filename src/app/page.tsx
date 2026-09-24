import Image from "next/image";
import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import bannerImg from "@/assets/img/banner.png";

export default function Home() {
  return (
    <main>
      <Header className="py-12 ">
        <div className="bg-gray-900/80 rounded-xl p-6 md:p-14 flex flex-col items-center md:flex-row gap-4">
          {/* left side */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start gap-5">
            <p className="text-xs text-pr font-medium tracking-wider uppercase">
              Workout Library
            </p>
            <h1 className="font-oswald font-bold text-4xl sm:text-5xl md:text-6xl uppercase max-w-[20ch]">
              Train with intent. Log every set.
            </h1>
            <p className="text-gray-500 max-w-[60ch]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>
            <Button el="link" variant="primary" href="#" className="uppercase">
              Browser Workouts
            </Button>
          </div>

          {/* right side */}
          <div>
            <Image src={bannerImg} alt="human anatomy" width="348" />
          </div>
        </div>
      </Header>
    </main>
  );
}
