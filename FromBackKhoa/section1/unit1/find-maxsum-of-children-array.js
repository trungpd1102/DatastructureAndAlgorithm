const arr = [-1, 2, 8, -3, 9, -2, 5];

console.log(main(arr));
console.log(mainShoter(arr));
console.log(mainRecursive(arr));

function main(arr) {
	console.time('main');
	let n = arr.length;
	let maxSum = 0;

	for (let i = 0; i < n; i++) {
		// console.log('loop1:', { i, 'arr[i]': arr[i] });
		for (let j = i; j < n; j++) {
			// console.log('loop2:', { i, j, 'arr[i]': arr[i], 'arr[j]': arr[j] });
			let sum = 0;

			for (let k = i; k <= j; k++) {
				sum += arr[k];
				// console.log('loop3: ', { i, j, k, sum });
			}
			if (sum > maxSum) maxSum = sum;
			// console.log({ maxSum: maxSum });
		}
	}

	// console.log(maxSum);
	console.timeEnd('main');
	return maxSum;
}

function mainShoter(arr) {
	console.time('mainShoter');
	console.log(JSON.stringify(arr));
	let n = arr.length;
	let maxSum = arr[0];
	for (let i = 0; i < n; i++) {
		console.log('loop1:', { i, 'arr[i]': arr[i] });

		let sum = 0;
		for (let j = i; j < n; j++) {
			console.log('loop2:', { i, j, 'arr[i]': arr[i], 'arr[j]': arr[j] });

			sum += arr[j];
			if (sum > maxSum) maxSum = sum;
			console.log({ sum });
		}
	}
	console.timeEnd('mainShoter');
	return maxSum;
}

// Chia dãy làm đôi
function mainRecursive(arr) {
	return maxSub(arr, 0, arr.length - 1);
	function maxLeft(arr, i, j) {
		let maxSum = Number.NEGATIVE_INFINITY;
		let sum = 0;
		for (let k = j; k > i; k--) {
			sum += arr[k];
			if (sum > maxSum) maxSum = sum;
		}
		return maxSum;
	}
	function maxRight(arr, i, j) {
		let maxSum = Number.NEGATIVE_INFINITY;
		let sum = 0;
		for (let k = i; k < j; k++) {
			sum += arr[k];
			if (sum > maxSum) maxSum = sum;
		}
		return maxSum;
	}

	function maxSub(arr, i, j) {
		if (i === j) {
			return arr[i];
		} else {
			let m = (i + j) / 2;
			let wL = maxSub(arr, i, m);
			let wR = maxSub(arr, m + 1, j);
			let wM = maxLeft(a, i, m) + maxRight(a, m + 1, j);
			return Math.max(wL, wR, wM);
		}
	}
}

function mainQuyHoachDong(arr) {
   
}
