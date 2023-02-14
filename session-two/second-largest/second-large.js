const secondLargest = (arr) => {
    // Your code here
  arr.sort((a, b) => b - a); //The expression b - a returns a negative number if b is greater than a, a positive number if a is greater than b, and 0 if they are equal. This comparison logic is used by the sort method to sort the elements in descending order.
  return arr[1];
}

console.log(secondLargest([10, 40, 30, 20, 50]))
console.log(secondLargest([25, 143, 89, 13, 105]))
console.log(secondLargest([-117, -40, -2, -15, -12]))

module.exports = secondLargest;