//Base component for buttons

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
      className={`${props.button_background_color} flex flex-row items-center self-stretch w-[332px] h-[86px] gap-4 border-gray-900 border-[3px] border-solid pl-2 pr-5 py-2 shadow-[8px_8px_0px] shadow-gray-900 cursor-pointer active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px] transition-all duration-[0.2s] ease-[cubic-bezier(0.45,1.45,0.8,1)]`}
      onClick={handleClick}
    >
      <Emoji
        className={`${props.emoji_background_color} ${props.emoji_padding} flex flex-row items-center justify-center p-[12px] w-16 h-16 border-[3px] border-gray-900`}
        emoji_name={props.emoji_name}
      />

      <span className='font-sans font-bold text-gray-900 text-[22px] leading-[110%] select-none grow text-left antialiased'>{props.button_text}</span>
      <IconSVG />
    </button>
  );
};

export default Button;
