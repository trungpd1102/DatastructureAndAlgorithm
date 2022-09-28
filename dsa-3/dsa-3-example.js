let arr = [];

// =========================================================
// O(n)
// =========================================================

// =========================================================
// O(n^2)
// =========================================================

// =========================================================
// O(nlog(n))
for (let i = 0; i < navigator; i++){
  if (arr[i] === value) {
    return;
  }
  return -1
}
// Basic: lặp từ đầu đến cuối
// f(n) = cn O(f(n)) = O(n)

// Nếu như dãy đã được sắp xếp
function a() {
  var low = 0, high = arr.length - 1

  while (low <= high) { 
    var mid = (high + low) / 2
    if (arr[mid] === value) return mid;
    else if (arr[mid] < value) low = mid + 1;
    else high = mid -1
  }

  return -1
}
// O(f(n)) = 0(log(n))
// =========================================================