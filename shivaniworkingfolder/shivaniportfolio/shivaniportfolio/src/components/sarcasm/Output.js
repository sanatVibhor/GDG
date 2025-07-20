export const translateSarcasm = (input) => {
  if (!input.trim()) return "Say something before we roast it 🙃";

  const sarcasmTemplates = [
    "Oh wow, how original 🙄",
    "Sounds like a dream. A very delayed, glitchy dream.",
    "Is that a serious thought or just performance art?",
    "I bet unicorns would be impressed.",
    "Let me pretend I care... okay, done.",
    "That’s just... wow. Like glitter in a void.",
    "Congratulations. You just redefined boredom.",
    "Your thought process deserves a standing nap.",
    "Ah yes, another philosophical gem from the depths of sarcasm.",
    "Let’s print that on a mug... and throw it away.",
  ];

  const randomIndex = Math.floor(Math.random() * sarcasmTemplates.length);
  return sarcasmTemplates[randomIndex];
};