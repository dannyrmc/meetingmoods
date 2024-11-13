//Button Component 

"use client";

import IconSVG from "@/components/icon-svg";
import Emoji from "@/components/emoji";
import getSounds from "@/data/sounds";

const Buttons = () => {
  const sounds = getSounds();

  return (
    <div className="mr-1 box-content flex w-full flex-col flex-wrap items-center justify-center gap-[28px] sm:max-w-[800px] sm:flex-row sm:gap-8">
      {sounds.map(({ id, ...props }) => (
        <button
          key={id}
          className={`${props.button_bg_color} flex h-[86px] w-full cursor-pointer flex-row items-center gap-4 self-stretch border-[3px] border-solid border-gray-950 py-2 pl-2 pr-5 shadow-[8px_8px_0px] transition-all duration-[0.2s] ease-[cubic-bezier(0.45,1.45,0.8,1)] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px] sm:w-[330px]`}
          onClick={props.handleClick}
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
      ))}
    </div>
  );
};

export default Buttons;
