// Main Buttons Component

"use client";

import { useState } from "react";
import IconSVG from "@/components/icon-svg";
import Emoji from "@/components/emoji";
import getSounds from "@/data/sounds";

const Buttons = () => {
  const sounds = getSounds();

  return (
    <div className="mr-1 box-content flex w-full max-w-[400px] flex-col flex-wrap items-center justify-center gap-[28px] sm:gap-8 md:max-w-[720px] md:flex-row">
      {sounds.map(({ id, handleSound, ...props }) => {
        const [isActive, setIsActive] = useState(false);

        const handleClick = () => {
          setIsActive(true);
          handleSound();

          // Reset isActive after the animation duration (0.3s)
          setTimeout(() => setIsActive(false), 300);
        };

        return (
          <button
            key={id}
            className={`${
              props.button_bg_color
            } flex h-[86px] w-full flex-1 cursor-pointer flex-row items-center gap-4 self-stretch border-3 border-solid border-gray-950 py-2 pl-2 pr-5 shadow-custom ${
              isActive ? "animate-moving" : ""
            }`}
            onClick={handleClick}
          >
            <div
              className={`${props.emoji_bg_color} flex size-16 flex-row items-center justify-center border-[3px] border-gray-950`}
            >
              <Emoji className="size-10" emoji_name={props.emoji_name} />
            </div>
            <span className="grow select-none text-left font-sans text-[22px] font-bold leading-[110%] text-gray-950">
              {props.label}
            </span>
            <IconSVG />
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
