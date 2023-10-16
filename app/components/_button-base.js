//Base component for buttons

"use client";

import IconSVG from "./icon-svg";
import Emoji from "./emoji.js";
import useSound from "use-sound";

const Button = (props) => {
  /*
  document.addEventListener("touchstart", function() {},false);
  //Does not work
  */

  const [play] = useSound(props.sound_file, {
    interrupt: false, //Allows for multiple onclicks to overlap
    html5: true, //Forces full load of sound

    onplay: () => {
      console.log(`${props.sound_name} sound started!`);
    },

    onend: () => {
      console.log(`${props.sound_name} sound ended!`);
    },
  });

  const handleClick = () => {
    play();
  };

  return (
    <button
      className={`${props.button_background_color} flex h-[86px] w-full cursor-pointer flex-row items-center gap-4 self-stretch border-[3px] border-solid border-gray-950 py-2 pl-2 pr-5 shadow-[8px_8px_0px] transition-all duration-[0.2s] ease-[cubic-bezier(0.45,1.45,0.8,1)] active:translate-x-1 active:translate-y-1 active:shadow-[0px_0px_0px] sm:w-[330px]`}
      onClick={handleClick}
    >
      <Emoji
        className={`${props.emoji_background_color} ${props.emoji_padding} flex h-16 w-16 flex-row items-center justify-center border-[3px] border-gray-950 p-[12px]`}
        emoji_name={props.emoji_name}
      />

      <span className="grow select-none text-left font-sans text-[22px] font-bold leading-[110%] text-gray-950 antialiased">
        {props.button_text}
      </span>
      <IconSVG />
    </button>
  );
};

export default Button;
