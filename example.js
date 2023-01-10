// Given an array of integers, keep a total score based on the following:
// Add 1 point for each even number in the array.
// Add 3 points for each odd number in the array.
// Add 5 points for every time you encounter an 8 in the array

let arr = [1,2,3,4,5,8]

function arrayScore(arr) {
let totalScore = 0;

for (let i = 0; i < arr.length; i++) {
     
        if (arr[i] === 8) {
            totalScore += 5;
        }
        else if (arr[i] % 2 === 0) {
            totalScore += 1;
        } 
        else if (arr[i] % 2 !== 0) {
            totalScore += 3;
        }  
    }
    return totalScore;
}

console.log(arrayScore(arr));
