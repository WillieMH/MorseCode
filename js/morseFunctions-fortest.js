// TEST FOR JEST

  // MAIN FUNCTION START
  const translate = (theWord) => {
    const capsOff = theWord.toLowerCase();
    let newArry = capsOff.split("");
    let convertedArry = [];
    for (let i=0; i < newArry.length; i++) {
      if (newArry[i] === "a") {
        convertedArry.push("*-");
      } else if (newArry[i] === "b") {
        convertedArry.push("-***");
      } else if (newArry[i] === "c") {
        convertedArry.push("-*-*");
      } else if(newArry[i] === "d") {
        convertedArry.push("-**");
      } else if(newArry[i] === "e") {
        convertedArry.push("*");
      } else if(newArry[i] === "f") {
        convertedArry.push("**-*");
      } else if(newArry[i] === "g") {
        convertedArry.push("--*");
      } else if(newArry[i] === "h") {
        convertedArry.push("****");
      } else if(newArry[i] === "i") {
        convertedArry.push("**");
      } else if(newArry[i] === "j") {
        convertedArry.push("*---");
      } else if(newArry[i] === "k") {
        convertedArry.push("-*-*");
      } else if(newArry[i] === "l") {
        convertedArry.push("*-**");
      } else if(newArry[i] === "m") {
        convertedArry.push("--");
      } else if(newArry[i] === "n") {
        convertedArry.push("-*");
      } else if(newArry[i] === "o") {
        convertedArry.push("---");
      } else if(newArry[i] === "p") {
        convertedArry.push("*--*");
      } else if(newArry[i] === "q") {
        convertedArry.push("--*-");
      } else if(newArry[i] === "r") {
        convertedArry.push("*-*-");
      } else if(newArry[i] === "s") {
        convertedArry.push("***");
      } else if(newArry[i] === "t") {
        convertedArry.push("-");
      } else if(newArry[i] === "u") {
        convertedArry.push("**-");
      } else if(newArry[i] === "v") {
        convertedArry.push("***-");
      } else if(newArry[i] === "w") {
        convertedArry.push("*--");
      } else if(newArry[i] === "x") {
        convertedArry.push("-**-");
      } else if(newArry[i] === "y") {
        convertedArry.push("-*--");
      } else if(newArry[i] === "z") {
        convertedArry.push("--**");
      } else if(newArry[i] === "0") {
        convertedArry.push("-----");
      } else if(newArry[i] === "1") {
        convertedArry.push("*----");
      } else if(newArry[i] === "2") {
        convertedArry.push("**---");
      } else if(newArry[i] === "3") {
        convertedArry.push("***--");
      } else if(newArry[i] === "4") {
        convertedArry.push("****-");
      } else if(newArry[i] === "5") {
        convertedArry.push("*****");
      } else if(newArry[i] === "6") {
        convertedArry.push("-****");
      } else if(newArry[i] === "7") {
        convertedArry.push("--***");
      } else if(newArry[i] === "8") {
        convertedArry.push("---**");
      } else if(newArry[i] === "9") {
        convertedArry.push("----*");
      }else if(newArry[i] === " ") {
        convertedArry.push(",");
      } else if(newArry[i] == "") {
        return "no user input";;
      } else {
        return "You have input invalid characters";
      }
    }
    const morseWord = convertedArry.join(" ");
    return morseWord;
  };

  
  
  console.log(translate("pig"));
  
  
  
  module.exports = {translate};