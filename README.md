## About the tool

This tool is designed to calculate the number of full days elapsed between two dates. The first and the last day are considered partial days and never counted. For example, difference between  dates 01/01/2000 to 03/01/2000 should return 1.

## Running the tool

### Included Files:

[date-diff.js] contains the code for the `dateDiff` function

### Requirements:

- [Node.js](https://nodejs.org/en/download/) must be installed. Node.js is used here to run the date-diff tool at the command prompt.

### Usage:
Go into the directory root, and run the `node diff` command in the following format:

node diff <START_DATE> <END_DATE>

or

node diff <START_DATE> - <END_DATE>

NOTE: The middle character "-" can be replaced by any other character.

### Valid Formats Examples:

node diff 04/07/1984 - 25/12/1984

node diff 04/07/1984 ~ 25/12/1984

node diff 25/12/1984 04/07/1984


### Running the tests:

To run all the tests, open the index.html file in any browser.
