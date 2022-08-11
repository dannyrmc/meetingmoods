import useSound from 'use-sound';
import grunt from '../public/audio/grunt_yay.mp3'
import Button from './Button_base';

const GruntButton = () => {
  const [play] = useSound(grunt);

  return <Button 
    button_action= {play}
    button_text= "Party Yay"
  />
};

export default GruntButton;