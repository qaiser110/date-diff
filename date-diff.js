/**
 * Created by qaiser on 29/11/2016.
 */
function dateDiff(date1, date2) {
  var datesDiff, date1Param, date2Param, dt1, dt2,
      errMessage = '',
      msOneDay = 60 * 60 * 24 * 1000;

  if (!date1 || !date2) {
    return 'Missing Date: Please provide both start date and end date.\n ' +
        'Usage: node diff \<START_DATE\> - \<END_DATE\>\n' +
        'Example: node diff 04/07/1984 - 25/12/1984'
  }

  date1Param = date1.toString().split('/');

  dt1 = new Date(date1Param[2],date1Param[1],date1Param[0]);

  date2Param = date2.toString().split('/');
  dt2 = new Date(date2Param[2],date2Param[1],date2Param[0]);

  if (dt1 == 'Invalid Date') {
    errMessage += '   Invalid Date: ' + date1 + '\n';
  }
  if (dt2 == 'Invalid Date') {
    errMessage += '   Invalid Date: ' + date2 + '\n';
  }
  if (errMessage) {
    return errMessage;
  }

  day1 = dt1.getTime();
  day2 = dt2.getTime();

  datesDiff = Math.round((day1 - day2) / msOneDay);
  datesDiff = Math.abs(datesDiff) - 1;

  return datesDiff + ' days';
}

if (typeof module !== 'undefined') {
  module.exports = dateDiff;
}