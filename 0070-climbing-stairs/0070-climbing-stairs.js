/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   if (n <= 2) return n; // Base cases

  let prev1 = 1; // ways to reach step 1
  let prev2 = 2; // ways to reach step 2
  let current;

  for (let i = 3; i <= n; i++) {
    current = prev1 + prev2; // DP formula
    prev1 = prev2;
    prev2 = current;
  }

  return current;
 
};