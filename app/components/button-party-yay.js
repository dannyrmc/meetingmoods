//Button when clicked will play a party yay sound

"use client";

import party from "@/audio/party-yay.mp3";
import Button from "./button-base";

const PartyButton = () => {
  return (
    <Button
      button_text="Party Yay"
      button_background_color="bg-blue-200"
      emoji_name="party"
      sound_file={party}
      sound_name="Party"
      emoji_background_color="bg-emerald-200"
      emoji_padding="p-3"
    />
  );
};

export default PartyButton;
