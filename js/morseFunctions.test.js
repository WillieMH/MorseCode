// imports here

//tests
  // test for invalid characters
  it("Should return error if unexpected chars are used" , () => {
    const result = translate("&");
    expect(result).toBe("Error");
  });

  // test one letter input
  it("Should return '***' when user inputs 's'" , () => {
    const result = translate("s");
    expect(result).toBe("***");
  });

  // test full word input
  it("Should return '*** --- ***' when user inputs 'sos'" , () => {
    const result = translate("sos");
    expect(result).toBe("*** ---- ***");
  });


  // test full phrase input
  it("Should return '*** --- ***, ** --, *** **** ** -' when user inputs 'sos im shit'" , () => {
    const result = translate("sos im shit");
    expect(result).toBe("*** --- ***, ** --, *** **** ** -");
  });

  // test for no input
  it("Should return 'no user input' when user inputs ''" , () => {
    const result = translate();
    expect(result).toBe("no user input");
  });

  // test for a number
  it("Should return '-****' when user inputs '6'" , () => {
    const result = translate(6);
    expect(result).toBe("-****");
  });

  // test for case sensitivity
  it("Should return '-*-* *- *--* ***' when user inputs 'CAPS'" , () => {
    const result = translate(6);
    expect(result).toBe("-*-* *- *--* ***");
  });