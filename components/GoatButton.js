import useSound from 'use-sound';
import goat from '../public/audio/goat_scream.mp3'
import Button from './Button_base';

const GoatButton = () => {
  const [play] = useSound(goat);
  
  return <Button 
    button_action= {play}
    icon_name= "volume_up" //fonts.google.com/icons?icon.style=Rounded 
    button_text= "Goat Scream"
  />
};

export default GoatButton;