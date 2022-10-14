// imports here
const {translationFunction} = require('./morseFunctions-fortest.js');


//tests
  // test for invalid characters
  it("Should return error if unexpected chars are used" , () => {
    const result = translationFunction("&");
    expect(result).toBe("You have input invalid characters");
  });

  // test one letter input
  it("Should return '***' when user inputs 's'" , () => {
    const result = translationFunction("s");
    expect(result).toBe("***");
  });

  // test full word input
  it("Should return '*** --- ***' when user inputs 'sos'" , () => {
    const result = translationFunction("sos");
    expect(result).toBe("*** --- ***");
  });


  // test full phrase input
  it("Should return '*** --- ***, ** --, *** **** ** -' when user inputs 'sos im shit'" , () => {
    const result = translationFunction("sos im shit");
    expect(result).toBe("*** --- *** , ** -- , *** **** ** -");
  });

  // test for no input
  it("Should return 'no user input' when user inputs ''" , () => {
    const result = translationFunction();
    expect(result).toBe("no user input");
  });

  // test for a number
  it("Should return '-****' when user inputs '6'" , () => {
    const result = translationFunction(6);
    expect(result).toBe("-****");
  });

  // test for case sensitivity
  it("Should return '-*-* *- *--* ***' when user inputs 'CAPS'" , () => {
    const result = translationFunction(6);
    expect(result).toBe("-*-* *- *--* ***");
  });