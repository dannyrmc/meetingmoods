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
    button_text= "Party Yay"
    button_background_color = "bg-blue-200"
    emoji_name= "party"
    emoji_background_color = "bg-emerald-200"
    emoji_padding= "p-3"
  />
};

export default PartyButton;