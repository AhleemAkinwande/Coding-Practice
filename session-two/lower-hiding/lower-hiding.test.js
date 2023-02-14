const detectWord = require("./lower-hiding");

test("find cat", () => {
    expect(detectWord("UcUNFYGaFYFYGtNUH")).toBe("cat");
});

test("find burglar", () => {
    expect(detectWord("bEEFGBuFBRrHgUHlNFYaYr")).toBe("burglar");
});

test("find embezzlement", () => {
    expect(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")).toBe("embezzlement");
});

test("find a", () => {
    expect(detectWord("YFHUFBFBYaFBYLGBYEFGBMENT")).toBe("a");
});

test("no lowercase letters", () => {
    expect(detectWord("YFHUFBFBYFBYLGBYEFGBMENT")).toBe("");
});