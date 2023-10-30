function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === 0) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return arr.length - left;
  }
  
  // Examples
  console.log(countZeroes([1,1,1,1,0,0])); 
  console.log(countZeroes([1,0,0,0,0]));   
  console.log(countZeroes([0,0,0]));    
  console.log(countZeroes([1,1,1,1]));
  