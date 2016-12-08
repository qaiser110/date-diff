
suite('isLeapYear() tests', function() {

  test('Valid Leap Year', function() {
    expect(isLeapYear('2000')).to.equal(1);
    expect(isLeapYear('2012')).to.equal(1);
  });

  test('Invalid leap year', function() {
    expect(isLeapYear('1700')).to.equal(0);
    expect(isLeapYear('1900')).to.equal(0);
    expect(isLeapYear('2013')).to.equal(0);
  });
});

suite('validDate() tests', function() {

  test('Valid date', function() {
    expect(validDate([22,2,2000])).to.be.true;
  });

  test('Invalid date', function() {
    expect(validDate([31,11,2016])).to.be.false;
    expect(validDate([32,10,2016])).to.be.false;
    expect(validDate([22,13,2016])).to.be.false;
  });

  test('Invalid date - ive values', function() {
    expect(validDate([-11,11,2016])).to.be.false;
    expect(validDate([11,-11,2016])).to.be.false;
    expect(validDate([11,11,-2016])).to.be.false;
  });

  test('Valid date - leap year', function() {
    expect(validDate([29,2,1972])).to.be.true;
    expect(validDate([29,2,2012])).to.be.true;
  });

  test('Invalid date - not leap year', function() {
    expect(validDate([29,2,1700])).to.be.false;
    expect(validDate([29,2,2013])).to.be.false;
  });
});

suite('numDaysPassedJan1() tests', function() {

  test('First month', function() {
    expect(numDaysPassedJan1([22,1,2000])).to.equal(22);
  });

  test('Last month', function() {
    expect(numDaysPassedJan1([30,12,2001])).to.equal(364);
  });

  test('Last month - Leap Year', function() {
    expect(numDaysPassedJan1([30,12,2000])).to.equal(365);
  });

});

suite('numDaysFullYear() tests', function() {

  test('Non-Leap Year', function() {
    expect(numDaysFullYear('2001')).to.equal(365);
  });

  test('Leap Year', function() {
    expect(numDaysFullYear('2000')).to.equal(366);
  });

});


suite('Same year tests', function() {

  test('should return 0 days', function() {
    expect(dateDiff('20/01/2016','21/01/2016')).to.equal('0 days');
  });

  test('should return 1 days', function() {
    expect(dateDiff('22/12/2016', '20/12/2016')).to.equal('1 days');
  });

  test('should return 364 days', function() {
    expect(dateDiff('31/12/2016', '01/01/2016')).to.equal('364 days');
  });

  test.skip('leap year should return 365 days', function() {
    expect(dateDiff('01/01/2000','31/12/2000')).to.equal('365 days');
  });

});

suite('One Year diff', function() {

  test('should return 364 days', function() {
    expect(dateDiff('20/01/2015','20/01/2016')).to.equal('364 days');
  });

  test('should return 0 days', function() {
    expect(dateDiff('1/1/2016', '31/12/2015')).to.equal('0 days');
  });

  test.skip('starting leap year should return 729 days', function() {
    expect(dateDiff('01/01/2000','31/12/2001')).to.equal(365 + 364 + ' days');
  });

  test('ending leap year should return 729 days', function() {
    expect(dateDiff('01/01/1999','31/12/2000')).to.equal(364 + 365 + ' days');
  });

});

suite('More than one Year diff', function() {

  test('should return 365 days', function() {
    expect(dateDiff('1/1/2003', '31/12/2001')).to.equal('365 days');
  });

  test('with leap year should return 1459 days', function() {
    expect(dateDiff('01/01/1998','31/12/2001')).to.equal(364 + 365 + 366 + 364 + ' days');
  });

});

suite('dateDiff() tests', function() {

  test('test without dates', function() {
    expect(dateDiff()).to.have.string('Missing Date');
  });

  test('test missing first date', function() {
    expect(dateDiff(null, '02/06/1983')).to.have.string('Missing Date: Please provide both start date and end date.');
  });

  test('test missing second date', function() {
    expect(dateDiff('02/06/1983')).to.have.string('Missing Date: Please provide both start date and end date.');
  });

  test('test Invalid date1', function() {
    expect(dateDiff('02/06/19832','22/06/2014')).to.equal('Invalid date: 02/06/19832');
  });

  test('test Invalid date2', function() {
    expect(dateDiff('02/06/1983','32/06/2014')).to.equal('Invalid date: 32/06/2014');
  });

  test('Valid dates test 02/06/1983 - 22/06/1983: 19 days', function() {
    expect(dateDiff('02/06/1983','22/06/1983')).to.equal('19 days');
  });

  test('Valid dates test 24/06/1980 - 22/06/1983: 19 days', function() {
    expect(dateDiff('24/06/1980','22/06/1983')).to.equal('1092 days');
  });

  test('Valid dates test 04/07/1984 - 25/12/1984: 173 days', function() {
    expect(dateDiff('25/12/1984','04/07/1984')).to.equal('173 days');
  });

  test('Valid dates test 03/01/1989 - 03/08/1983: 1979 days', function() {
    expect(dateDiff('03/01/1989','03/08/1983')).to.equal('1979 days');
  });

});
