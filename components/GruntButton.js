import useSound from 'use-sound';
import grunt from '../public/audio/grunt_yay.mp3'
import Button from './Button_base';

const GruntButton = () => {
 

  const [play] = useSound(grunt, {

    // `interrupt` ensures that if the sound starts again before it's
    // ended, it will truncate it. Otherwise, the sound can overlap.
    
    // interrupt: true,
    html5: true, 

    onend: () => {
      console.log('Sound ended!');
    },
  });

  const handleClick = () => {
    play();
  };

  return <Button 
    button_action= {handleClick}
    icon_name= "volume_up" //fonts.google.com/icons?icon.style=Rounded
    button_text= "Party Yay"
  />
};

export default GruntButton;