//Get the input and a shift number from the terminal
//convert each character to shifted one using the shift number
//print to console the encripted text

//Initializations
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

/* Main */
const args = process.argv.slice(2);
const text = args[0];
const shift = Number(args[1]);

//data validation
if (isNaN(shift)) {
    console.log("Invalid input: Not a valid number enterded after the text!");
    return;
}

const encriptedText = GetCaesarCipher(text, shift);
console.log(encriptedText.toLowerCase());

/////
function GetCaesarCipher(text, shift) {
    let CipherTxt = "";
    Array.from(text).forEach((ch) => {
        ch !== " " ? (CipherTxt += GetShiftedChar(ch, shift)) : (CipherTxt += " ");
    });
    return CipherTxt;
}

function GetShiftedChar(ch, shift) {
    const charIndex = alphabet.indexOf(ch.toUpperCase());
    return alphabet[Math.abs(((charIndex + shift) % 26) + 26) % 26];
}
