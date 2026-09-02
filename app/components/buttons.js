// Main Buttons Component

"use client";

import { useEffect, useRef, useState } from "react";
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
  const poolRefs = useRef([]);
  const lastPointerRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const getPool = (index) =>
    (poolRefs.current[index] ??= [audioRefs.current[index]]);

  // iOS ignores preload until the page has been touched, so the first tap would
  // otherwise pay for the fetch and decode. Warm every clip on the first touch
  // anywhere on the page, whenever that happens to be. load() resets an element
  // and aborts whatever it was doing, so only ever call it on a clip that is
  // both idle and still empty - the first touch may be the button itself, which
  // has already started playing by the time this runs.
  useEffect(() => {
    const warm = () =>
      sounds.forEach((_, index) =>
        getPool(index).forEach((clip) => {
          if (clip.paused && clip.readyState === 0) clip.load();
        })
      );

    document.addEventListener("pointerdown", warm, { once: true });
    document.addEventListener("keydown", warm, { once: true });

    return () => {
      document.removeEventListener("pointerdown", warm);
      document.removeEventListener("keydown", warm);
    };
  }, []);

  // Playback goes through plain <audio> elements on purpose: iOS routes Web
  // Audio to the ringer channel, so it is silenced by the hardware mute switch,
  // while media elements are not. Each clip keeps a pool of elements so taps
  // stack up and echo rather than cutting each other off; the pool only grows
  // to the most copies ever playing at once, since idle ones get reused.
  const handlePlay = (index) => {
    setActiveIndex(index);
    setTimeout(() => setActiveIndex(null), 300);

    const audio = audioRefs.current[index];
    if (!audio) return;

    const pool = getPool(index);
    let clip = pool.find((item) => item.paused || item.ended);

    if (!clip) {
      clip = audio.cloneNode(true);
      pool.push(clip);
    }

    // Only seek an element that has actually played; Safari can throw when
    // seeking one that has not loaded any data yet.
    if (clip.currentTime) clip.currentTime = 0;

    clip.play().catch(() => {});

    // Keep one loaded spare behind the clips in flight, so the next tap never
    // waits on a cold clone.
    if (!pool.some((item) => item !== clip && (item.paused || item.ended))) {
      const spare = audio.cloneNode(true);
      spare.load();
      pool.push(spare);
    }
  };

  // Fire on finger-down rather than waiting for the click that follows the
  // release; the click handler stays for keyboard activation.
  const handlePointerDown = (index) => {
    lastPointerRef.current = Date.now();
    handlePlay(index);
  };

  const handleClick = (index) => {
    if (Date.now() - lastPointerRef.current < 700) return;
    handlePlay(index);
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
            onPointerDown={() => handlePointerDown(index)}
            onClick={() => handleClick(index)}
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
