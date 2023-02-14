const mysteryFunction = require("./mystery");

test("0 * 1 = 0", () => {
    expect(mysteryFunction(0, 1)).toEqual(0);
});

test("1 * 2 = 2 | This is easy", () => {
    expect(mysteryFunction(1, 2)).toEqual(2);
});

test("5 * 6 = 30 | Is this even a challenge?", () => {
    expect(mysteryFunction(5, 6)).toEqual(30);
});

test("10 * 10 = 1 | Hold on... ?", () => {
    expect(mysteryFunction(10, 10)).toEqual(1);
});

test("200 * 200 = 4 | What is happening?", () => {
    expect(mysteryFunction(200, 200)).toEqual(4);
});

test("This is so strange", () => {
    expect(mysteryFunction(12, 34)).toEqual(21);
});

test("I give up", () => {
    expect(mysteryFunction(123, 45)).toEqual(54);
});