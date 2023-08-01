function age() {
  var dateOne = document.getElementById("date").value;
  var monthOne = document.getElementById("month").value;
  var yearOne = document.getElementById("year").value;
  var date = new Date();
  var dateTwo = date.getDate();
  var monthTwo = date.getMonth();
  var yearTwo = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31];

  if(dateOne.length && monthOne.length && yearOne.length > 0){
    if (dateOne > dateTwo) {
        dateTwo = dateTwo + month[monthTwo - 1];
        monthTwo = monthTwo - 1;
      }
      if (monthOne > monthTwo) {
        monthTwo = monthTwo + 13;
        yearTwo = yearTwo - 1;
      }
      var d = dateTwo - dateOne;
      var m = monthTwo - monthOne;
      var y = yearTwo - yearOne;
      document.getElementById(
        "age"
      ).innerHTML = `Your Age is "${y}" Years "${m}" Months "${d}" Days"`;
  }

}
