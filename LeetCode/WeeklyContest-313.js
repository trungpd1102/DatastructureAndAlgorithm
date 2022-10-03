/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
	const max = Math.max(a, b);
	console.log({ max });

	let count = 0;
	for (let i = 1; i <= max; i++) {
		if (a % i === 0 && b % i === 0) {
			count++;
			console.log(i);
		}
	}
	return count;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
	function sumHg(x, y) {
		let sumHg = grid[x][y] + grid[x][y + 1] + grid[x][y + 2];
		sumHg += grid[x + 1][y + 1];
		sumHg += grid[x + 2][y] + grid[x + 2][y + 1] + grid[x + 2][y + 2];
		return sumHg;
	}

	let sizeX = grid.length;
	let sizeY = grid[0].length;
	let maxSum = 0;

	for (let x = 0; x < sizeX - 2; x++) {
		for (let y = 0; y < sizeY - 2; y++) {
			let tempSum = sumHg(x, y);
			if (tempSum > maxSum) {
				maxSum = tempSum;
			}
		}
	}

	return maxSum;
};

// console.log(
// 	maxSum([
// 		[520626, 685427, 788912, 800638, 717251, 683428],
// 		[23602, 608915, 697585, 957500, 154778, 209236],
// 		[287585, 588801, 818234, 73530, 939116, 252369],
// 	])
// );

function getMinSum(arr) {
	const MAX = 25;
	const n = arr.length;
	let bits_count = new Array(MAX).fill(0),
		max_bit = 0,
		sum = 0,
		ans = 0;

	// To store the frequency
	// of bit in every element
	for (let d = 0; d < n; d++) {
		let e = arr[d],
			f = 0;
		while (e > 0) {
			let rem = e % 2;
			e = parseInt(e / 2);
			if (rem == 1) {
				bits_count[f] += rem;
			}
			f++;
		}
		max_bit = Math.max(max_bit, f);
	}

	// Finding element X
	for (let d = 0; d < max_bit; d++) {
		let temp = Math.pow(2, d);
		if (bits_count[d] > parseInt(n / 2)) ans = ans + temp;
	}

	// Taking XOR of elements and finding sum
	for (let d = 0; d < n; d++) {
		arr[d] = arr[d] ^ ans;
		sum = sum + arr[d];
	}
	return sum;
}

console.log(getMinSum([5, 3]));
