//Base component for buttons

import styles from '../styles/Home.module.css';
import IconMaterial from './icon-material';
import IconSVG from './icon-svg';

const Button = (props) => {

 return (
  <button className= {`${styles.button} ${styles.button_text}`} onClick= {props.button_action}>
    
    {/* <IconMaterial icon_name={props.icon_name}/> */}

    <IconSVG/>

    {props.button_text}

  </button>
 )
}
 
export default Button;