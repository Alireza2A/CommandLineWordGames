//Get the input and a shift number from the terminal
// convert each character to encripted one using shift number
//print to console the encripted text

//Initializations
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

/* Main */
const args = process.argv.slice(2);
// console.log(args[1]);
const text = args[0];
const shift = Number(args[1]);
const encriptedText = GetCaesarCipher(text, shift);
console.log(encriptedText.toLowerCase());

/////
function GetCaesarCipher(text, shift) {
    let txt = "";
    Array.from(text).forEach((ch) => {
        ch !== " " ? (txt += GetShiftedChar(ch, shift)) : (txt += " ");
    });
    return txt;
}
function GetShiftedChar(ch, shift) {
    const charIndex = alphabet.indexOf(ch.toUpperCase());
    // console.log("Abs value", Math.abs(((charIndex + shift) % 26) + 26) % 26);
    return alphabet[Math.abs(((charIndex + shift) % 26) + 26) % 26];
}
