const charCount = (char, str) => {
    // Your code here
    timesCharAppears = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            timesCharAppears++;
        }
    }
    return timesCharAppears;
};

console.log(charCount("e", "develop this"));

module.exports = charCount;