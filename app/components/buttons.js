// Main Buttons Component

"use client";

import { useRef, useState } from "react";
import IconSVG from "@/components/icon-svg";
import Emoji from "@/components/emoji";

const sounds = [
  {
    id: 1,
    label: "Party Yay",
    emoji_name: "party",
    button_bg_color: "bg-blue-200",
    emoji_bg_color: "bg-emerald-200",
    sound_file: "/audio/party-yay.mp3",
  },
  {
    id: 2,
    label: "Goat Scream",
    emoji_name: "goat",
    button_bg_color: "bg-amber-200",
    emoji_bg_color: "bg-rose-200",
    sound_file: "/audio/goat-scream.mp3",
  },
];

const Buttons = () => {
  const audioRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePlay = (index) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    const clone = audio.cloneNode(true);
    setActiveIndex(index);
    clone.currentTime = 0;
    clone.play();

    setTimeout(() => setActiveIndex(null), 300);
  };

  return (
    <div className="mr-1 box-content flex w-full max-w-[400px] flex-col flex-wrap items-center justify-center gap-[28px] sm:gap-8 md:max-w-[720px] md:flex-row">
      {sounds.map((sound, index) => (
        <div key={sound.id} className="w-full md:flex-1">
          <button
            className={`${
              sound.button_bg_color
            } flex h-[86px] w-full flex-1 cursor-pointer flex-row items-center gap-4 self-stretch border-3 border-solid border-gray-950 py-2 pl-2 pr-5 shadow-custom ${
              activeIndex === index ? "animate-moving" : ""
            }`}
            onClick={() => handlePlay(index)}
          >
            <div
              className={`${sound.emoji_bg_color} flex size-16 flex-row items-center justify-center border-[3px] border-gray-950`}
            >
              <Emoji className="size-10" emoji_name={sound.emoji_name} />
            </div>
            <span className="grow select-none text-left font-sans text-[22px] font-bold leading-[110%] text-gray-950">
              {sound.label}
            </span>
            <IconSVG />
          </button>
          <audio
            ref={(element) => {
              audioRefs.current[index] = element;
            }}
            src={sound.sound_file}
            preload="auto"
          />
        </div>
      ))}
    </div>
  );
};

export default Buttons;
