const lyris =
  "sada kala rong jomeca sada kal hoisi rong pagla bosonto kale tui bondu sada phaki ami jeno ki boson khale tmy bolta pari ni";

const searchString = "Kala Rong jomeca sada kal";

const doseExist = lyris.toLowerCase().includes(searchString.toLowerCase());

console.log(doseExist);
console.log(lyris.indexOf("kala"));

if (lyris.indexOf("sada kala") !== 1) {
  console.log("Exists inside the string");
} else {
  console.log("cannot find it");
}
// start width
console.log(lyris.startsWith("tmi"));

// end width

const fileName = "habib.png";
const cvName = "habib.pdf";
console.log(cvName.endsWith(".pdf"));
