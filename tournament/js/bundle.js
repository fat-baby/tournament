const zeroPad = (s, i) => {
  return String(s).padStart(i, '0');
}

// Set the date we're counting down to
var countDownDate = new Date("Aug 2, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = + zeroPad(hours + days*24, 2) + ":"
  + zeroPad(minutes, 2) + ":" + zeroPad(seconds, 2);
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "BATTLE OVER";
  }
}, 1000);

const elem1 = document.getElementById("hp1")
const elem2 = document.getElementById("hp2")
const data = {
  team1: {
    name: "Team Naked",
    title: "The naked menace!",
    description: "We will be the best, like no one ever was! <br> Because nakedness is justice!",
    video: "https://storage.opensea.io/files/24266851c4c0e67ff0813062a7424a5d.mp4",
    color: "#ff00a0",
    links: [
      { text: "Pixelhans", url: "https://twitter.com/pxlhns"},
      { text: "Zaza", url: "https://twitter.com/zazanft"},
      { text: "Steamed Bun", url: "https://twitter.com/steamed_bunny"},
      { text: "Sincos", url: "https://twitter.com/sincosnft"},
    ],
    votes: 140,
  },
  team2: {
    name: "Purple Nurple",
    title: "Undefeated in combat",
    description: "You stand no chance! For we have the power of purp nurps! \n We will prevail ahahahaha",
    color: "#c787f8",
    video: "https://storage.opensea.io/files/7923729ef08dde103a2a871211cfe3b7.mp4",
    links: [
      { text: "HashBastards", url: "https://twitter.com/"},
      { text: "HOLLYWEIRDZ", url: "https://twitter.com/"},
      { text: "Junshi", url: "https://twitter.com/"},
      { text: "Robbies", url: "https://twitter.com/"},
    ],
    votes: 63,
  }
}


const updateTeams = () => {
  Object.keys(data).forEach(team => {
    document.getElementById(`${team}-name`).innerHTML = data[team].name;
    document.getElementById(`${team}-name`).style.background = data[team].color;
    document.getElementById(`${team}-votes`).style.background = data[team].color;
    document.getElementById(`${team}-title`).style.background = data[team].color;
    document.getElementById(`${team}-title`).innerHTML = data[team].title;
    document.getElementById(`${team}-video`).children[0].setAttribute("src", data[team].video);
    document.getElementById(`${team}-video`).load();
    document.getElementById(`${team}-description`).innerHTML = "<span class='quotes'>\"</span>" + data[team].description + "<span class='quotes'>\"</span>";
    data[team].links.forEach((member, index) => {
      document.getElementById(`${team}-member${index+1}`).innerHTML = data[team].links[index].text;
      document.getElementById(`${team}-member${index+1}`).setAttribute("href", data[team].links[index].url); 
    })
  })
};

const updateVotes = () => {
  const total = data.team1.votes + data.team2.votes
  Object.entries(data).forEach(entries => {
    [ teamName, team ] = entries;
    const percentage = 100 / total * team.votes;
    document.getElementById(`${teamName}-votes`).style.width = `calc(${percentage.toFixed(0)}% - 3px)`;
    document.getElementById(`${teamName}-votes`).innerHTML = `${percentage.toFixed(1)}%`;
  });
};

const init = () => {
  updateTeams();
  updateVotes();
}