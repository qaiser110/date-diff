/**
 * Created by qaiser on 29/11/2016.
 */

var dateDiff = require('./date-diff.js');

var
    arg1 = process.argv[2],
    arg2 = process.argv[3];
    arg3 = process.argv[4];

if (arg3) {
  console.log(dateDiff(arg1, arg3));
} else {
  console.log(dateDiff(arg1, arg2));
}
