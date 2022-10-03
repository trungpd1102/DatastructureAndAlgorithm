/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
let answerQueries = function (nums, queries) {
	nums.sort((a, b) => a - b);
	queries.sort((a, b) => a - b);

	console.log({ nums, queries });

	let answers = [];
	for (const query of queries) {
		let sum = 0;
		let answerSub = [];

		for (const num of nums) {
			console.log({ query, num, sum, answerSub });
			if (sum + num <= query) {
				sum = sum + num;
				answerSub.push(num);
			} else break;
		}
		answers.push(answerSub.length);
	}
	return answers;
};
console.log(
	answerQueries(
		[736411, 184882, 914641, 37925, 214915],
		[331244, 273144, 118983, 118252, 305688, 718089, 665450]
	)
);
