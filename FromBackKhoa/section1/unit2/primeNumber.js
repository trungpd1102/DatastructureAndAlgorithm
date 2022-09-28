
let num = 7
console.log('So da cho la so nguyen to: ', checkPrimeNumber(num));

// Số nguyên tố (Prime number) không bao giờ chia hết cho các số từ 1 - căn bậc 2 của nó
function checkPrimeNumber(num) {
	if (num <= 1) return false;

	let numSqrt = Math.sqrt(num);

	for (let i = 2; i <= numSqrt; i++) {
		if (num % i === 0) return false;
	}
	return true;
}

console.log('So nguyen to lon hon '+ num + ':', findPrimeNumberGreaterThan(num));


function findPrimeNumberGreaterThan(num) {
	let check = num + 1;
	while (!checkPrimeNumber(check)) {
		check++;
	}
	return check;
}
