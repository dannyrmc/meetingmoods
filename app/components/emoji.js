// Base emoji component

//probably should colocate the icons in the app directory
import EmojiGoat from "@/icons/emoji-goat.svg";
import EmojiParty from "@/icons/emoji-party.svg";

const emojis = {
  goat: EmojiGoat,
  party: EmojiParty,
};

const Emoji = ({ emoji_name, ...props }) => {
  let Icon = emojis[emoji_name];

  return <Icon {...props} />;
};

export default Emoji;
