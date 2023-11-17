//Button when clicked will play a screaming goat sound

"use client";

import goat from "@/audio/goat-scream.mp3";
import Button from "./button-base";

const GoatButton = () => {
  return (
    <Button
      button_text="Goat Scream"
      button_background_color="bg-amber-200"
      emoji_name="goat"
      sound_file={goat}
      sound_name="Goat"
      emoji_background_color="bg-rose-200"
      emoji_padding="p-3"
    />
  );
};

export default GoatButton;
