// Test Features
// 1. Exclusive Test only()
// 2. Inclusive Test skip()
// 3. Pending Test

let assert = require("assert");

describe("Mocha Test Features", function() {
  let a = 10;
  let b = 5;

  it("Multiplication", function() {

    let c = a * b;

    assert.equal(c, 50);
  });

  it("Division", function() {

    let c = a / b;

    assert.equal(c, 2);
  });

  it("Addition", function() {

    let c = a + b;

    assert.equal(c, 15);
  });

  it.skip("Substraction", function() {

    let c = a - b;

    assert.equal(c, 5);
  });

  it("This is a Pending Tests");
    
});