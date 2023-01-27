// Base emoji component

import EmojiGoat from "../public/icons/emoji-goat.svg";
import EmojiParty from "../public/icons/emoji-party.svg";

const emojis = {
  "goat" : EmojiGoat,
  "party" : EmojiParty
};

const Emoji = ({emoji_name, ...props}) => {

  let Icon = emojis[emoji_name];

  return (<Icon {...props} />);
}
 
export default Emoji;