

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
var db = firebase.firestore();
const ref = db.collection('teams').doc("teams");


// TIMER

const zeroPad = (s, i) => {
  return String(s).padStart(i, '0');
}

// Set the date we're counting down to
var countDownDate = new Date("Aug 15, 2021 16:00:00 GMT+0200").getTime();

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
     //document.getElementById("timer").innerHTML = "COMING SOON";
  }
}, 1000);



// VERSUS


const data = {
  team1: {
    name: "X PuSsYxxMoNeYxxW33D X",
    title: "You don't want this fight!",
    description: "You won't stand a chance against us!",
    video: "https://storage.opensea.io/files/38945227803851764ca9482dda239a3a.mp4",
    color: "#ff3af6",
    links: [
      { text: "Stacy", url: "https://twitter.com/cryptostacys"},
      { text: "Socra", url: "https://twitter.com/SocratreesMusic"},
      { text: "Devil", url: "https://twitter.com/"},
      { text: "NONE", url: "https://twitter.com/NONE32X32"},
    ],
    votes: 1,
  },
  team2: {
    name: "FIRE FAIRYS",
    title: "Fight fire with fire!",
    description: "We are too hot to handle!",
    video: "https://storage.opensea.io/files/3df711c3c2b4d19e33f8aa19033f0ba5.mp4",
    color: "#e95f5f",
    links: [
      { text: "rentfx", url: "https://twitter.com/renftx"},
      { text: "Bones", url: "https://twitter.com/BonesClub_NFT"},
      { text: "dpop", url: "https://twitter.com/deepopped"},
      { text: "Gersch", url: "https://twitter.com/thedavidgersch"},
    ],
    votes: 1,
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
  ref.get().then((doc) => {
    data.team1.votes = parseInt(doc.data().team1.votes);
    data.team2.votes = parseInt(doc.data().team2.votes);

    const total = data.team1.votes + data.team2.votes;
    Object.entries(data).forEach(entries => {
      [ teamName, team ] = entries;
      const percentage = 100 / total * team.votes;
      document.getElementById(`${teamName}-votes`).style.width = `calc(${percentage.toFixed(0)}% - 3px)`;
      document.getElementById(`${teamName}-votes`).innerHTML = `${percentage.toFixed(1)}%`;
    });

    setInterval(updateVotes, 300000);
  })
  

    
};

const init = () => {
  updateTeams();
  updateVotes();
}


