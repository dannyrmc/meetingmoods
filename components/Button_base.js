import styles from '../styles/Home.module.css'
import Image from 'next/image';

const Button = (props) => {

 return (
  <button className= {`${styles.button} ${styles.button_text}`} onClick= {props.button_action}>
    
      <Image 
        src="/icons/volume_up.svg"
        height={28}
        width={28}
      />

    {props.button_text}</button>
 )
}
 
export default Button;