import useSound from "use-sound";

export default function getSounds() {
  const sounds = [
    {
      id: 1,
      label: "Party Yay",
      emoji_name: "party",
      button_bg_color: "bg-blue-200",
      emoji_bg_color: "bg-emerald-200",
      sound_file: "/audio/party-yay.mp3",
    },
    {
      id: 2,
      label: "Goat Scream",
      emoji_name: "goat",
      button_bg_color: "bg-amber-200",
      emoji_bg_color: "bg-rose-200",
      sound_file: "/audio/goat-scream.mp3",
    },
  ];

  return sounds.map(button => {
    const [play] = useSound(button.sound_file, {
      interrupt: false, // Allows for multiple onclicks to overlap
      html5: true, // Forces full load of sound
      preload: true,  // Enable preload to reduce initial delay
      onplay: () => console.log(`${button.label} sound started!`),
      onend: () => console.log(`${button.label} sound ended!`),
    });

    return {
      ...button,
      handleSound: () => play(),
    };
  });

}
