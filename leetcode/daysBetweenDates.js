/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
let daysBetweenDates = function (date1, date2) {
  return Math.abs(date(date1) - date(date2));
};

function date(date) {
  let fullDate = date.split('-').map((d) => Number(d));
  let year = fullDate[0];
  let month = fullDate[1];
  let days = fullDate[2];
  let numOfDays = 0;
  let startYear = 1900;
  while (startYear < year) {
    if (isLeapYear(startYear)) {
      numOfDays += 366;
    } else {
      numOfDays += 365;
    }

    startYear++;
  }

  const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (isLeapYear(year)) {
    monthDays[2] = 29;
  }

  for (let i = 1; i < month; i++) {
    numOfDays += monthDays[i];
  }

  numOfDays += days;

  return numOfDays;
}

function isLeapYear(year) {
  if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)) return true;
  else return false;
}

console.log(daysBetweenDates('2019-06-29', '2019-06-30'));
console.log(daysBetweenDates('2020-01-15', '2019-12-30'));
