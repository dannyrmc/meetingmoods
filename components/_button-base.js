//Base component for buttons

import styles from '../styles/Home.module.css';
import IconSVG from './icon-svg';
import Emoji from './emoji.js';
import GoatEmoji from '../public/icons/emoji-goat.svg'

const Button = (props) => {

  /*
  document.addEventListener("touchstart", function() {},false);
  //Does not work
  */

 return (
  <button className= {`${styles.button} ${props.button_background_color}`} onClick= {props.button_action}>
    
    <Emoji 
    className = {`${props.emoji_background_color} ${props.emoji_padding} flex flex-row items-center justify-center p-[12px] w-16 h-16 border-[3px] border-gray-900`}
    emoji_name = {props.emoji_name}
    />

    <span className={styles.button_text}>
    {props.button_text}
    </span>
    <IconSVG/>

  </button>
 )
}
 
export default Button;