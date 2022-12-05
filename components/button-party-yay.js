//Button when clicked will play a party yay sound

import useSound from 'use-sound';
import party from '../public/audio/party-yay.mp3';
import Button from './_button-base';

const PartyButton = () => {
 
  const [play] = useSound(party, {

    /*
    interrupt ensures that if the sound starts again before it's
    ended, it will truncate it. Otherwise, the sound can overlap.
    */
    
    //interrupt: true,

    html5: true, 

    onplay: () => {
      console.log('Party sound started!');
    },

    onend: () => {
      console.log('Party sound ended!');
    },
  });

  const handleClick = () => {
    play();
  };

  return <Button 
    button_action= {handleClick}
    //icon_name= "volume_up" 
    button_text= "Party Yay"
  />
};

export default PartyButton;