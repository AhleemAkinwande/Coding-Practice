const secondLargest = require("./second-large");

test("second largest is 40", () => {
    expect(secondLargest([10, 40, 30, 20, 50])).toBe(40);
});

test("second largest is 105", () => {
    expect(secondLargest([25, 143, 89, 13, 105])).toBe(105);
});

test("second largest is 23", () => {
    expect(secondLargest([54, 23, 11, 17, 10])).toBe(23);
});

test("second largest is -12", () => {
    expect(secondLargest([-117, -40, -2, -15, -12])).toBe(-12);
});

test("second largest is 0", () => {
    expect(secondLargest([1, 0])).toBe(0);
});