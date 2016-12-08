/**
 * Created by qaiser on 29/11/2016.
 */
const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? 1 : 0;
}

// I'm checking for only leap year validation, but this could check for more validations
// dt is array of dd, mm, yyyy
function validDate(dt) {

  if (dt.length !==3 || dt[1] > 12 || dt[0] > MONTH_DAYS[dt[1] - 1] && !(dt[1] == 2 && dt[0] == 29 && isLeapYear(dt[2])))
    return false;

  //dates must be between 01/01/1901 and 31/12/2999.
  return (dt[0] > 0 && dt[1] > 0 && dt[2] > 1901 && dt[2] < 3000);
}

function numDaysPassedJan1(dt) {
  var dd = dt[0],
    mm = dt[1],
    yr = dt[2];

  var numDays = 0;
  for (var i = 0; i < mm - 1; i++) {
    numDays += MONTH_DAYS[i];
  }
  numDays += dd;

  return mm > 2 ? numDays + isLeapYear(yr) : numDays;
}

function numDaysFullYear(year) {
  return MONTH_DAYS.reduce(function (prev, curr) {
      return prev + curr;
    }, 0) + isLeapYear(year);
}

function splitDate(date) {
  return date.split('/').map(function (x) {
    return parseInt(x, 10);
  });
}

function dateDiff(date1, date2) {
  if (!date1 || !date2) {
    return 'Missing Date: Please provide both start date and end date.\n ' +
      'Usage: node diff \<START_DATE\> - \<END_DATE\>\n' +
      'Example: node diff 04/07/1984 - 25/12/1984'
  }

  var numDays = 0,
    dt1 = splitDate(date1),
    dt2 = splitDate(date2);

  if (!validDate(dt1)) {
    return 'Invalid date: ' + date1
  }
  if (!validDate(dt2)) {
    return 'Invalid date: ' + date2
  }

  // Make sure date2 comes after date1
  if (dt1[2] > dt2[2]
    || (dt1[2] === dt2[2] && dt1[1] > dt2[1])
    || (dt1[2] === dt2[2] && dt1[1] === dt2[1] && dt1[0] > dt2[0])) {
    var tmp = dt2;
    dt2 = dt1;
    dt1 = tmp;
  }

  // Same year
  if (dt1[2] === dt2[2]) {
    return numDaysPassedJan1(dt2) - numDaysPassedJan1(dt1) - 1 + ' days'
  }

  for (var i = dt1[2] + 1; i < dt2[2]; i++) {
    numDays += numDaysFullYear(i);
  }

  return numDays + numDaysPassedJan1(dt2) + numDaysFullYear(dt1[2]) - numDaysPassedJan1(dt1) - 1 + ' days'
}

if (typeof module !== 'undefined') {
  module.exports = dateDiff;
}
