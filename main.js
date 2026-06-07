function findCumulativeSum(num) {
  var sum = 0; // Tracking variable
 
  for (var i = 0; i <= num; i++) {
    sum = sum + i; // Add current number to total
  }
 
  return sum; // Return final total
}
