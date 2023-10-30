function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx === -1) return -1;
    
    let lastIdx = findLast(arr, num);
    
    return lastIdx - firstIdx + 1;
  }
  
  function findFirst(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstIdx = -1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] >= num) {
        right = mid - 1;
        if (arr[mid] === num) firstIdx = mid;
      } else {
        left = mid + 1;
      }
    }
  
    return firstIdx;
  }
  
  function findLast(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let lastIdx = -1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] <= num) {
        left = mid + 1;
        if (arr[mid] === num) lastIdx = mid;
      } else {
        right = mid - 1;
      }
    }
  
    return lastIdx;
  }
  
  // Examples
  console.log(sortedFrequency([1,1,2,2,2,2,3], 2)); // Output: 4
  console.log(sortedFrequency([1,1,2,2,2,2,3], 3)); // Output: 1
  console.log(sortedFrequency([1,1,2,2,2,2,3], 1)); // Output: 2
  console.log(sortedFrequency([1,1,2,2,2,2,3], 4)); // Output: -1
  