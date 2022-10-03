// 2278. Percentage of Letter in String
var percentageLetter = function (s, letter) {
	var count = 0;
	var sLC = s.toLowerCase();

	for (var i = 0; i < s.length; i++) {
		if (sLC[i] === letter) count++;
	}

	var per = Math.floor((count / s.length) * 100);
	console.log(per);
	return per;
};

// percentageLetter('foobar', 'o');
// percentageLetter('jjjj', 'k');

/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
// 2279. Maximum Bags With Full Capacity of Rocks
let maximumBags = function (capacity, rocks, additionalRocks) {
	let count = 0;
	const n = capacity.length;

	let needRocks = [];
	for (let i = 0; i < n; i++) {
		needRocks.push(capacity[i] - rocks[i]);
	}

	needRocks.sort((a, b) => a - b);
	console.log({ needRocks });

	for (let i = 0; i < n; i++) {
		if (needRocks[i] <= additionalRocks) {
			additionalRocks -= needRocks[i];
			count++;
		}
	}

	return count;
};

/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
//  2280. Minimum Lines to Represent a Line Chart
let minimumLines = function (stockPrices) {
	stockPrices.sort(function (a, b) {
		return a[0] - b[0];
	});
	const xIdx = 0,
		yIdx = 1;
	let minLine = stockPrices.length - 1;

	for (let i = 0; i < stockPrices.length - 2; i++) {
		let startX = BigInt(stockPrices[i][xIdx]),
			startY = BigInt(stockPrices[i][yIdx]),
			secondX = BigInt(stockPrices[i + 1][xIdx]) - BigInt(startX),
			secondY = BigInt(stockPrices[i + 1][yIdx]) - BigInt(startY),
			thirdX = BigInt(stockPrices[i + 2][xIdx]) - BigInt(startX),
			thirdY = BigInt(stockPrices[i + 2][yIdx]) - BigInt(startY);
		if (thirdY * secondX === thirdX * secondY) {
			minLine--;
		}
	}
	return minLine;
};

console.log(
	minimumLines([
		[1, 1],
		[500000000, 499999999],
		[1000000000, 999999998],
	])
);
// console.log(
// 	minimumLines([
// 		[1, 1],
// 		[2, 2],
// 		[3, 3],
// 	])
// );
