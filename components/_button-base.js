//Base component for buttons

import styles from "../styles/Home.module.css";
import IconSVG from "./icon-svg";
import Emoji from "./emoji.js";

const Button = (props) => {
  /*
  document.addEventListener("touchstart", function() {},false);
  //Does not work
  */

  return (
    <button
      className={`${props.button_background_color} flex flex-row items-center self-stretch w-[332px] h-[86px] gap-4 border-gray-900 border-[3px] border-solid pl-2 pr-5 py-2 shadow-[8px_8px_0px] shadow-gray-900 cursor-pointer active:translate-y-1 transition-all duration-[0.09s] ease-[cubic-bezier(0.45,1.45,0.8,1)]`}
      onClick={props.button_action}
    >
      <Emoji
        className={`${props.emoji_background_color} ${props.emoji_padding} flex flex-row items-center justify-center p-[12px] w-16 h-16 border-[3px] border-gray-900`}
        emoji_name={props.emoji_name}
      />

      <span className='font-sans text-gray-900 text-[22px] leading-[110%] select-none grow text-left antialiased'>{props.button_text}</span>
      <IconSVG />
    </button>
  );
};

export default Button;
