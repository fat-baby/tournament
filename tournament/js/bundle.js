

var firebaseConfig = {
  apiKey: "AIzaSyCBJd6GbWVde-zNYDAsRj_gxYVhuU8p4Ic",
  authDomain: "fatbaby-tournament.firebaseapp.com",
  projectId: "fatbaby-tournament",
  storageBucket: "fatbaby-tournament.appspot.com",
  messagingSenderId: "977414828347",
  appId: "1:977414828347:web:2e0ba9cdecb8cc6ef9871e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const ref = db.collection('teams').doc("teams");


// TIMER

const zeroPad = (s, i) => {
  return String(s).padStart(i, '0');
}

// Set the date we're counting down to
var countDownDate = new Date("Aug 3, 2021 11:15:00").getTime();

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
    document.getElementById("timer").innerHTML = "COMING SOON";
  }
}, 1000);



// VERSUS


const data = {
  team1: {
    name: "PURPLE NURPLE",
    title: "Don't get it twisted!",
    description: "Wait until you see my master balls!",
    video: "https://storage.opensea.io/files/7923729ef08dde103a2a871211cfe3b7.mp4",
    color: "#c787f8",
    links: [
    { text: "HashBastards", url: "https://twitter.com/HashBastardsNFT"},
    { text: "Robbies", url: "https://twitter.com/robbiesnft"},
    { text: "HOLLYWEIRDZ", url: "https://twitter.com/HOLLYWEIRDZ420"},
    { text: "Junshi", url: "https://twitter.com/JunshiNFT"},
    ],
    votes: 13,
  },
  team2: {
    name: "THE HALLOWS",
    title: "Fear the hallows!",
    description: "Fine then! Show me your best!",
    video: "https://storage.opensea.io/files/083c8e295587c88157713f055b4b0f57.mp4",
    color: "#eb682c",
    links: [
    { text: "Momo", url: "https://twitter.com/MomoUhOh"},
    { text: "Searcher", url: "https://twitter.com/SearcherSunset"},
    { text: "IndigeTal", url: "https://twitter.com/IndigetalG"},
    { text: "Robbnotbob", url: "https://twitter.com/Robbnotbob1"},
    ],
    votes: 8,
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
  // const total = data.team1.votes + data.team2.votes
  // Object.entries(data).forEach(entries => {
  //   [ teamName, team ] = entries;
  //   const percentage = 100 / total * team.votes;
  //   document.getElementById(`${teamName}-votes`).style.width = `calc(${percentage.toFixed(0)}% - 3px)`;
  //   document.getElementById(`${teamName}-votes`).innerHTML = `${percentage.toFixed(1)}%`;
  // });

  // const init = () => {
    ref.get().then((doc) => {
      document.getElementById("team1-votes").value = doc.data().team1.votes;
      document.getElementById("team2-votes").value = doc.data().team2.votes;
    })
  // }
    setInterval(updateVotes, 300000);
};

const init = () => {
  updateTeams();
  updateVotes();
}


