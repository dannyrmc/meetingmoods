//Button when clicked will play a party yay sound

import useSound from 'use-sound';
import party from '../public/audio/party-yay.mp3';
import Button from './_button-base';

const PartyButton = () => {
 
  const [play] = useSound(party, {

    interrupt: false, //Allows for multiple onclicks to overlap
    html5: true, //Forces full load of sound

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