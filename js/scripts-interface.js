$(document).ready(function(){
  console.log("Hello!")
  $(".user-info").submit(function(event) {
    event.preventDefault();
    const age = $("#user-age").val();
    let ageSeconds = age * 31536000;
    console.log("Looks like you are " + age + " years old, or " + ageSeconds + " seconds old.")
  });
});
