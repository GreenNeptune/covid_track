
exports.daysFromNow = n => {
  let d = new Date();
  d.setDate(d.getDate() + Math.abs(n));
  return d;

};

exports.today = () => {
  let d = new Date();
  return d;

};

exports.yesterday = () => {
  let d = new Date();
  d.setDate(d.getDate() - 1);
  return d;

};

exports.lastWeekend = () => {
  let d = new Date();
  d.setDate(d.getDate() - 7);
  return d;

};

exports.lastMonth = () => {
  let d = new Date();
  d.setMonth(d.getMonth() - 1);
  return d;

};

exports.addDaysToDate = (date, n) => {
  let d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
};


exports.getDatesBetweenDates = (startDate, endDate) => {
  let dates = []
  const theDate = new Date(startDate)
  while (theDate < endDate) {
    dates = [...dates, new Date(theDate)]
    theDate.setDate(theDate.getDate() + 1)
  }
  return dates
}