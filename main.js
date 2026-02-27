const roasts = [
  "You're not stupid, you just have bad luck thinking.",
  "I'd say you're 'extra', but you're more like 'unnecessary DLC.'",
  "You're not useless... you could at least scare crows.",
  "You're not slow, you just load like a free WiFi connection.",
  "You don't need a GPS — you're already lost in life.",
  "You're not dumb, just confidently wrong.",
  "You have the confidence of someone who has no idea what's going on.",
  "You're not a clown, but life sure uses you for entertainment."
];

function generateRoast() {
  const randomIndex = Math.floor(Math.random() * roasts.length);
  document.getElementById("roastBox").innerText = roasts[randomIndex];
}