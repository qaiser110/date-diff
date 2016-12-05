
suite('My Suite', function() {

  test('test without dates', function() {
    expect(dateDiff()).to.have.string('Missing Date');
  });

  test('test invalid dates', function() {
    expect(dateDiff('02/06/1983','22/06')).to.have.string('Invalid Date: 22/06');
  });

  test('test missing first date', function() {
    expect(dateDiff(null, '02/06/1983')).to.have.string('Missing Date: Please provide both start date and end date.');
  });

  test('test missing second date', function() {
    expect(dateDiff('02/06/1983')).to.have.string('Missing Date: Please provide both start date and end date.');
  });

  test('test invalid date: integers instead of date', function() {
    var result = dateDiff(12,1333);
    expect(result).to.have.string('Invalid Date: 12');
    expect(result).to.have.string('Invalid Date: 1333')
  });

  test('valid dates test 02/06/1983 - 22/06/1983: 19 days', function() {
    expect(dateDiff('02/06/1983','22/06/1983')).to.equal('19 days');
  });

  test('valid dates test 04/07/1984 - 25/12/1984: 173 days', function() {
    expect(dateDiff('25/12/1984','04/07/1984')).to.equal('173 days');
  });

  test('valid dates test 03/01/1989 - 03/08/1983: 1979 days', function() {
    expect(dateDiff('03/01/1989','03/08/1983')).to.equal('1979 days');
  });

});