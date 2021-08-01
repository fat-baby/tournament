const zeroPad = (s, i) => {
  return String(s).padStart(i, '0');
}

// Set the date we're counting down to
var countDownDate = new Date("Sep 1, 2021 00:00:00").getTime();

const updateTimer = () => {
  var now = new Date().getTime();
  
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = days + " <span class='timeUnits'>days</span> " +  zeroPad(hours, 2) + " <span class='timeUnits'>hours</span> " + zeroPad(minutes, 2) + " <span class='timeUnits'>minutes</span> " + zeroPad(seconds, 2) + " <span class='timeUnits'>seconds</span>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "IT'S TIME";
  }
}
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  updateTimer();
}, 1000);


var introAnimation = anime.timeline({
  autoplay: false
});

introAnimation
  .add({
    targets: ".line1",
    duration: 2500,
    opacity: 1,
    letterSpacing: "0.15em",
    delay: 1000,
    easing: 'cubicBezier(0,0.25,0,0.99)'
  })
  .add({
    targets: ".line2",
    duration: 3000,
    delay: 0,
    letterSpacing: "0.15em",
    opacity: 1,
    delay: 200,
    easing: 'cubicBezier(0,0.25,0,0.99)'
  })
  .add({
    targets: ".line3",
    duration: 3000,
    delay: 0,
    letterSpacing: "0.15em",
    opacity: 1,
    delay: 200,
    easing: 'cubicBezier(0,0.25,0,0.99)'
  })
  .add({
    targets: ".overlay",
    duration: 1,
    delay: 200,
    opacity: .8,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  })
  .add({
    targets: ".overlay",
    duration: 150,
    delay: 0,
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  })
  .add({
    targets: ".word1",
    duration: 1500,
    scale: 1.2,
    delay: 200,
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  })
  .add({
    targets: ".word2",
    duration: 1500,
    scale: 1.2,
    delay: 200,
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  })
  .add({
    targets: ".word3",
    duration: 1500,
    scale: 1.2,
    delay: 200,
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  })
  .add({
    targets: "#timer",
    duration: 2000,
    delay: 500,
    opacity: 1,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  })
  .add({
    targets: ".overlay",
    duration: 2000,
    delay: 0,
    opacity: .7,
    easing: 'cubicBezier(.5, .05, .1, .3)',
    complete: () => { flicker(); }
  });


const flicker = () => {
  anime({
    targets: '.overlay',
    opacity: .85,
    duration: 4000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });
}
  

const init = () => {
  updateTimer();
  introAnimation.play();
}
