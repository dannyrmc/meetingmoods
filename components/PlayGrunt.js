import useSound from 'use-sound';
import grunt from '../public/audio/grunt_yay.mp3'
import styles from '../styles/Home.module.css'

const GruntButton = () => {
  const [play] = useSound(grunt);

  return <button className={styles.button} onClick={play}>Party Yay</button>;
};

export default GruntButton;