/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
	let;
};

var replaceLetter = function (letter) {
	if (letter === '') return;
	let firstLetter = letter[0];
	let count = 0;
	for (let i = 0; i < letter.length; i++) {
		if (letter[i] === firstLetter) {
			letter.replace(letter[i], '');
			count++;
		}
	}
	return { count, letter };
};
console.log(equalFrequency());
