import { User } from './../js/scripts.js';

$(document).ready(function(){
  $(".results").hide();
  $(".user-info").submit(function(event) {
    event.preventDefault();
    const age = $("#user-age").val();
    let user = new User(age);
    user.calcAgeMercury();
    user.calcAgeVenus();
    user.calcAgeMars();
    user.calcAgeJupiter();

    // Get current time
      // $("#current-time").text(moment());

      // Get user birth date
      // = .val();

      // Calculate the user's age

      // Take age in years and convert to seconds
      // let ageSeconds = age * 31536000;

    $(".user-info").hide();

    // let ageMercury = ageSeconds * .24;
      // let ageVenus = ageSeconds * .62;
      // let ageMars = ageSeconds * 1.88;
      // let ageJupiter = ageSeconds * 11.86;

    // let resultsReveal = `${ageMercury} seconds old on Mercury, but ${ageVenus} seconds old on Venus, ${ageMars} seconds old on Mars, and ${ageJupiter} seconds old on Jupiter.`
    // let results = `${age}`
    let results = `You are ${user.age} years old, so you would be ${user.ageSeconds} seconds old on Earth,

    ${user.ageMercury} years, or
    ${user.ageMercurySeconds} seconds old on Mercury,

    ${user.ageVenus} years, or
    ${user.ageVenusSeconds} seconds old on Venus,

    ${user.ageMars} years, or
    ${user.ageMarsSeconds} seconds old on Mars,

    ${user.ageJupiter} years, or
    ${user.ageJupiterSeconds} seconds old on Jupiter.`
    $(".results").append(results);

    // if (document.getElementById('smoker').checked) {
      //     $(".results").append("You'll apparently lose ten years or 315360000 seconds from smoking, though.")
      // } else if (document.getElementById('not-a-smoker').checked) {
      //   $(".results").append("Keep up the not-smoking, I guess.")
      // }

    $(".results").show();

    // if smoke, then -315360000
      // Take 2 dates and determine the difference between the two in seconds
      // Run the differnece  through 4 different calculations

  });
});
