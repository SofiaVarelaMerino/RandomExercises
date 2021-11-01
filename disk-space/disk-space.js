/**
 * Function that gets the maximum of the minimum values of available hard disk space. found analyzing the computers in segments of lenght x
 * @param {ARRAY} space The available hard disk space on each of the computers
 * @param {INTEGER} x The segment lenght to analyze. "x" must be greater than or equal to one and x must be less than or equal to 10^6.
 * @returns {INTEGER}  maximum value.
 */
function resolution(space, x) {
  let arrayMin = [];
  let array = [];
  // Constraints validations
  if (x >= 1 && x <= (10 ^ 6)) {
    for (let i = 0; i < space.length - (x - 1); i++) {
      for (let z = i; z < x + i; z++) {
        array.push(space[z]);
      }
      if (array.length === x) {
        const min = Math.min(...array);
        arrayMin.push(min);
        array = [];
      }
    }
    return Math.max(...arrayMin);
  }
  return -1;
}

