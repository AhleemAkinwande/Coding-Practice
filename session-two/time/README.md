# Is it time for Milk and Cookies?

Create a function that accepts a ```Date``` object and returns ```true``` if it's Christmas Eve (December 24th) and ```false``` otherwise.

## Examples
```
timeForMandC(new Date(2013, 11, 24)) ➞ true

timeForMandC(new Date(2013, 0, 23)) ➞ false

timeForMandC(new Date(3000, 11, 24)) ➞ true
```

## Testing
Once you think you have the correct solution, open your terminal and use the command ```npm test -- time.test.js``` to run the necessary tests.

## Notes
- Don't forget to ```return``` the result.
- If you get stuck, look at the ```time.test.js``` file for what the tests may look like.
- In JavaScript, dates are 0 based, similar to arrays!