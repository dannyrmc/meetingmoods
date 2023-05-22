//Home page for Meeting Moods
//Created by Daniel McNamara | 2023

import styles from "../styles/Home.module.css";
import GoatButton from "../components/button-goat-scream";
import PartyButton from "../components/button-party-yay";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-auto flex-col">
      <div className="mx-4 flex min-h-full flex-1 flex-col items-center justify-center gap-10 sm:gap-8 sm:mt-[-32px]">
        <h1
          className={`select-none text-center	font-sans text-[32px] font-bold leading-[110%] tracking-[-0.01em] text-gray-950 antialiased`}
        >
          <span className="bg-emerald-200">Cheer</span>
          {" & "}
          <span className="bg-amber-200">Delight</span>
          <br />
          for your next meeting
        </h1>
        <div className={styles.grid}>
          <PartyButton />
          <GoatButton />
        </div>
      </div>
      <Footer />
    </div>
  );
}
