function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//TODO use addClass()
$(document).ready(function() {
  var stars = "";
  console.log("ready!");
  //function that makes cloud size, postiton and animation random
  $(".a-cloud").each(function() {
    var randomPercentage = getRandomInt(0, 70) + "%";
    var randomTime = getRandomInt(0, 10) + "s";
    var randomSize = getRandomInt(0, 70) + "%";
    // //TODO: mit Natlie anschauen
    // $(this).css({
    //   "animation-delay": randomTime,
    //   "animation-duration": randomTime * 0.05,
    //   top: randomPercentage,
    //   zoom: randomSize
    // });
    var clouds = document.getElementsByClassName("cloud");
    for (var i = 0; i < clouds.length; i++) {}
  });
  //loop that makes star size and position random
  for (var i = 0; i <= 100; i++) {
    var randomX = getRandomInt(0, 100) + "vw";
    var randomY = getRandomInt(0, 100) + "vh";
    var randomSize = getRandomInt(0, 1.5) + "px";
    var star = randomX + " " + randomY + " 0px " + randomSize + " white";
    if (i !== 100) {
      star += ", ";
    }
    stars += star;
  }
  $(".a-stars").css({
    "box-shadow": stars
  });
});
