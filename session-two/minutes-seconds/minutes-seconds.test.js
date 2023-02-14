const convert = require("./minutes-seconds");

test("convert 1 minute", () => {
    expect(convert(1)).toBe(60);
});

test("convert 5 minutes", () => {
    expect(convert(5)).toBe(300);
});

test("convert 10 minutes", () => {
    expect(convert(10)).toBe(600);
});

test("convert 0.5 minutes", () => {
    expect(convert(0.5)).toBe(30);
});

test("convert 0 minutes", () => {
    expect(convert(0)).toBe(0);
});