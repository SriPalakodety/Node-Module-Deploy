"use strict";

var expect = require("chai").expect;
var addCommasToNumbers = require("../index");

describe("#addCommasToNumbers method", () => {
  it("should convert single digits", () => {
    var result = addCommasToNumbers(1);
    expect(result).to.equal("1");
  });

  it("should convert double digits", () => {
    var result = addCommasToNumbers(12);
    expect(result).to.equal("12");
  });

  it("should convert triple digits", () => {
    var result = addCommasToNumbers(123);
    expect(result).to.equal("123");
  });

  it("should convert 4 digits", () => {
    var result = addCommasToNumbers(1234);
    expect(result).to.equal("1,234");
  });

  it("should convert 5 digits", () => {
    var result = addCommasToNumbers(12345);
    expect(result).to.equal("12,345");
  });

  it("should convert 6 digits", () => {
    var result = addCommasToNumbers(123456);
    expect(result).to.equal("123,456");
  });

  it("should convert 7 digits", () => {
    var result = addCommasToNumbers(1234567);
    expect(result).to.equal("1,234,567");
  });

  it("should convert 8 digits", () => {
    var result = addCommasToNumbers(12345678);
    expect(result).to.equal("12,345,678");
  });
});
