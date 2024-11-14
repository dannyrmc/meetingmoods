//Homepage for Meeting Moods
//Created by Daniel McNamara | 2023

import Buttons from "@/app/components/buttons";

export default function Home() {
  return (
    <main className="flex min-h-full flex-auto flex-col">
      <div className="mx-4 mb-16 flex flex-1 flex-col items-center justify-center gap-10 sm:mx-6 sm:mt-[-32px] sm:gap-8 md:mb-[72px]">
        <div className="flex select-none flex-col text-center	font-sans text-[32px] font-bold leading-[110%] tracking-[-0.01em] text-gray-950">
          <h1 className="whitespace-nowrap">
            <span className="bg-emerald-200 px-1">Cheer</span>
            <span> & </span>
            <span className="bg-amber-200 px-1">Delight</span>
          </h1>
          <h1>for your next meeting</h1>
        </div>
        <Buttons />
      </div>
    </main>
  );
}
