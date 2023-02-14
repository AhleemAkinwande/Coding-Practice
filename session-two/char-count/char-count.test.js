const charCount = require("./char-count");

test("find instances of e", () => {
    expect(charCount("e", "develop this")).toBe(2);
});

test("find instances of c", () => {
    expect(charCount("c", "Chamber of secrets")).toBe(1);
});

test("find instances of z", () => {
    expect(charCount("z", "zZzZzZ")).toBe(3);
});

test("find instances of ?", () => {
    expect(charCount("?", "Happy Birthday!")).toBe(0);
});