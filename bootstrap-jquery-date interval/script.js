$(document).ready(function() {
  $("#calculateBtn").on("click", function() {
    var startDate = moment($("#startDate").val());
    var endDate = moment($("#endDate").val());

    if (startDate.isValid() && endDate.isValid()) {
      var totalDays = endDate.diff(startDate, 'days');
      var years = endDate.diff(startDate, 'years');
      startDate.add(years, 'years');

      var months = endDate.diff(startDate, 'months');
      startDate.add(months, 'months');

      var weeks = endDate.diff(startDate, 'weeks');
      startDate.add(weeks, 'weeks');

      var days = endDate.diff(startDate, 'days');

      $("#result1").text(`Years: ${years}`);
      $("#result2").text(`Months: ${months}`);
      $("#result3").text(`Weeks: ${weeks}`);
      $("#result4").text(`Days: ${days}`);
      $("#totalDays").text(`Total days: ${totalDays}`);
    } else {
      alert('Please select both start and end dates.');
    }
  });
});
