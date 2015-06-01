$(document).ready(function() {
  $("form#place").submit(function(event) {
    event.preventDefault();

    var city = $("input#city").val(), date=$("input#timeOfVisit").val(), landmark = $("input#landmark").val();
    var trip = {city, date, landmark};
    $("ul.tripList").append("<li class='city'>" + trip.city + ": " + trip.date.toString() + "</li>");

    $(".city").last().click(function(){
      $(".info").html("<p>City: " + trip.city + "</p><p>Date: " + trip.date.toString() + "</p><p>Landmark: " + trip.landmark + "</p>");
    })

    $("input#city").val("");
    $("input#timeOfVisit").val("yyyy-MM-dd");
    $("input#landmark").val("");
  });
});
