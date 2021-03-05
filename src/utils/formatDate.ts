export const formatDate = (dates: Date) => {
  var date = new Date(dates);
  // Create a list of names for the months
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // return a formatted date
  return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();

};