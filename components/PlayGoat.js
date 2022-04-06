import useSound from 'use-sound';
import goat from '../public/audio/goat_scream.mp3'
import styles from '../styles/Home.module.css'

const GoatButton = () => {
  const [play] = useSound(goat);
  
  return <button className={styles.button} onClick={play}>Goat Scream</button>;
};

export default GoatButton;