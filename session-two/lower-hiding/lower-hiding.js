const detectWord = (str) => {
    // Your code here
    let hiddenWord = ""
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i).toLowerCase()) {
            hiddenWord += str.charAt(i)
        }
    }

    return hiddenWord;
}

console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"))

module.exports = detectWord;