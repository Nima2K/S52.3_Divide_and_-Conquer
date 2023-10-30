function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr);
    if (pivot === 0 || num < arr[0]) {
      return binarySearch(arr, pivot, arr.length - 1, num);
    }
    return binarySearch(arr, 0, pivot - 1, num);
  }
  
  function findPivot(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] > arr[mid + 1]) {
        return mid + 1;
      }
  
      if (arr[mid] >= arr[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return 0;
  }
  
  function binarySearch(arr, left, right, num) {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        return mid;
      }
  
      if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  
  // Examples
  console.log(findRotatedIndex([3,4,1,2], 4));                          // Output: 1
  console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8));           // Output: 2
  console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3));           // Output: 6
  console.log(findRotatedIndex([37,44,66,102,10,22], 14));              // Output: -1
  console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12));          // Output: -1
  