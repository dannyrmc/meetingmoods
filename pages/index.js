//Home page for Meeting Moods
//Created by Daniel McNamara | 2023

import styles from "../styles/Home.module.css";
import GoatButton from "../components/button-goat-scream";
import PartyButton from "../components/button-party-yay";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-full flex flex-auto flex-col">
      <div className="min-h-full flex flex-col flex-1 justify-center items-center mx-4">
        <h1
          className={`font-sans font-bold	text-gray-950 text-[32px] leading-[110%] tracking-[-0.01em] text-center select-none antialiased`}
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
      <Footer/>
    </div>
  );
}
