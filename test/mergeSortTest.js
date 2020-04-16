const assert = require("assert");
const mergeSort = require("../mergeSort");

describe("sorter", function () {
  describe("two non-emtpty arrays", () => {
    it("returns a single sorted array", () => {
      assert.deepEqual(
        [1, 2, 3, 6, 7, 8, 9],
        mergeSort([1, 2, 7, 9], [3, 6, 8])
      );
    });

    it("returns a single sorted array", () => {
      assert.deepEqual([1, 4, 6, 6, 8, 9], mergeSort([6, 8, 9], [1, 4, 6]));
    });
  });

  describe("two non-empty arrays with big numbers", () => {
    it("returns a single sorted array", () => {
      assert.deepEqual(
        [1, 2, 3, 211, 235, 2333],
        mergeSort([1, 2, 3], [235, 2333, 211])
      );
    });
  });

  describe("an empty array and a non-empty array", () => {
    it("returns a single sorted array", () => {
      assert.deepEqual([1, 2, 3], mergeSort([], [1, 2, 3]));
    });
  });
});
