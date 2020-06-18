var date = new Date();
var nextDate = new Date().setDate(date.getDate() + 30);
var newDate = new Date(nextDate);

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var newDay = newDate.getDate();
var newMonth = newDate.getMonth() + 1;
var newYear = newDate.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;
if (newMonth < 10) newMonth = "0" + newMonth;
if (newDay < 10) newDay = "0" + newDay;

var today = year + "-" + month + "-" + day;
var max = newYear + "-" + newMonth + "-" + newDay;

document.getElementById("datePicker").value = today;
document.getElementById("datePicker").min = today;
document.getElementById("datePicker").max = max;