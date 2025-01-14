//Get the input from terminal
//Convert it to an Array of strings
//for each word , determine the word belongs to which categoury and call the corresponding function to convert to pig latin
// add the converted word to the translation
//print the translation

//
const vowels = ["a", "o", "u", "i", "e"];
const args = process.argv.slice(2);
let translatedText = "";

/*  Main */
args.forEach((word) => {
    const translatedWord = GetPigLatinTranslation(word);
    translatedText += translatedWord + " ";
});
console.log("Output: ", translatedText);

////
function GetPigLatinTranslation(word) {
    if (isWovel(word[0])) {
        return word + "way";
    } else if (isWovel(word[1])) {
        return word.slice(1) + word[0].toLowerCase() + "ay";
    } else {
        return word.slice(2) + word[0].toLowerCase() + word[1] + "ay";
    }
}

function isWovel(ch) {
    return vowels.some((vowel) => vowel === ch);
}
