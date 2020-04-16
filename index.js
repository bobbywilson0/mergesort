#!/usr/bin/env node
"use strict";

const mergeSort = require("./mergeSort");

const array1 = JSON.parse(process.argv[2]);
const array2 = JSON.parse(process.argv[3]);

const result = mergeSort(array1, array2);
process.stdout.write(`[${result.join(", ")}]`);
