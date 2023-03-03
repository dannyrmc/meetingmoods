//Button when clicked will play a screaming goat sound

import useSound from "use-sound";
import goat from "../public/audio/goat-scream.mp3";
import Button from "./_button-base";

const GoatButton = () => {
  const [play] = useSound(goat, {
    interrupt: false, //Allows for multiple onclicks to overlap
    html5: true, //Forces full load of sound

    onplay: () => {
      console.log("Goat sound started!");
    },

    onend: () => {
      console.log("Goat sound ended!");
    },
  });

  const handleClick = () => {
    play();
  };

  return (
    <Button
      button_action={handleClick}
      button_text="Goat Scream"
      button_background_color="bg-amber-200"
      emoji_name="goat"
      emoji_background_color="bg-rose-200"
      emoji_padding="p-[10px]"
    />
  );
};

export default GoatButton;
