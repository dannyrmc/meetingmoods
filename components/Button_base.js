import styles from '../styles/Home.module.css'
import Image from 'next/image'; 
import Icon from './Icon';

const Button = (props) => {

 return (
  <button className= {`${styles.button} ${styles.button_text}`} onClick= {props.button_action}>
    
    <Icon icon_name={props.icon_name}/>

    {props.button_text}</button>
 )
}
 
export default Button;