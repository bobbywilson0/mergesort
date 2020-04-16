"use strict";

module.exports = (array1, array2) => {
  return array1.concat(array2).sort((a, b) => a - b);
};
