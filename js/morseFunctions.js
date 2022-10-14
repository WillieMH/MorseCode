// MAIN FUNCTION START
const translate = (englishWord) => {
  return "***";
}
// MAIN FUNCTION END

      // PSEUDO
        // get input
        // split input - tick
        // change to lowercase - tick
        // loop through each word to translate
        // rejoin words
        // display words

// split sentence funtion
const splitUserInput = (userInput) => {
  const convertToNonCaps = userInput.toLowerCase();
  splitArry = convertToNonCaps.split(" ");
  return splitArry;
};

// loop through word in array and translate
const newWord = (theWord) => {
  return theWord
    .replaceAll("a", " *- ")
    .replaceAll("b", " -*** ")
    .replaceAll("c", " -*-* ")
    .replaceAll("d", " -** ")
    .replaceAll("e", " * ")
    .replaceAll("f", " **-* ")
    .replaceAll("g", " --* ")
    .replaceAll("h", " **** ")
    .replaceAll("i", " ** ")
    .replaceAll("j", " *--- ")
    .replaceAll("k", " -*-* ")
    .replaceAll("l", " *-** ")
    .replaceAll("m", " -- ")
    .replaceAll("n", " -* ")
    .replaceAll("o", " --- ")
    .replaceAll("p", " *--* ")
    .replaceAll("q", " --*- ")
    .replaceAll("r", " *-* ")
    .replaceAll("s", " ... ")
    .replaceAll("t", " - ")
    .replaceAll("u", " **- ")
    .replaceAll("v", " ***- ")
    .replaceAll("w", " *-- ")
    .replaceAll("x", " -**- ")
    .replaceAll("y", " -*-- ")
    .replaceAll("z", " --** ")
    .replaceAll("0", " ----- ")
    .replaceAll("1", " *---- ")
    .replaceAll("2", " **--- ")
    .replaceAll("3", " ***-- ")
    .replaceAll("4", " ****- ")
    .replaceAll("5", " ***** ")
    .replaceAll("6", " -**** ")
    .replaceAll("7", " --*** ")
    .replaceAll("8", " ---** ")
    .replaceAll("9", " ----* ")

}

console.log(newWord("6654"));

console.log(splitUserInput("I LIKE SHOUTING"));









// Don't touch
module.exports = {translate};