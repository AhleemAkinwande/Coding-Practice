const timeForMandC = require("./time");

test("today is 11/24/2016", () => {
    expect(timeForMandC(new Date(2016, 11, 24))).toBeTruthy();
});

test("today is 07/15/1998", () => {
    expect(timeForMandC(new Date(1998, 7, 15))).toBeFalsy();
});

test("today is 08/26/2022", () => {
    expect(timeForMandC(new Date(2022, 8, 26))).toBeFalsy();
});

test("today is 11/24/3000]", () => {
    expect(timeForMandC(new Date(3000, 11, 24))).toBeTruthy();
});