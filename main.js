function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//TODO use addClass()
$(document).ready(function () {
  var stars = "";
  var clouds = $(".a-cloud");
  //function that generates random cloud size, postiton and animation duration/delay
  clouds.each(function () {
    //creates randomly generated position, delay, duration and size
    var randomPercentage = getRandomInt(0, 70) + "%";
    var randomDelay = getRandomInt(0, 20);
    var randomTime = getRandomInt(10, 25);
    var randomSize = getRandomInt(10, 70) + "%";

    //sets randomly generated variables for each cloud
    this.style.setProperty("--animation-delay", randomDelay + "s");
    this.style.setProperty("--animation-duration", randomTime + "s");
    this.style.setProperty("--top", randomPercentage);
    this.style.setProperty("--zoom", randomSize);
    $(this).addClass("a-cloud__animation-config");
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