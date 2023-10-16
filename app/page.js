//Homepage for Meeting Moods
//Created by Daniel McNamara | 2023

import GoatButton from "./components/button-goat-scream";
import PartyButton from "./components/button-party-yay";
import Footer from "./components/footer";
import { siteConfig } from "../config/site";

export default function Home() {
  return (
    <main className="flex min-h-full flex-auto flex-col">
      <div className="mx-4 flex min-h-full flex-1 flex-col items-center justify-center gap-10 sm:mt-[-32px] sm:gap-8">
        <h1
          className={`select-none text-center	font-sans text-[32px] font-bold leading-[110%] tracking-[-0.01em] text-gray-950 antialiased`}
        >
          <span className="bg-emerald-200">Cheer</span>
          {" & "}
          <span className="bg-amber-200">Delight</span>
          <br />
          for your next meeting
        </h1>
        <div className="mr-1 box-content flex w-full flex-col flex-wrap items-center justify-center gap-[28px] sm:max-w-[800px] sm:flex-row sm:gap-8">
          <PartyButton />
          <GoatButton />
        </div>
      </div>
      <Footer />
    </main>
  );
}
