//Button when clicked will play a screaming goat sound

import useSound from 'use-sound';
import goat from '../public/audio/goat-scream.mp3';
import Button from './_button-base';

const GoatButton = () => {

  const [play] = useSound(goat, {

    /*
    interrupt ensures that if the sound starts again before it's
    ended, it will truncate it. Otherwise, the sound can overlap.
    */
    
    //interrupt: true,

    html5: true, 
    
    onplay: () => {
      console.log('Goat sound started!');
    },

    onend: () => {
      console.log('Goat sound ended!');
    },
  });

  const handleClick = () => {
    play();
  };
  
  return <Button 
    button_action= {handleClick}
    //icon_name= "volume_up" 
    button_text= "Goat Scream"
  />
};

export default GoatButton;