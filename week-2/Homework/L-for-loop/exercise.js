/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop

*/
let n = 25;
result = 0;

function sumTillNum(num) {
	//your code here

	for (let i = 0; i <= num; i++) {
		result += i;
	}
	return result;
}

console.log("The sum from  the number 0 to the  number " + n + " is: " + sumTillNum(n));