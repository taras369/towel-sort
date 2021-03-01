
module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length < 1) {
      return [];
  }
    let array = [];
    for (let i = 0; i < matrix.length; i++) {
      if(i % 2 === 0) {
        array.push(...matrix[i]);
      } else {
        array.push(...matrix[i].reverse());
      }
    }
    return array;
};
