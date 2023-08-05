const lyris =
  "sada kala rong jomeca sada kala. hoisi rong pagla. bosonto kale. tui bondu sada phaki. ami jeno ki, boson khale tmy bolta pari ni.";
const part = lyris.split(" ");
const sentences = lyris.split(".");
const chars = lyris.split("");

console.log(part);
console.log(sentences);
console.log(chars);

const partial = lyris.slice(10, 18);

console.log(partial);

const lines = [
  "sada kala rong jomeca sada kala",
  "Hoisi rong pagla",
  "Bosonto kale",
  "Tui bondu sada phaki",
  "Ami jeno ki, boson khale tmy bolta pari ni",
  "",
];

const newSong = lines.join(". ");

console.log(newSong);
